export default function AvatarCarousel() {
  const avatars = [
    'https://i.pravatar.cc/600?img=3',
    'https://i.pravatar.cc/600?img=5',
    'https://i.pravatar.cc/600?img=7',
    'https://i.pravatar.cc/600?img=8',
    'https://i.pravatar.cc/600?img=9',
    'https://i.pravatar.cc/600?img=10',
    'https://i.pravatar.cc/600?img=19',
  ];

  return (
    <div className="avatar-container">
      {avatars.map((src, index) => (
        <div key={index} className="avatar-item">
          <img src={src} alt={`Avatar ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}
