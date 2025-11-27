'use client';

import { personas } from '../data/personas';

interface AvatarCarouselProps {
  onPersonaClick: (personaId: number) => void;
}

export default function AvatarCarousel({ onPersonaClick }: AvatarCarouselProps) {
  return (
    <div className="avatar-container">
      {personas.map((persona) => (
        <div 
          key={persona.id} 
          className="avatar-item"
          onClick={() => onPersonaClick(persona.id)}
          style={{ cursor: 'pointer' }}
        >
          <img src={persona.avatar} alt={persona.name} />
        </div>
      ))}
    </div>
  );
}
