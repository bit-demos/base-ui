import { WorkspaceContext } from '@teambit/generator';
import {
  getWorkspaceConfigTemplateParsed,
  stringifyWorkspaceConfig
} from '@teambit/config';

export async function workspaceConfig({
  name,
  defaultScope
}: WorkspaceContext) {
  const configParsed = await getWorkspaceConfigTemplateParsed();
  configParsed['teambit.workspace/workspace'].name = name;
  configParsed['teambit.workspace/workspace'].defaultScope =
    defaultScope || 'bit-stores';
  configParsed['teambit.generator/generator'] = {
    aspects: ['learn-bit-react.base-ui/component-generator']
  },
    configParsed['learn-bit-react.base-ui/component-generator'] = {},
    configParsed['teambit.workspace/variants'] = {
      "{ui/**}": {
        "learn-bit-react.base-ui/env/learn-bit-react": {},
      },
      '{env/*}, {apps/*}': {
        'teambit.harmony/aspect': {}
      },
      '{entity/*}': {
        'teambit.harmony/node': {}
      }
    };

  return stringifyWorkspaceConfig(configParsed);
}
