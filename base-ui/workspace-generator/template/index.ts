import { WorkspaceContext, WorkspaceTemplate } from '@teambit/generator';
import { workspaceConfig } from './files/workspace-config';
import { readme } from './files/readme-file';
import { gitIgnore } from './files/git-ignore';

export const workspaceTemplate: WorkspaceTemplate = {
  name: 'learn-bit-workspace',
  description: 'workspace template for learn bit',
  generateFiles: async (context: WorkspaceContext) => [
    {
      relativePath: 'workspace.jsonc',
      content: await workspaceConfig(context)
    },
    {
      relativePath: '.gitignore',
      content: gitIgnore()
    },
    {
      relativePath: 'README.md',
      content: readme()
    }
  ],
  importComponents: () => [
    {
      id: 'learn-bit-react.ecommerce/entity/product',
      targetName: 'entity/product',
      path: 'ecommerce/entity/product'
    }
  ]
};
