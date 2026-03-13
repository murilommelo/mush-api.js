import { defineConfig } from "tsup";
import Replace from "unplugin-replace/esbuild";
import Package from "./package.json";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  target: "es2022",
  skipNodeModulesBundle: true,
  clean: true,
  shims: true,
  dts: true,
  esbuildPlugins: [
    Replace({
      include: [/\.ts$/],
      values: [
        {
          find: /\[VI\]{{inject}}\[\/VI\]/,
          replacement() {
            return Package.version;
          },
        },
      ],
    }),
  ],
});
