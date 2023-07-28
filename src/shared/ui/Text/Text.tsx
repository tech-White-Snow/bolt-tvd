import classNames from 'classnames';
import React, { ReactNode } from 'react';

interface TextProps {
  type?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'link'
    | 'link-xs'
    | 'caption';
  title?: ReactNode;
  className?: string;
  withHover?: boolean;
}

export const Text: React.FC<TextProps> = ({
  type,
  title,
  className,
  withHover = true,
}) => {
  if (type === 'h1') {
    return (
      <h1
        className={classNames(
          'text-4xl sm:text-5xl md:text-6xl font-bai font-normal',
          className
        )}
      >
        {title}
      </h1>
    );
  }

  if (type === 'h2') {
    return (
      <h2
        className={classNames(
          'text-3xl sm:text-4xl md:text-5xl font-bai font-normal inline-block',
          className
        )}
      >
        {title}
      </h2>
    );
  }

  if (type === 'h3') {
    return (
      <h3
        className={classNames(
          'text-center pt-2 pb-3.5 mb-10 text-2xl lg:text-3xl font-bai font-normal',
          className
        )}
      >
        {title}
      </h3>
    );
  }

  if (type === 'h4') {
    return (
      <h4
        className={classNames(
          'text-2xl lg:text-3xl font-bai font-normal',
          className
        )}
      >
        {title}
      </h4>
    );
  }

  if (type === 'h5') {
    return (
      <h5
        className={classNames(
          'text-center text-lg sm:text-xl font-bai font-normal',
          className
        )}
      >
        {title}
      </h5>
    );
  }

  if (type === 'h6') {
    return (
      <h6
        className={classNames(
          'text-xs uppercase font-bai font-bold ease-out duration-300',
          className
        )}
      >
        {title}
      </h6>
    );
  }

  if (type === 'link') {
    return (
      <p
        className={classNames(
          'text-lg text-light-gray font-bai font-normal  ease-out duration-300',
          className,
          { 'hover:text-white': withHover }
        )}
      >
        {title}
      </p>
    );
  }

  if (type === 'link-xs') {
    return (
      <p
        className={classNames(
          'text-light-gray text-xs px-3.5 py-1.5 font-bai font-bold hover:text-white ease-out duration-300 uppercase tracking-widest',
          className
        )}
      >
        {title}
      </p>
    );
  }

  if (type === 'caption') {
    return (
      <p
        className={classNames(
          'text-light-gray text-sm px-3.5 py-1.5 font-bai font-normal',
          className
        )}
      >
        {title}
      </p>
    );
  }

  return (
    <p
      className={classNames('text-light-gray font-bai font-normal', className)}
    >
      {title}
    </p>
  );
};
