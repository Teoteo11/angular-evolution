import { Injectable, computed, signal } from '@angular/core';

type Config = {
  title: string;
  color: string;
  enableShop: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class SettingsService {
  config = signal({
    title: 'Angular Evolution Shop',
    color: '#000',
    enableShop: true
  })
  
  // to avoid many re-renders we can use computed
  title = computed(() => this.config().title)
  color = computed(() => this.config().color)
  isShopEnabled = computed(() => this.config().enableShop)

  setConfig<K extends keyof Config>(propName: K, value: Config[K]) {
    this.config.update(cfg => ({ ...cfg, [propName]: value }))
  }
}