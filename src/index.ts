import { registerPlugin } from '@capacitor/core';

import type { JJzipPlugin } from './definitions';

const JJzip = registerPlugin<JJzipPlugin>('JJzip', {
  web: () => import('./web').then(m => new m.JJzipWeb()),
});

export * from './definitions';
export { JJzip };
