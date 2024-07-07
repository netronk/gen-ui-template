import { DocsLayout } from '@netronk/gen-ui/layout';
import type { ReactNode } from 'react';
import { docsOptions } from '../layout.config';

export default function Layout({ children }: { children: ReactNode }) {
  return <DocsLayout {...docsOptions}>{children}</DocsLayout>;
}
