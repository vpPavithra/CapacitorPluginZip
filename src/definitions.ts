export interface JJzipPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
