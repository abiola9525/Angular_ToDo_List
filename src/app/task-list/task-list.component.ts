import { Component } from '@angular/core';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks = [
    { title: 'Buy groceries', completed: false },
    { title: 'Do laundry', completed: true },
    { title: 'Clean the house', completed: false }
  ];
  newTask: string = '';
  editedTask: any = null;

  addTask() {
    if (this.newTask.trim() === '') {
      return;
    }
    this.tasks.push({ title: this.newTask, completed: false });
    this.newTask = '';
  }
  deleteTask(task: any) {
    const index = this.tasks.indexOf(task);
    if (index >= 0) {
      this.tasks.splice(index, 1);
    }
  }

  editTask(task: any) {
    this.editedTask = task;
    this.newTask = task.title;
  }

  saveTask() {
    if (this.editedTask) {
      this.editedTask.title = this.newTask;
      this.editedTask = null;
      this.newTask = '';
    }
  }

  completeTask(task: any) {
    task.completed = !task.completed;
  }
}
