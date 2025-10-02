import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { TaskSchema } from './infrastructure/db/schema/task.schema'
import { Task } from './domain/model/task'
import { TaskRepositoryImpl } from './infrastructure/db/repository.implementation/task.repository.impl'
import { TaskController } from './presentation/controller/task.controller'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Task.name, schema: TaskSchema }]),
  ],
  controllers: [TaskController],
  providers: [TaskRepositoryImpl],
})
export class TaskModule {}