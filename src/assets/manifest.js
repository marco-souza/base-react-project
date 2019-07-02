import { getVarEnv } from '../../webpack/utils'

const manifest = {
  fingerprints: false,
  filename: 'manifest.json',
  name: 'My Progressive Web App',
  short_name: 'MyPWA',
  description: 'My awesome Progressive Web App!',
  background_color: '#ffffff',
  theme_color: '#885992',
  crossorigin: 'use-credentials', // can be null, use-credentials or anonymous
  icons: {
    src: getVarEnv('APP_LOGO'),
    sizes: [96, 128, 192, 256, 384, 512], // multiple sizes
  },
  // {
  //   src: path.resolve('src/assets/large-icon.png'),
  //   size: '1024x1024', // you can also use the specifications pattern
  // },
}

export default manifest
