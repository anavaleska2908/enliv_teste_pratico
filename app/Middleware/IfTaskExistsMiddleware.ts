import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Task from 'App/Models/Task';

export default class IfTaskExistsMiddleware {
  public async handle({request, response}: HttpContextContract, next: () => Promise<void>) {
    const params = request.params();
    const taskExists = await Task.find(params.id);
    taskExists ? await next() : response.notFound({status: "error", message: "Task not found."});
  }
}
