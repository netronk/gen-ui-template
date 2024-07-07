import {
  type BaseLayoutProps,
  type DocsLayoutProps,
} from "@netronk/gen-ui/layout";
import { pageTree } from '@/app/source';

// shared configuration
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: 'My App',
  },
  links: [
    {
      text: 'Documentation',
      url: '/docs',
      active: 'nested-url',
    },
  ],
};

// docs layout configuration
export const docsOptions: DocsLayoutProps = {
  ...baseOptions,
  tree: pageTree,
};
