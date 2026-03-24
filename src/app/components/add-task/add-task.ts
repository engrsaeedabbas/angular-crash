import { Component  , Output , EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../Task';

@Component({
  selector: 'app-add-task',
  imports: [FormsModule],
  templateUrl: './add-task.html',
  styleUrl: './add-task.css',
})
export class AddTask {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter()

  text: string = '';
  day: string = '';
  reminder: boolean = false;

  onSubmit() {
    if (!this.text) {
      alert('Please add a task');
      return;
    }
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };
    
    this.onAddTask.emit(newTask)
    this.text = '';
    this.day = '';
    this.reminder = false;
    console.log('Task Added:', newTask);
  }

}
