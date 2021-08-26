import { useState, useEffect } from 'react';

// eslint-disable-next-line
export const useClickOutside = (ref) => {
  const [isOpen, toggleIsOpen] = useState(false);

  const onClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      toggleIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', onClick, true);
    return () => {
      document.removeEventListener('click', onClick, true);
    };
  });

  const changeIsOpen = () => {
    toggleIsOpen(!isOpen);
  };

  return [isOpen, toggleIsOpen, changeIsOpen];
};
