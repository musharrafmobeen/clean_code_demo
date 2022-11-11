import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import db1Entities from '../../entities/db';
import db2Entities from '../../entities/db2';

console.log('entities', db2Entities);

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: '1234',
        database: 'postgres',
        entities: db1Entities,
        synchronize: true,
        // extra: {
        //   ssl: {
        //     rejectUnauthorized: false,
        //   },
        // },
      });

      return dataSource.initialize();
    },
  },
  {
    provide: 'DATABASE_TWO_CONNECTION',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: '1234',
        database: 'postgres',
        entities: db2Entities,
        synchronize: true,
        // extra: {
        //   ssl: {
        //     rejectUnauthorized: false,
        //   },
        // },
      });

      return dataSource.initialize();
    },
  },
];

// const defaultOptions = {
//   type: 'postgres',
//   port: 5432,
//   username: 'user',
//   password: 'password',
//   database: 'db',
//   synchronize: true,
// };

// export const databaseProviders = [
//   TypeOrmModule.forRoot({
//     type: 'postgres',
//     port: 5432,
//     username: 'postgres',
//     database: 'postgres',
//     password: '1234',
//     host: 'localhost',
//     name: 'db',
//     entities: db1Entities,
//   }),
//   TypeOrmModule.forRoot({
//     type: 'postgres',
//     port: 5432,
//     username: 'postgres',
//     database: 'postgres',
//     password: '1234',
//     host: 'localhost',
//     name: 'db2',
//     entities: [__dirname + '/../../models/**/entities/*.entity{.ts,.js}'],
//   }),
// ];
