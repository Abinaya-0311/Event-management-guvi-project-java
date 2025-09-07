import { Event } from '../types';

// Mock data for demonstration
const mockEvents: Event[] = [
  {
    id: '1',
    title: 'React Conference 2025',
    description: 'Join us for the biggest React conference of the year featuring the latest updates, best practices, and networking opportunities with industry leaders.',
    date: '2025-03-15',
    time: '09:00',
    venue: 'Tech Convention Center, San Francisco',
    speaker: 'Dan Abramov',
    category: 'Technology',
    capacity: 500,
    registeredCount: 234,
    imageUrl: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '2',
    title: 'AI & Machine Learning Summit',
    description: 'Explore the future of artificial intelligence and machine learning with hands-on workshops and expert presentations.',
    date: '2025-04-22',
    time: '10:00',
    venue: 'Innovation Hub, New York',
    speaker: 'Dr. Sarah Chen',
    category: 'Technology',
    capacity: 300,
    registeredCount: 156,
    imageUrl: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '3',
    title: 'Digital Marketing Masterclass',
    description: 'Learn advanced digital marketing strategies, social media optimization, and conversion techniques from industry experts.',
    date: '2025-05-10',
    time: '14:00',
    venue: 'Business Center, Chicago',
    speaker: 'Mark Johnson',
    category: 'Business',
    capacity: 200,
    registeredCount: 89,
    imageUrl: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '4',
    title: 'Startup Pitch Competition',
    description: 'Watch innovative startups pitch their ideas to a panel of venture capitalists and industry experts.',
    date: '2025-06-05',
    time: '18:00',
    venue: 'Startup Incubator, Austin',
    speaker: 'Various Entrepreneurs',
    category: 'Business',
    capacity: 150,
    registeredCount: 142,
    imageUrl: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '5',
    title: 'Web Design Workshop',
    description: 'Hands-on workshop covering modern web design principles, UX/UI best practices, and the latest design tools.',
    date: '2025-07-18',
    time: '11:00',
    venue: 'Design Studio, Los Angeles',
    speaker: 'Emily Rodriguez',
    category: 'Design',
    capacity: 80,
    registeredCount: 45,
    imageUrl: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '6',
    title: 'Cybersecurity Conference',
    description: 'Stay ahead of cyber threats with the latest security protocols, threat detection methods, and incident response strategies.',
    date: '2025-08-12',
    time: '09:30',
    venue: 'Security Center, Washington DC',
    speaker: 'Alex Thompson',
    category: 'Technology',
    capacity: 400,
    registeredCount: 278,
    imageUrl: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '7',
    title: 'Modern Art Exhibition Opening',
    description: 'Experience contemporary art from emerging artists around the world. Wine reception and artist meet-and-greet included.',
    date: '2025-02-28',
    time: '19:00',
    venue: 'Metropolitan Art Gallery, New York',
    speaker: 'Isabella Martinez',
    category: 'Arts & Culture',
    maxAttendees: 120,
    currentAttendees: 67,
    imageUrl: 'https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '8',
    title: 'Marathon Training Bootcamp',
    description: 'Intensive 3-day training program for marathon preparation with professional coaches and nutritionists.',
    date: '2025-03-08',
    time: '06:00',
    venue: 'Central Park, New York',
    speaker: 'Coach Michael Torres',
    category: 'Sports',
    maxAttendees: 50,
    currentAttendees: 32,
    imageUrl: 'https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '9',
    title: 'Wellness & Mindfulness Retreat',
    description: 'A transformative weekend focused on mental health, meditation practices, and holistic wellness approaches.',
    date: '2025-04-15',
    time: '08:00',
    venue: 'Serenity Wellness Center, California',
    speaker: 'Dr. Amanda Foster',
    category: 'Health',
    maxAttendees: 75,
    currentAttendees: 28,
    imageUrl: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '10',
    title: 'Future of Education Summit',
    description: 'Exploring innovative teaching methods, educational technology, and the future of learning in the digital age.',
    date: '2025-05-20',
    time: '09:00',
    venue: 'Education Center, Boston',
    speaker: 'Prof. David Kim',
    category: 'Education',
    maxAttendees: 250,
    currentAttendees: 134,
    imageUrl: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '11',
    title: 'Jazz Festival 2025',
    description: 'Three days of incredible jazz performances featuring world-renowned musicians and emerging artists.',
    date: '2025-06-12',
    time: '17:00',
    venue: 'Riverside Amphitheater, New Orleans',
    speaker: 'Marcus Williams Quartet',
    category: 'Arts & Culture',
    maxAttendees: 800,
    currentAttendees: 456,
    imageUrl: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '12',
    title: 'Blockchain & Cryptocurrency Workshop',
    description: 'Deep dive into blockchain technology, cryptocurrency trading, and DeFi protocols with hands-on exercises.',
    date: '2025-07-03',
    time: '13:00',
    venue: 'Crypto Hub, Miami',
    speaker: 'Elena Nakamoto',
    category: 'Technology',
    maxAttendees: 100,
    currentAttendees: 87,
    imageUrl: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '13',
    title: 'Sustainable Business Practices Conference',
    description: 'Learn how to implement eco-friendly practices in your business while maintaining profitability and growth.',
    date: '2025-08-25',
    time: '10:30',
    venue: 'Green Business Center, Portland',
    speaker: 'Dr. Rachel Green',
    category: 'Business',
    maxAttendees: 180,
    currentAttendees: 92,
    imageUrl: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '14',
    title: 'Photography Masterclass',
    description: 'Advanced photography techniques covering portrait, landscape, and street photography with professional equipment.',
    date: '2025-09-14',
    time: '11:00',
    venue: 'Creative Arts Studio, Seattle',
    speaker: 'James Patterson',
    category: 'Arts & Culture',
    maxAttendees: 40,
    currentAttendees: 23,
    imageUrl: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '15',
    title: 'Youth Basketball Championship',
    description: 'Annual youth basketball tournament featuring teams from across the region. Family-friendly event with food trucks.',
    date: '2025-10-05',
    time: '15:00',
    venue: 'Sports Complex, Denver',
    speaker: 'Coach Lisa Thompson',
    category: 'Sports',
    maxAttendees: 300,
    currentAttendees: 178,
    imageUrl: 'https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const eventService = {
  async getEvents(): Promise<Event[]> {
    await delay(500); // Simulate network delay
    return mockEvents;
  },

  async getEventById(id: string): Promise<Event | null> {
    await delay(300);
    return mockEvents.find(event => event.id === id) || null;
  },

  async registerForEvent(eventId: string): Promise<{ success: boolean; message: string }> {
    await delay(800);
    const event = mockEvents.find(e => e.id === eventId);
    
    if (!event) {
      return { success: false, message: 'Event not found' };
    }
    
    if (event.registeredCount >= event.capacity) {
      return { success: false, message: 'Event is full' };
    }
    
    // Simulate successful registration
    event.registeredCount += 1;
    return { success: true, message: 'Successfully registered for the event!' };
  },

  async createEvent(eventData: Omit<Event, 'id' | 'registeredCount'>): Promise<Event> {
    await delay(600);
    const newEvent: Event = {
      ...eventData,
      id: Date.now().toString(),
      registeredCount: 0
    };
    mockEvents.push(newEvent);
    return newEvent;
  },

  async updateEvent(id: string, eventData: Partial<Event>): Promise<Event | null> {
    await delay(600);
    const index = mockEvents.findIndex(event => event.id === id);
    
    if (index === -1) {
      return null;
    }
    
    mockEvents[index] = { ...mockEvents[index], ...eventData };
    return mockEvents[index];
  },

  async deleteEvent(id: string): Promise<boolean> {
    await delay(400);
    const index = mockEvents.findIndex(event => event.id === id);
    
    if (index === -1) {
      return false;
    }
    
    mockEvents.splice(index, 1);
    return true;
  }
};