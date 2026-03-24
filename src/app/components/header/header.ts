import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Button } from "../button/button";

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.css',
  imports: [Button],
})
export class HeaderComponent implements OnInit {
  title: string = "Task Tracker";
  @Output() onToggleAddTask = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }
  toggleAddTask() {
   console.log("here add")
  }
}
