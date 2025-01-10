import path from 'path';
import { fileURLToPath } from 'url';
import TerserPlugin from 'terser-webpack-plugin';

// Helper to handle __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: 'production',
  entry: './src/index.js',
  experiments: {
    outputModule: true,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'plugin.bundle.js',
    libraryTarget: 'module',
  },
  optimization: {
    minimize: true,
    usedExports: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          mangle: true, // Don't change variable and function names
          keep_fnames: false, // Preserve function names
        },
      }),
    ],
  },
};
