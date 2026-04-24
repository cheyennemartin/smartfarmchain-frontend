import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.smartfarmchain.app',
  appName: 'SmartFarmChain',
  webDir: 'www',
  server: {
    url: 'https://smartfarmchain1.netlify.app/',
    cleartext: false
  }
};

export default config;