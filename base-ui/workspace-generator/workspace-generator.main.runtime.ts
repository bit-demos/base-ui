import { MainRuntime } from '@teambit/cli';
import { GeneratorMain, GeneratorAspect } from '@teambit/generator';
import { WorkspaceGeneratorAspect } from './workspace-generator.aspect';
import { workspaceTemplate } from './template';

export class WorkspaceGeneratorMain {
  static slots = [];

  static dependencies = [GeneratorAspect];

  static runtime = MainRuntime;

  static async provider([generator]: [GeneratorMain]) {
    generator.registerWorkspaceTemplate([workspaceTemplate]);
    return new WorkspaceGeneratorMain();
  }
}

WorkspaceGeneratorAspect.addRuntime(WorkspaceGeneratorMain);
