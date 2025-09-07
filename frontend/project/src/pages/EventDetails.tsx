import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, MapPin, User, Users, Clock, ArrowLeft } from 'lucide-react';
import { Event } from '../types';
import { eventService } from '../services/eventService';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-toastify';
import LoadingSpinner from '../components/LoadingSpinner';

const EventDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);
  const [registering, setRegistering] = useState(false);

  useEffect(() => {
    if (id) {
      fetchEvent(id);
    }
  }, [id]);

  const fetchEvent = async (eventId: string) => {
    try {
      const data = await eventService.getEvent(eventId);
      setEvent(data);
    } catch (error) {
      console.error('Failed to fetch event:', error);
      toast.error('Failed to load event details');
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async () => {
    if (!user) {
      navigate('/login');
      return;
    }

    if (!event || event.currentAttendees >= event.maxAttendees) {
      toast.error('This event is fully booked');
      return;
    }

    try {
      setRegistering(true);
      await eventService.registerForEvent(event.id);
      toast.success('Successfully registered for the event!');
      // Update local state
      setEvent(prev => prev ? { ...prev, currentAttendees: prev.currentAttendees + 1 } : null);
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Registration failed');
    } finally {
      setRegistering(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <LoadingSpinner size="large" text="Loading event details..." />
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Event not found</h1>
          <button
            onClick={() => navigate('/events')}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Events
          </button>
        </div>
      </div>
    );
  }

  const isFullyBooked = event.currentAttendees >= event.maxAttendees;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>

        {/* Event Header */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="relative">
            <img 
              src={event.imageUrl || `https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1200`}
              alt={event.title}
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <span className="bg-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-3 inline-block">
                {event.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold leading-tight">{event.title}</h1>
            </div>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Event Details */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Event</h2>
                  <p className="text-gray-700 leading-relaxed">{event.description}</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    <span className="font-medium">{new Date(event.date).toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <span className="font-medium">{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span className="font-medium">{event.venue}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <User className="w-5 h-5 text-blue-600" />
                    <span className="font-medium">Speaker: {event.speaker}</span>
                  </div>
                </div>
              </div>

              {/* Registration Section */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Event Registration</h3>
                
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-600">Attendance</span>
                    <span className="font-medium">{event.currentAttendees}/{event.maxAttendees}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-300" 
                      style={{ width: `${(event.currentAttendees / event.maxAttendees) * 100}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    {event.maxAttendees - event.currentAttendees} spots remaining
                  </p>
                </div>

                {user ? (
                  <button
                    onClick={handleRegister}
                    disabled={isFullyBooked || registering}
                    className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      isFullyBooked 
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 shadow-lg hover:shadow-xl'
                    }`}
                  >
                    {registering ? (
                      <div className="flex items-center justify-center space-x-2">
                        <LoadingSpinner size="small" />
                        <span>Registering...</span>
                      </div>
                    ) : isFullyBooked ? (
                      'Event Fully Booked'
                    ) : (
                      <>
                        <Users className="w-5 h-5 inline mr-2" />
                        Register for Event
                      </>
                    )}
                  </button>
                ) : (
                  <div className="text-center">
                    <p className="text-gray-600 mb-4">Please log in to register for this event</p>
                    <button
                      onClick={() => navigate('/login')}
                      className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Login to Register
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;