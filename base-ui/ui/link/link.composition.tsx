import React from 'react';
import { MemoryRouter } from 'react-router';
import { Link } from './link';

export const BasicLink = () => (
  <MemoryRouter>
    <Link href="/about">About</Link>
  </MemoryRouter>
);

export const PrimaryLink = () => (
  <MemoryRouter>
    <Link href="/details" buttonClass variation="primary">
      Buy Now
    </Link>
  </MemoryRouter>
);

export const SecondaryLink = () => (
  <MemoryRouter>
    <Link href="/details" buttonClass variation="secondary">
      Buy Now
    </Link>
  </MemoryRouter>
);
