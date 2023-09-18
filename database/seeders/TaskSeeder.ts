import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import Task from "App/Models/Task";

export default class TaskSeeder extends BaseSeeder {
  public async run () {
    await Task.create({
      title: "New Task",
      description: "Creation of a new task for the database seed.",
      status: "incomplete"
    });
  }
}
