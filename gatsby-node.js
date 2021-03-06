const glob = require('glob');
const path = require('path');
const PurifyCSSPlugin = require('purifycss-webpack');
const PostCSSAssetsPlugin = require('postcss-assets-webpack-plugin');

/**
 * Gatsby's 'API' for customising webpack configs,
 * using https://github.com/lewie9021/webpack-configurator
 */
exports.modifyWebpackConfig = ({ config, stage }) => {
  switch (stage) {
    case 'build-css':
      /**
       * 'PostCSSAssetsPlugin' applies postcss plugins to the extracted stylesheet, styles.css.
       * With postcss-loader, not all plugins are effective in file-by-file processing.
       * For instance, css structural optimisations or media query packaging are better
       * applied to one css production file (generated by ExtractTextPlugin).
       */
      config.plugin('combine-mq', PostCSSAssetsPlugin, () => [
        {
          test: /\.css$/,
          log: true,
          plugins: [
            require('autoprefixer')({
              browsers: ['last 2 versions']
            }),
            // combine inline media queries
            require('css-mqpacker')(),
            // remove duplicate style rules (if any slip through)
            require('postcss-discard-duplicates')()
          ]
        }
      ]);

      // strip unused CSS selectors
      config.plugin('purify-css', PurifyCSSPlugin, () => [
        {
          paths: glob.sync(path.join(__dirname, 'src/**/*.{tsx, jsx}')),
          minimize: true,
          purifyOptions: {
            info: true,
            // whitelist all component classes generated by CSS Modules
            whitelist: ['*component*']
          }
        }
      ]);

      break;
  }

  return config;
};
