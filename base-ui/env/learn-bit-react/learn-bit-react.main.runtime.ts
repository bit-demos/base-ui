import { MainRuntime } from '@teambit/cli';
import { ReactAspect, ReactMain } from '@teambit/react';
import { EnvsAspect, EnvsMain } from '@teambit/envs';
import { LearnBitReactAspect } from './learn-bit-react.aspect';

export class LearnBitReactMain {
  static slots = [];
  static dependencies = [ReactAspect, EnvsAspect];
  static runtime = MainRuntime;

  static async provider([react, envs]: [ReactMain, EnvsMain]) {
    const learnBitReactEnv = envs.compose(react.reactEnv, [
      react.overrideDependencies({
        devDependencies: {
          '@types/react': '17.0.3'
        }
      })
    ]);

    envs.registerEnv(learnBitReactEnv);

    return new LearnBitReactMain();
  }
}

LearnBitReactAspect.addRuntime(LearnBitReactMain);
