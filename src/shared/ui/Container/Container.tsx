import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const Container: React.FC<Props> = ({ children }) => (
  <div className="pt-32 sm:pt-36 pb-16 mx-5 sm:mx-10 lg:mx-16">
    <div className="mx-auto max-w-md sm:max-w-screen-md lg:max-w-screen-lg">
      {children}
    </div>
  </div>
);

export const WideContainer: React.FC<Props> = ({ children }) => (
  <div className="pt-32 pb-16 mx-5 sm:mx-10 lg:mx-16">
    <div className="mx-auto max-w-md sm:max-w-screen-md lg:max-w-7xl">
      {children}
    </div>
  </div>
);
