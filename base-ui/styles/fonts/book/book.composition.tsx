import React from 'react';
import { bookFont } from './index';

export const Normal = () => {
  return (
    <div data-testid="normal" className={bookFont}>
      <div style={{ fontWeight: 'normal' }}>Normal Text</div>
    </div>
  );
};

export const Bold = () => {
  return (
    <div data-testid="bold" className={bookFont}>
      <div style={{ fontWeight: 'bold' }}>Bold Text</div>
    </div>
  );
};

export const Bolder = () => {
  return (
    <div data-testid="bolder" className={bookFont}>
      <div style={{ fontWeight: 800 }}>Bolder text</div>
    </div>
  );
};

export const Italic = () => {
  return (
    <div data-testid="italic" className={bookFont}>
      <div style={{ fontStyle: 'italic' }}>Italic text</div>
    </div>
  );
};

export const BoldAndItalic = () => {
  return (
    <div data-testid="bold-and-italic" className={bookFont}>
      <div style={{ fontWeight: 'bold', fontStyle: 'italic' }}>
        Bold and Italic text
      </div>
    </div>
  );
};

export const BolderAndItalic = () => {
  return (
    <div data-testid="bolder-and-italic" className={bookFont}>
      <div style={{ fontWeight: 800, fontStyle: 'italic' }}>
        Bolder and Italic text
      </div>
    </div>
  );
};
