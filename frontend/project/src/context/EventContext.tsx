import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { EventContextType, Event, EventFilters } from '../types';
import { eventService } from '../services/eventService';

const EventContext = createContext<EventContextType | undefined>(undefined);

export const useEvents = () => {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error('useEvents must be used within an EventProvider');
  }
  return context;
};

interface EventProviderProps {
  children: ReactNode;
}

export const EventProvider: React.FC<EventProviderProps> = ({ children }) => {
  const [events, setEvents] = useState<Event[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchEvents = async () => {
    try {
      setLoading(true);
      const data = await eventService.getEvents();
      setEvents(data);
      setFilteredEvents(data);
    } catch (error) {
      console.error('Failed to fetch events:', error);
    } finally {
      setLoading(false);
    }
  };

  const searchEvents = (query: string) => {
    if (!query.trim()) {
      setFilteredEvents(events);
      return;
    }

    const filtered = events.filter(event =>
      event.title.toLowerCase().includes(query.toLowerCase()) ||
      event.description.toLowerCase().includes(query.toLowerCase()) ||
      event.speaker.toLowerCase().includes(query.toLowerCase()) ||
      event.venue.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredEvents(filtered);
  };

  const filterEvents = (filters: EventFilters) => {
    let filtered = events;

    if (filters.category) {
      filtered = filtered.filter(event => event.category === filters.category);
    }

    if (filters.date) {
      filtered = filtered.filter(event => event.date === filters.date);
    }

    if (filters.venue) {
      filtered = filtered.filter(event => event.venue.toLowerCase().includes(filters.venue.toLowerCase()));
    }

    setFilteredEvents(filtered);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <EventContext.Provider value={{
      events,
      loading,
      fetchEvents,
      searchEvents,
      filterEvents,
      filteredEvents
    }}>
      {children}
    </EventContext.Provider>
  );
};