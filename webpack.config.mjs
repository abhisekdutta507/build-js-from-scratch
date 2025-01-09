import path from 'path';
import { fileURLToPath } from 'url';

// Helper to handle __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.bundle.js',
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.js$/, // Target .js files
  //       exclude: /node_modules/, // Exclude node_modules
  //       use: {
  //         loader: "babel-loader", // Use Babel for ES6+ compatibility
  //         options: {
  //           presets: ["@babel/preset-env"],
  //         },
  //       },
  //     },
  //   ],
  // }
};
