import { Component } from '@angular/core';
import {  HeaderComponent } from "./components/header/header";
import { Tasks } from "./components/tasks/tasks";
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [HeaderComponent, Tasks, HttpClientModule ],
})
export class App {
  title:string = "Angular Crash Course";
  showAddTask: boolean = false;

  toggleAddTask() {
    this.showAddTask = !this.showAddTask;
  }
}
