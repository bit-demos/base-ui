import React from 'react';
import { Hero } from './hero';

export const BasicHero = () => (
  <Hero background="none">
    <h1>Hero Component</h1>
  </Hero>
);

export const ColorBackgroundHero = () => (
  <Hero background="orange">
    <h1>Hero Component</h1>
  </Hero>
);

export const ImgBackgroundHero = () => (
  <Hero background="url(https://images.unsplash.com/photo-1592860986140-d77ede8b7116?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80) no-repeat center center scroll">
    <h1>Hero Component</h1>
  </Hero>
);