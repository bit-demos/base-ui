import { MainRuntime } from '@teambit/cli';
import {
  GeneratorMain,
  GeneratorAspect,
  ComponentContext
} from '@teambit/generator';
import { ComponentGeneratorAspect } from './component-generator.aspect';

export class ComponentGeneratorMain {
  static slots = [];
  static dependencies = [GeneratorAspect];
  static runtime = MainRuntime;
  static async provider([generator]: [GeneratorMain]) {
    /**
     * Array of templates. Add as many templates as you want
     * Separate the templates to multiple files if you prefer
     * Modify, add or remove files as needed
     * See the docs file of this component for more info
     */

    generator.registerComponentTemplate([
      /**
       * component 1
       */
      {
        name: 'my-css-component',
        description: 'Component for CSS only',
        generateFiles: (context: ComponentContext) => {
          return [
            // index file
            {
              relativePath: 'index.ts',
              isMain: true,
              content: `import styles from './${context.name}.module.scss';
const { ${context.name} } = styles;
export { ${context.name} };
`
            },

            // docs file
            {
              relativePath: `${context.name}.docs.mdx`,
              content: `---
description: 'A CSS Component for applying styles to components'
labels: ['CSS', 'CSS Modules', 'Sass']
---

import { ${context.name} } from './index';

## CSS Component

Can be reused across multiple components by importing it and then using it like you would any CSS class. For example a button class that applies button styles to a button component and a link component.

## Component Usage

\`\`\`js
import { ${context.name} } from '...';
\`\`\`

\`\`\`js
<div className={${context.name}}>Hello</div>
\`\`\`
`
            },

            // composition file
            {
              relativePath: `${context.name}.composition.tsx`,
              content: `import React from 'react';
import { ${context.name} } from './index';

export const Basic${context.namePascalCase} = () => (
  <div className={${context.name}}>Styled using ${context.name} class</div>
);
`
            },

            // test file
            {
              relativePath: `${context.name}.spec.tsx`,
              content: `import React from 'react';
import { render } from '@testing-library/react';
import { Basic${context.namePascalCase} } from './${context.name}.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<Basic${context.namePascalCase} />);
  const rendered = getByText('Styled using ${context.name} class');
  expect(rendered).toBeTruthy();
});
`
            },

            // add more files here such as css/sass
            {
              relativePath: `${context.name}.module.scss`,
              content: `.${context.name} {
 color: red;
 font-weight: bold;
}
`
            }
          ];
        }
      },

      /**
       * component 2
       */
      {
        name: 'my-react-component',
        description: 'React component with CSS Modules and Sass',
        generateFiles: (context: ComponentContext) => {
          return [
            // index file
            {
              relativePath: 'index.ts',
              isMain: true,
              content: `export { ${context.namePascalCase} } from './${context.name}';
export type { ${context.namePascalCase}Props } from './${context.name}';
`
            },

            // component file
            {
              relativePath: `${context.name}.tsx`,
              content: `import React from 'react';
import styles from './${context.name}.module.scss';


export type ${context.namePascalCase}Props = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function ${context.namePascalCase}({ text }: ${context.namePascalCase}Props) {
  return (
    <div className={styles.${context.name}}>
      {text}
    </div>
  );
}
`
            },

            // docs file
            {
              relativePath: `${context.name}.docs.mdx`,
              content: `---
description: 'A ${context.namePascalCase} component'
labels: ['label1', 'label2', 'label3']
---

import { ${context.namePascalCase} } from './${context.name}';

## React Component for rendering text

A basic div that renders some text

### Component usage
\`\`\`js
<${context.namePascalCase} text="hello from ${context.namePascalCase}" />
\`\`\`

### Using props to customize the text

Modify the text to see it change live:
\`\`\`js live
<${context.namePascalCase} text="hello from ${context.namePascalCase}" />
\`\`\`
`
            },

            // composition file
            {
              relativePath: `${context.name}.composition.tsx`,
              content: `import React from 'react';
import { ${context.namePascalCase} } from './${context.name}';

export const Basic${context.namePascalCase} = () => (
  <${context.namePascalCase} text="hello from ${context.namePascalCase} " />
);
`
            },

            // test file
            {
              relativePath: `${context.name}.spec.tsx`,
              content: `import React from 'react';
import { render } from '@testing-library/react';
import { Basic${context.namePascalCase} } from './${context.name}.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<Basic${context.namePascalCase}/>);
  const rendered = getByText('hello from ${context.namePascalCase}');
  expect(rendered).toBeTruthy();
});

`
            },

            // add more files here such as css/sass
            {
              relativePath: `${context.name}.module.scss`,
              content: `.${context.name} {
 color: red;
 font-weight: bold;
}
`
            }
          ];
        }
      }
      /**
       * Add more components here if needed
       */
    ]);

    return new ComponentGeneratorMain();
  }
}

ComponentGeneratorAspect.addRuntime(ComponentGeneratorMain);
