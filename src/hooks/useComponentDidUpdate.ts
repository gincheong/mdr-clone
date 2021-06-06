import React from 'react';

export const useComponentDidUpdate = () => {
  const didUpdateRef = React.useRef(false);

  React.useEffect(() => {
    didUpdateRef.current = true;
  }, []);

  return didUpdateRef.current;
};