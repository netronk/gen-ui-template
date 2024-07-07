import { map } from "@/.map";
import { createMDXSource } from "@netronk/gen-mdx";
import { loader } from "@netronk/gen-core/source";

export const { getPage, getPages, pageTree } = loader({
  baseUrl: "/docs",
  rootDir: "docs",
  source: createMDXSource(map),
});
