import { PreviewRuntime } from '@teambit/preview';
import { ReactAspect, ReactPreview } from '@teambit/react';
import { MemoryRouter } from 'react-router';
import { LearnBitReactAspect } from './learn-bit-react.aspect';
import { Theme } from '@learn-bit-react/base-ui.themes.theme';

export class MyReactPreview {
  static runtime = PreviewRuntime;

  static dependencies = [ReactAspect];

  static async provider([react]: [ReactPreview]) {
    const myReactPreview = new MyReactPreview();
    // register a new provider to wrap all compositions in the symphony-react environment.
    react.registerProvider([MemoryRouter, Theme]);

    return myReactPreview;
  }
}

LearnBitReactAspect.addRuntime(MyReactPreview);
