const webpackConfig = require('./config/webpack.config.dev.js');

module.exports = {
  ignore: [
    '**/__tests__/**',
    '**/*.test.{js,jsx,ts,tsx}',
    '**/*.spec.{js,jsx,ts,tsx}',
    '**/*.d.ts',
    '**/*_noguide*',
  ],
  require: [
    './src/lib/style/styleguidist.css',
  ],
  sections: [
    {
      name: 'UI Knight',
      content: 'src/lib/docs/ui.md',
    },
    {
      name: 'Buttons',
      content: 'src/lib/components/button/button.md',
      components: 'src/lib/components/button/**/*.js',
    },
    {
      name: 'Inputs',
      content: 'src/lib/components/input/input.md',
      components: 'src/lib/components/input/**/*.js',
    },
  ],
  showUsage: true,
  styles: {
    Logo: {
      logo: {
        color: '#98BCBF',
      },
    },
    SectionHeading: {
      sectionName: {
        borderBottom: '2px solid #2f2e33',
        fontWeight: 'bold',
        marginBottom: 20,
        textDecoration: 'none !important',
      },
    },
  },
  theme: {
    color: {
      link: '#88badd',
      linkHover: '#f1f10e',
      sidebarBackground: '#1a405f',
    },
    fontSize: {
      base: 15,
      text: 16,
      small: 12,
      h1: 24,
      h2: 18,
      h3: 16,
      h4: 14,
      h5: 12,
      h6: 12,
    },
    sidebarWidth: 200,
  },
  title: 'UI Knight',
  webpackConfig,
};
