import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select-field',
  standalone: false,
  templateUrl: './select-field.component.html',
  styleUrls: ['./select-field.component.scss']
})
export class SelectFieldComponent {
  @Input() label: string = '';
  @Input() options: { key: string, label: string }[] = [];
  @Input() value: string = '';
  @Input() error: string = '';

  @Output() onChange = new EventEmitter<string>();

  handleChange(event: any) {
    this.onChange.emit(event.detail.value);
  }
}
