import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-date-field',
  standalone: false,
  templateUrl: './date-field.component.html',
  styleUrls: ['./date-field.component.scss']
})
export class DateFieldComponent {
  @Input() label: string = '';
  @Input() value: string = new Date().toISOString();
  @Input() error: string = '';

  @Output() onChange = new EventEmitter<string>();

  handleChange(event: any) {
    this.onChange.emit(event.detail.value);
  }
}
