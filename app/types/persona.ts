export interface Persona {
  id: number;
  name: string;
  role: string;
  avatar: string;
  personality: string;
  color: string; // Xenium color for theming
}

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}
