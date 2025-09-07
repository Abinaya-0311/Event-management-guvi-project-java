import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, User, Users } from 'lucide-react';
import { Event } from '../types';

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const isFullyBooked = event.currentAttendees >= event.maxAttendees;
  
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
      <div className="relative">
        <img 
          src={event.imageUrl || `https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=800`}
          alt={event.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {event.category}
          </span>
        </div>
        {isFullyBooked && (
          <div className="absolute top-4 right-4">
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              Sold Out
            </span>
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{event.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{event.description}</p>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-500 text-sm">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{new Date(event.date).toLocaleDateString()} at {event.time}</span>
          </div>
          <div className="flex items-center text-gray-500 text-sm">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{event.venue}</span>
          </div>
          <div className="flex items-center text-gray-500 text-sm">
            <User className="w-4 h-4 mr-2" />
            <span>{event.speaker}</span>
          </div>
          <div className="flex items-center text-gray-500 text-sm">
            <Users className="w-4 h-4 mr-2" />
            <span>{event.currentAttendees}/{event.maxAttendees} attendees</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
              style={{ width: `${(event.currentAttendees / event.maxAttendees) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-100">
          <Link 
            to={`/events/${event.id}`}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center block"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;