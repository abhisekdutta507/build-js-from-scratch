# Build JavaScript using Webpack

## Installation

```sh
npm install -D webpack webpack-cli terser-webpack-plugin
```

## Make the project environment ready

Let's create a `webpack.config.mjs` file.

```mjs
import path from 'path';
import { fileURLToPath } from 'url';
import TerserPlugin from 'terser-webpack-plugin';

// Helper to handle __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {

};
```

Make the the `package.json` has,

```json
{
  "type": "module"
}
```

**Step 1:** Select the `mode`. Default is `production`.

```mjs
export default {
  mode: 'production' || 'development',
  experiments: {
    outputModule: true
  }
};
```

**Step 2:** Set an `entry` point.

```mjs
export default {
  entry: './src/index.js' // an abosulute path to the file
};
```

**Step 3:** Add the alias resolvers

```mjs
export default {
  resolve: {
    alias: {
      "@util": path.resolve(__dirname, 'src/util'),   // if files have "@util"
      "./util": path.resolve(__dirname, 'src/util'),  // if files have "./util"
    },
    extensions: ['.js', '.jsx'],                      // file extensions are must
  }
};
```

**Step 4:** Rename the output files

```mjs
export default {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',                             // choose your output filename.
    libraryTarget: 'module'
  }
};
```

**Step 5:** Are you using `export`, `import` statements in you project?

```mjs
export default {
  optimization: {
    usedExports: true
  }
};
```

**Step 6:** Minify logic for better output sizing

```mjs
export default {
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          mangle: true, // Changes the variable and function names
          keep_fnames: false, // Doesn't preserve function names
        }
      })
    ]
  }
};
```

**Step 7:** Choose `Not to change` variable and function names

```mjs
export default {
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          mangle: false, // Doesn't change the variable and function names
          keep_fnames: true, // Preserves function names
        }
      })
    ]
  }
};
```

**Step 8:** Set the maximum output file size limit as per your projects need

```mjs
export default {
  performance: {
    maxAssetSize: 4000000 // 4000000 Bytes = 4 MB
  }
}
```

**Step 9:** The `webpack.config.mjs` file finally looks like

```mjs
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
```

**Step 10:** Add the build script in `package.json`

```json
{
  "build": "webpack"
}
```

## Generate you first build

```sh
npm run build
```

## More on Webpack?

We are working on it. It will be here sooner.
