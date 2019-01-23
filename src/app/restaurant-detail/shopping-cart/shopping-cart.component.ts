import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';
import { CartItem } from './cart.item.model';
import { MenuItem } from '../menu-item/menu-item.model';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private service: ShoppingCartService) { }

  ngOnInit() {
  }

  items(): CartItem[] {
    return this.service.items;
  }

  total(): number {
    return this.service.total();
  }

  clear() {
    this.service.clear();
  }

  remove(item: CartItem) {
    this.service.removerItem(item);
  }

  add(item: MenuItem) {
    this.service.addItem(item);
  }
}
