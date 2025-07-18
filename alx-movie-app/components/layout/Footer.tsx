import React from 'react';

interface FooterProps {
  copyrightText?: string;
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ 
  copyrightText = '© 2023 My App. All rights reserved.',
  className = '' 
}) => {
  return (
    <footer className={`bg-gray-800 text-white p-4 ${className}`}>
      <div className="container mx-auto text-center">
        <p>{copyrightText}</p>
      </div>
    </footer>
  );
};

export default Footer;