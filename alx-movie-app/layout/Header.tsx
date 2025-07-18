import React from 'react';

interface HeaderProps {
  title?: string;
  children?: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ title, children, className = '' }) => {
  return (
    <header className={`bg-gray-800 text-white p-4 ${className}`}>
      <div className="container mx-auto flex justify-between items-center">
        {title && <h1 className="text-2xl font-bold">{title}</h1>}
        {children}
      </div>
    </header>
  );
};

export default Header;