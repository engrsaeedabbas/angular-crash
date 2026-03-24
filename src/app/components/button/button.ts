import { Component , Input , Output , EventEmitter} from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [NgStyle],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  @Input() color!: string;
  @Input() text!: string;
  @Output() btnClick = new EventEmitter<void>();

  onClick() {
    this.btnClick.emit();
  }
}
