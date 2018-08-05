const webpackConfig = require('./config/webpack.config.styleguide.prod.js');

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
    {
      name: 'Layout',
      content: 'src/lib/components/layout/layout.md',
      components: 'src/lib/components/layout/**/*.js',
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
  template: {
    title: 'UI Knight',
    head: {
      meta: [
        {
          name: 'theme-color',
          content: '#337bae',
        },
      ],
      links: [
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: 'static/media/apple-touch-icon.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: 'static/media/favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: 'static/media/favicon-16x16.png',
        },
        {
          rel: 'manifest',
          href: 'static/media/site.webmanifest',
        },
        {
          rel: 'mask-icon',
          href: 'static/media/safari-pinned-tab.svg',
          color: '#337bae',
        },
      ],
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
  webpackConfig,
};
