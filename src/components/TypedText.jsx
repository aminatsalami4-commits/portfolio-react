import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js';

const TypedText = () => {
  const el = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Software Engineer', 'UI/UX Designer', 'Full-Stack Web Developer'],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true
    };

    const typed = new Typed(el.current, options);
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <span ref={el} style={{ color: 'var(--bs-danger)' }}></span>
  )
}

export default TypedText