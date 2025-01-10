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
  performance: {
    maxAssetSize: 4000000, // 4000000 Bytes = 4 MB
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'module',
  },
  resolve: {
    alias: {
      "@util": path.resolve(__dirname, 'src/util'),
      "./util": path.resolve(__dirname, 'src/util'),
    },
    extensions: ['.js', '.jsx'],
  },
  optimization: {
    minimize: true,
    usedExports: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          mangle: true, // Changes the variable and function names
          keep_fnames: false, // Doesn't preserve function names
        },
      }),
    ],
  },
};
