import React, { useState } from 'react';
import { Link } from 'gatsby';
import { HiOutlineMenuAlt1, HiOutlineX } from 'react-icons/hi';
import { isSafari } from 'react-device-detect';
import { StaticImage } from 'gatsby-plugin-image';
import classNames from 'classnames';
import './Navigation.css';
import { Logo } from '../Logo/Logo';

const Navigation = () => {
  const [isMenuOpened, setMenuOpened] = useState(false);

  return (
    <nav>
      <div className="fixed z-50 p-7 flex flex-row items-center w-full justify-between">
        <div className="flex flex-row items-center">
          {!isMenuOpened ? (
            <div onClick={() => setMenuOpened(true)} className="cursor-pointer">
              <div className="w-8 bg-white h-px" />
              <div className="w-5 bg-white h-px mt-2" />
              <div className="w-8 bg-white h-px mt-2" />
            </div>
          ) : (
            <div
              className="close cursor-pointer"
              onClick={() => setMenuOpened(false)}
            />
          )}

          {!isMenuOpened && (
            <p
              className="ml-3 font-jakarta cursor-pointer text-sm tracking-wider"
              onClick={() => setMenuOpened(true)}
            >
              MENU
            </p>
          )}
        </div>

        {/* {!isSafari && (
            <Link to="/">
              <h1 className="headline">
                <span className="visually-hidden">bolt</span>
                <svg
                  aria-hidden="true"
                  id="lockup-headline-mask"
                  className="headline lockup-headline-mask visually-hidden"
                >
                  <clipPath id="lockup-headline-mask-path">
                    <text
                      dominantBaseline="hanging"
                      textAnchor="middle"
                      x="50%"
                      y="0em"
                      className="font-jakarta tracking-wider"
                      dy="0.125em"
                    >
                      bolt
                    </text>
                  </clipPath>
                </svg>
              </h1>
            </Link>
          )}
        // </div> */}

        <Logo />
      </div>

      <div
        id="myNav"
        className={classNames('overlay', {
          'w-full': isMenuOpened,
          'w-0': !isMenuOpened,
        })}
      >
        <div className="overlay-content">
          <Link
            to="/"
            onClick={() => setMenuOpened(false)}
            className="font-medium font-montserrat"
          >
            Home
          </Link>

          <Link
            to="/branded"
            onClick={() => setMenuOpened(false)}
            className="font-medium font-montserrat"
          >
            Branded
          </Link>

          <Link
            to="/original-development"
            onClick={() => setMenuOpened(false)}
            className="font-medium font-montserrat leading-8"
          >
            Original
          </Link>

          <Link
            to="/about"
            onClick={() => setMenuOpened(false)}
            className="font-medium font-montserrat"
          >
            About
          </Link>

          <Link
            to="/contact"
            onClick={() => setMenuOpened(false)}
            className="font-medium font-montserrat"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export { Navigation };
