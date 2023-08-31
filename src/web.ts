import { WebPlugin } from '@capacitor/core';

import type { JJzipPlugin } from './definitions';

export class JJzipWeb extends WebPlugin implements JJzipPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
