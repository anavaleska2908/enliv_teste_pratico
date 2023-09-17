import { DateTime } from 'luxon';
import { BaseModel, column, beforeCreate } from '@ioc:Adonis/Lucid/Orm';
import {v4 as uuidv4} from "uuid";

export default class Task extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public title: string

  @column()
  public description: string

  @column()
  public status: string

  @column.dateTime({ columnName: "created_at", autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ columnName: "updated_at", autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeCreate()
  public static assignUuid(task: Task) {
    task.id = uuidv4()
  }
}
