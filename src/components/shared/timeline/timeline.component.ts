import { NgClass } from '@angular/common';
import { Component, Input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [NgClass],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent {
  @Input() items: { start: string; end: string }[] = [];
  @Input({ transform: booleanAttribute }) vertical = false;
}
