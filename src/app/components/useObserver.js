import { useEffect, useState, useRef } from 'react';

const useObserver = (options) => {
  const [entries, setEntries] = useState([]);
  const observerRef = useRef(null);
  const observedElements = useRef(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const newEntries = [];
      entries.forEach(entry => {
        if (entry.isIntersecting && !observedElements.current.has(entry.target)) {
          newEntries.push({
            id: entry.target.id,
            isIntersecting: entry.isIntersecting
          });
          observedElements.current.add(entry.target);
        }
      });
      if (newEntries.length > 0) {
        setEntries(prevEntries => [...prevEntries, ...newEntries]);
      }
    }, {
      ...options,
      // rootMargin: '-72px 0px 0px 0px'
    });

    observerRef.current = observer;

    return () => {
      observer.disconnect();
    };
  }, [options]);

  const observe = (ref) => {
    if (ref && ref.current && !observedElements.current.has(ref.current)) {
      observerRef.current.observe(ref.current);
    }
  };

  const unobserve = (ref) => {
    if (ref && ref.current) {
      observerRef.current.unobserve(ref.current);
    }
  };

  return { entries, observe, unobserve };
};

export default useObserver;
