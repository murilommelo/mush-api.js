import { defineConfig } from "tsdown";
import Replace from "unplugin-replace/rolldown";
import packageJson from "./package.json" with { type: "json" };

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  target: "es2022",
  clean: true,
  shims: true,
  dts: true,
  plugins: [
    Replace({
      include: [/\.ts$/],
      values: [
        {
          find: /\[VI\]{{inject}}\[\/VI\]/,
          replacement() {
            return packageJson.version;
          },
        },
      ],
    }),
  ],
  deps: {
    neverBundle: true,
  },
});
