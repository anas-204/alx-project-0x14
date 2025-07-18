import React from 'react';

interface MovieCardProps {
  title: string;
  posterUrl: string;
  year?: string;
  rating?: number;
  className?: string;
}

const MovieCard: React.FC<MovieCardProps> = ({
  title,
  posterUrl,
  year,
  rating,
  className = '',
}) => {
  return (
    <div className={`rounded-lg overflow-hidden shadow-lg ${className}`}>
      <img src={posterUrl} alt={title} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1 truncate">{title}</h3>
        <div className="flex justify-between text-sm text-gray-600">
          {year && <span>{year}</span>}
          {rating && <span>⭐ {rating.toFixed(1)}</span>}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;