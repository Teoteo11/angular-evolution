import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-phone',
  standalone: true,
  imports: [],
  templateUrl: './phone.component.html',
  styleUrl: './phone.component.scss'
})
export class PhoneComponent {
  @Input({required: true}) url = '';
  @Input({required: true}) alt = 'image';
}
