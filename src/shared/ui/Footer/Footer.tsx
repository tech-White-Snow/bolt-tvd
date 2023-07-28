import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { Text } from '../Text/Text';
import { Logo } from '../Logo/Logo';

interface Social {
  id: number;
  socialNetwork: string;
  link: string;
}

const socials: Social[] = [
  {
    id: 1,
    socialNetwork: 'instagram',
    link: 'https://www.instagram.com/bolt.tv/',
  },
  {
    id: 2,
    socialNetwork: 'vimeo',
    link: 'https://vimeo.com/bolttvofficial',
  },
];

export const Footer: React.FC = () => (
  <footer className="text-center pt-16 sm:flex sm:flex-wrap sm:justify-center sm:items-center border-t border-dull-gray">
    <div className="mb-4 sm:mb-2 sm:mr-4">
      <Logo />
    </div>

    <div className="flex justify-center">
      {socials.map(({ id, socialNetwork, link }) => (
        <Link to={link} key={id} target="_blank">
          <Text type="link-xs" title={socialNetwork} />
        </Link>
      ))}
      <Link to="mailto:hello@bolt.tv?subject=hello!" target="_blank">
        <Text type="link-xs" title="CONTACT" />
      </Link>
    </div>

    <Text type="caption" title={`© ${new Date().getFullYear()} B O L T.`} />
    <Text type="caption" title="All rights reserved" />
  </footer>
);
