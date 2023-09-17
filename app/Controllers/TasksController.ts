import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Task from '../Models/Task';

export default class TasksController {
  public async index({response}: HttpContextContract) {
      const tasks = await Task.all();
      response.status(200).send(tasks);
  }

  public async store({ request, response }: HttpContextContract) {
    const task = await Task.create(request.body());
    response.status(201).send(task);
  }

  public async show({ request, response }: HttpContextContract) {
    const id = request.param("id");
    const task = await Task.find(id);
    response.status(200).send(task);
  }

  public async update({ request, response }: HttpContextContract) {
    const id = request.param("id");
    const body = request.body();
    const task = await Task.find(id);
    await task?.merge(body).save();
    response.status(200).send(task);
  }

  public async destroy({ request, response }: HttpContextContract) {
    const id = request.param("id");
    const task = await Task.find(id);
    task?.delete();
    response.status(204);
  }
}
