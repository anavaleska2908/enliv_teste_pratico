import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

export default class ValidateFieldsMiddleware {
  public async handle({request, response}: HttpContextContract, next: () => Promise<void>) {
    const method = request.method();
    const body = request.body();
    const fields = ["title","description","status"];
    if (method === 'POST') {
      for (let i = 0; i < fields.length; i++) {
        if (!!!body[fields[i]]) {
          return response.status(400).send({status: "error", message: `${fields[i]} is required.`});
        }
      }
    } else if (method === 'PATCH') {
      for (const field in body) {
        console.log("entrou no for in")

        if (!fields.includes(field.toString())) {
          return response.status(400).send({status: "error", message: `${field} is invalid field.`});
        }
      }
    }
    await next();
  }

}
