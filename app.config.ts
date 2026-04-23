import { defineConfig } from "@solidjs/start/config";
import mdx from "@mdx-js/rollup";

export default defineConfig({
  extensions: ["mdx"],
  server: {
    preset: "vercel",
  },
  vite: {
    plugins: [
      {
        ...mdx({
          jsx: true,
          jsxImportSource: "solid-js",
          providerImportSource: "solid-mdx",
        }),
        enforce: "pre",
      },
    ],
  },
});
