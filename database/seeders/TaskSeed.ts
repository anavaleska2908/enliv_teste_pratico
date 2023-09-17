'use strict'

/*
|--------------------------------------------------------------------------
| TaskSeed
|--------------------------------------------------------------------------
|
| Faça o uso do comando adonis make:seed para criar um seed
| e insira alguns dados fictícios para o seu banco de dados.
|
*/

import Task from 'app/Models/Task';
// import Factory from '@ioc:Adonis/Lucid/Factory';
import moment from 'moment';
import uuid from 'uuid';
// const Factory = use("Factory");

export default class TaskSeed {
  async seed() {
    const totalRecords = 10;

    for (let i = 0; i < totalRecords; i++) {
      const taskId = uuid.v4();
      const createdAt = moment().format('YYYY-MM-DD HH:mm:ss');

      // await Factory.('app/Models/Task').create({

      // })
    }

    const tasks = [
      {
        title: '',
        description: '',
        status: 'incomplete',

      }
    ];
    await Task.createMany(tasks);
  }
}
