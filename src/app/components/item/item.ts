import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../Task';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-item',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './item.html',
  styleUrl: './item.css',
})
export class Item {
  @Input() task!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();

  faTimes = faTimes;

  onDelete(task: Task) {
    console.log('delete', task);
    this.onDeleteTask.emit(task);
  }

  onToggle(task: Task) {
    console.log('toggle', task);
    this.onToggleReminder.emit(task);
  }
}
