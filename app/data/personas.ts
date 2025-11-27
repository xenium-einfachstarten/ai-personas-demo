import { Persona } from '../types/persona';

export const personas: Persona[] = [
  {
    id: 1,
    name: 'Persona 1',
    role: 'Placeholder',
    avatar: 'https://i.pravatar.cc/600?img=3',
    personality: 'Placeholder personality',
    color: '#008b8b', // xenium-teal
  },
  {
    id: 2,
    name: 'Persona 2',
    role: 'Placeholder',
    avatar: 'https://i.pravatar.cc/600?img=5',
    personality: 'Placeholder personality',
    color: '#d4ff00', // xenium-lime
  },
  {
    id: 3,
    name: 'Persona 3',
    role: 'Placeholder',
    avatar: 'https://i.pravatar.cc/600?img=7',
    personality: 'Placeholder personality',
    color: '#a8e6cf', // xenium-mint
  },
  {
    id: 4,
    name: 'Persona 4',
    role: 'Placeholder',
    avatar: 'https://i.pravatar.cc/600?img=8',
    personality: 'Placeholder personality',
    color: '#8b7ab8', // xenium-purple
  },
  {
    id: 5,
    name: 'Persona 5',
    role: 'Placeholder',
    avatar: 'https://i.pravatar.cc/600?img=9',
    personality: 'Placeholder personality',
    color: '#1e3a5f', // xenium-navy
  },
  {
    id: 6,
    name: 'Persona 6',
    role: 'Placeholder',
    avatar: 'https://i.pravatar.cc/600?img=10',
    personality: 'Placeholder personality',
    color: '#008b8b', // xenium-teal
  },
  {
    id: 7,
    name: 'Persona 7',
    role: 'Placeholder',
    avatar: 'https://i.pravatar.cc/600?img=19',
    personality: 'Placeholder personality',
    color: '#d4ff00', // xenium-lime
  },
];

// Placeholder responses - werden im nächsten Ticket durch echte Persona-Antworten ersetzt
export const getPersonaResponse = (personaId: number, userMessage: string): string => {
  return `[Persona ${personaId}] Dies ist eine Platzhalter-Antwort. Echte Persönlichkeiten kommen im nächsten Ticket.`;
};
