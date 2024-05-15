import { HttpClient } from '@angular/common/http';
import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { delay } from 'rxjs';

@Component({
  selector: 'app-demo1',
  standalone: true,
  imports: [],
  templateUrl: './demo1.component.html',
  styleUrl: './demo1.component.scss'
})
export default class Demo1Component {

  users = toSignal(
    inject(HttpClient)
    .get<any[]>('https://jsonplaceholder.typicode.com/users')
  )

  names = computed(() => this.users()?.map(u => u.name))

}
