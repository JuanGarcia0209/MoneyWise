import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-field',
  standalone: false,
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent {
  @Input() label: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() value: any;
  @Input() error: string = '';
  @Input() disabled: boolean = false;

  // Cambiando de onChange a valueChange
  @Output() valueChange = new EventEmitter<any>();

  handleChange(event: any) {
    this.value = event.detail?.value;
    this.valueChange.emit(this.value);
  }
}
