import React from 'react';

type ComingSoonButtonProps = {
  label: string;
  message?: string;
  className?: string;
};

const ComingSoonButton: React.FC<ComingSoonButtonProps> = ({ 
  label, 
  className = '',
  message = 'This feature is coming soon!' 
}) => {
  const handleClick = () => {
    alert(message);
  };

  return (
    <button 
      className={`mt-4 sm:mt-0 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 ${className}`}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default ComingSoonButton;
