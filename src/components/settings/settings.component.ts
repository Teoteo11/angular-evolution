import { Component } from '@angular/core';
import { EditorComponent } from '../editor/editor.component';
import { PreviewComponent } from '../preview/preview.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [EditorComponent, PreviewComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export default class SettingsComponent {

}
