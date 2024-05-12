import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="centered-page sm">
    
      <h1 class="page-title">Counter Demo with Signal</h1>

      <button class="btn" (click)="updateValue('minus')">-</button>
      <span class="text-2xl mx-5">{{ counter() }}</span>
      <button class="btn" (click)="updateValue('plus')">+</button>

      <button class="btn ml-5" (click)="reset()">Reset</button>

      <p class="text-2xl text-red-500" *ngIf="isZero()">Counter is zero</p>      
    </div>
  `,
  styleUrl: './signal.component.scss'
})
export class SignalComponent {

  counter = signal(0);


  updateValue = (type: 'plus' | 'minus') => {
    this.counter.update((n) => type === 'minus' ? n - 1 : n + 1);
  } 

  reset = () => {
    this.counter.set(0);
  }

   /* 
      con la computed questa funzione non viene triggerata in maniera selvaggia data la CD di Angular
      ma solo quando il signal interno cambia di valore.
      NOTA: La CD di Angular cambia ad ogni timer, interval, api, eventi ecc..
   */
  isZero = computed(() => this.counter() === 0);
}
