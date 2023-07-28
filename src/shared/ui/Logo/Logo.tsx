import { Link } from 'gatsby';
import React from 'react';

const Logo = () => {
  return (
    <Link to="/">
      <p className="text-5xl font-jakarta text-light-gray tracking-normal opacity-60">
        bolt
      </p>
    </Link>
  );
};

export { Logo };
