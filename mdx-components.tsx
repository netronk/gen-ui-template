import type { MDXComponents } from "mdx/types";
import defaultComponents from '"@netronk/gen-ui/mdx';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...defaultComponents,
    ...components,
  };
}
