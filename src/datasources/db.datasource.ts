import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'db',
  connector: 'mysql',
  url: 'mysql://avnadmin:AVNS_NFgsHgKwKLANUssxH0y@mysql-12a3feed-juanpedrolg1989-f587.d.aivencloud.com:18316/estimada_empresa?ssl-mode=REQUIRED',
  host: 'mysql-12a3feed-juanpedrolg1989-f587.d.aivencloud.com',
  port: 18316,
  user: 'avnadmin',
  password: 'AVNS_NFgsHgKwKLANUssxH0yAVNS_NFgsHgKwKLANUssxH0y',
  database: 'estimada_empresa'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class DbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'db';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.db', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
