export interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  venue: string;
  category: string;
  speaker: string;
  maxAttendees: number;
  currentAttendees: number;
  imageUrl?: string;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string, role: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
}

export interface EventContextType {
  events: Event[];
  loading: boolean;
  fetchEvents: () => Promise<void>;
  searchEvents: (query: string) => void;
  filterEvents: (filters: EventFilters) => void;
  filteredEvents: Event[];
}

export interface EventFilters {
  category?: string;
  date?: string;
  venue?: string;
}