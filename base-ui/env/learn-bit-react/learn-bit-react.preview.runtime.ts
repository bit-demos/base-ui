import { GraphqlUI } from '@teambit/graphql';
import { PreviewRuntime } from '@teambit/preview';
import { ReactAspect, ReactPreview } from '@teambit/react';
import { MemoryRouter } from 'react-router';
import { LearnBitReactAspect } from './learn-bit-react.aspect';
import { Theme } from '@learn-bit-react/base-ui.themes.theme';

export class SymphonyReactPreview {
  static runtime = PreviewRuntime;

  static dependencies = [ReactAspect];

  static async provider([react]: [ReactPreview, GraphqlUI]) {
    const symphonyReactPreview = new SymphonyReactPreview();
    // register a new provider to wrap all compositions in the symphony-react environment.
    react.registerProvider([MemoryRouter, Theme]);

    return symphonyReactPreview;
  }
}

LearnBitReactAspect.addRuntime(SymphonyReactPreview);
