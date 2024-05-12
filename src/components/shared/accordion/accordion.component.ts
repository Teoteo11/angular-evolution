import { Component, Input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss'
})
export class AccordionComponent {
  @Input({required: true}) title = ''
  @Input({required: true}) groupName = 'accordion-group'
  @Input({ transform: booleanAttribute }) selected = false
}
