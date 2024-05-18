import { Component, inject, signal } from '@angular/core';
import { Product, initialState } from '../../models/product';
import { CartService } from '../../services/cart.service';
import { AlertComponent } from '../shared/alert/alert.component';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent {
  products = signal<Product[]>(initialState);
  cartService = inject(CartService);
  settingsService = inject(SettingsService);
  isVisible = signal(false)

  constructor() {
    // load dummy component after 3000ms, angular loaded it after 3000ms
    /*   setTimeout( () => {
        this.isVisible.update(prev => !prev)
      }, 3000) */
  }
}
