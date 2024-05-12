import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [NgClass],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss'
})
export class AlertComponent {
  @Input({required: true}) description = 'Alert description';
  @Input({required: true}) textCancel = 'Cancel';
  @Input({required: true}) textConfirm = 'Confirm';
  @Output() onCancel = new EventEmitter();
  @Output() onConfirm = new EventEmitter();
  @Input() variant: 'info' | 'success' | 'error' | undefined;

}
