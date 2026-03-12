import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["./src/index.ts"],
	format: ["cjs", "esm"],
	target: "es2022",
	skipNodeModulesBundle: true,
	clean: true,
	// cjsInterop: true,
	minify: false,
	terserOptions: {
		mangle: false,
		keep_classnames: true,
		keep_fnames: true,
	},
	splitting: false,
	keepNames: true,
	dts: true,
});
