import React from 'react';
import { Button } from './button';

export const PrimaryButton = () => (
  <Button variation="primary" buttonText="hello from Primary Button" />
);

export const PrimaryButtonDisabled = () => (
  <Button variation="primary" disabled buttonText="hello from Primary Button" />
);

export const SecondaryButton = () => (
  <Button variation="secondary" buttonText="hello from Secondary Button" />
);

export const SecondaryButtonDisabled = () => (
  <Button
    variation="secondary"
    disabled
    buttonText="hello from Secondary Button"
  />
);

export const WhiteButton = () => <Button buttonText="hello from Button" />;

export const WhiteButtonDisabled = () => (
  <Button buttonText="hello from Button" disabled />
);
