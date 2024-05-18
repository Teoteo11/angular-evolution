import { computed, Injectable, signal } from '@angular/core';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  items = signal<Product[]>([]);
  total = computed(() => this.items().reduce((total, item) => total + item.cost, 0));
  isEmpty = computed(() => this.items().length === 0);

  addToCart(itemToAdd: Product) {
    const isInCart = this.items().find(item => item.id === itemToAdd.id)
    if (!isInCart)
      this.items.update(items => [...items, itemToAdd])
  }

  removeFromCart(itemToRemove: Product) {
    this.items.update(items => items.filter(item => item.id !== itemToRemove.id))
  }

  clearCart() {
    this.items.set([])
  }
}