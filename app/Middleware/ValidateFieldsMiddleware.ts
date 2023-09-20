import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

export default class ValidateFieldsMiddleware {
  public async handle({request, response}: HttpContextContract, next: () => Promise<void>) {
    const method = request.method();
    const body = request.body();
    const fields = ["title", "description", "status"];
    const enumStatusField = ["incomplete", "complete"];
    if (method === 'POST') {
      for (let i = 0; i < fields.length; i++) {
        if (!!!body[fields[i]]) {
          return response.status(400).send({status: "error", message: `${fields[i]} is required.`});
        }
      }
      if (!enumStatusField[0].includes(body.status.toString()) && !enumStatusField[1].includes(body.status.toString())) {
        return response.status(400).send({status: "error", message: `${body.status} is invalid field.`});
      }

    } else if (method === 'PATCH') {
      for (const field in body) {
        if (!fields.includes(field.toString())) {
          return response.status(400).send({status: "error", message: `${field} is invalid field.`});
        }
      }

      if (!enumStatusField[0].includes(body.status.toString()) && !enumStatusField[1].includes(body.status.toString())) {
        return response.status(400).send({status: "error", message: `${body.status} is invalid status field.`});
      }
    }
    await next();
  }

}
