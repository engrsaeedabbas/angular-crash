import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from "../item/item";
import { TaskService } from '../../services/task';
import { Task } from '../../Task';
import { AddTask } from "../add-task/add-task";
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
  imports: [CommonModule, Item, AddTask],
})
export class Tasks implements OnInit {
  @Input() showAddTask: boolean = false;
  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  deleteTask(task: Task): void {
    this.taskService.deleteTask(task).subscribe(() => {
      this.tasks = this.tasks.filter(t => t.id !== task.id);
    });
  }
  toggleReminder(task: Task): void {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }
  addTask(task: Task): void {
    this.taskService.addTask(task).subscribe((newTask) => {
      this.tasks.push(newTask);
      console.log(newTask, 'Add Task');
    });
  }
}
