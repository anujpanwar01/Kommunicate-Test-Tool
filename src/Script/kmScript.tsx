import { KommunicateType, appWindow } from './type';

const Kommunicate: KommunicateType = {
  init: (appId, options, server) => {
    let env: string = 'production';

    let scriptSource = `https://${
      server || 'widget'
    }.kommunicate.io/v2/kommunicate.app`;
    if (!appId) {
      console.info('Please provide appId to initialize the widget');
      return;
    }
    if (typeof appId !== 'string') {
      console.info('AppId should be string');
      return;
    }
    const settings = {
      appId: appId,
    };

    if (options && isValidObject(options)) {
      // removing the environment variable
      const { environment, ...option } = options;
      env = environment;
      Object.assign(settings, option);
    }

    switch (env.toLowerCase()) {
      case 'local':
        scriptSource = 'http://localhost:3030/v2/kommunicate.app';
        break;
      case 'test':
        scriptSource = 'https://widget-test.kommunicate.io/v2/kommunicate.app';
        break;
      case 'release':
        scriptSource =
          'https://widget-release.kommunicate.io/v2/kommunicate.app';
        break;
      case 'beta':
        scriptSource = 'https://widget-beta.kommunicate.io/v2/kommunicate.app';
        break;
      default:
        scriptSource = `https://${
          server || 'widget'
        }.kommunicate.io/v2/kommunicate.app`;
        break;
    }
    (function (d, m: any) {
      const kommunicateSettings = settings;
      const s = document.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.src = scriptSource;
      const h = document.getElementsByTagName('head')[0];
      h.appendChild(s);
      appWindow.kommunicate = m;
      m._globals = kommunicateSettings;
    })(document, appWindow.kommunicate || {});
  },
  logout: () => {
    typeof appWindow?.kommunicate?.logout == 'function' &&
      appWindow?.kommunicate.logout();
  },
};

export default Kommunicate;

function isValidObject(object: { [key: string]: any }): boolean {
  return Boolean(Object.keys(object).length && object.constructor === Object);
}
