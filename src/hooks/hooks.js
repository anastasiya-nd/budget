import { useEffect } from 'react';

// eslint-disable-next-line
export const useClickOutside = (ref, clickOutside) => {
  const onClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      clickOutside();
    }
  };

  useEffect(() => {
    document.addEventListener('click', onClick, true);
    return () => {
      document.removeEventListener('click', onClick, true);
    };
  });
};
