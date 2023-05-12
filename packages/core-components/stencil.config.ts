import { Config } from '@stencil/core';

import { angularOutputTarget } from '@stencil/angular-output-target';

export const config: Config = {
  namespace: 'core-components',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      copy: [
        {
          src: '**/*.{jpg,png,svg}',
          dest: 'dist/components/assets',
          warn: true,
        }
      ]
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },

    angularOutputTarget({
      componentCorePackage: '@nx-angular-stencil-test/core-components',
      directivesProxyFile:
        '../../../packages/core-components-angular/src/generated/directives/proxies.ts',
      directivesArrayFile:
        '../../../packages/core-components-angular/src/generated/directives/index.ts',
    }),
  ],
};
