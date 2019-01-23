import { CartItem } from "./cart.item.model";
import { MenuItem } from "../menu-item/menu-item.model";

export class ShoppingCartService {
    items: CartItem[] = [];

    clear() {
        this.items = [];
    }

    addItem(item: MenuItem) {
        let foundItem = this.items.find(i => i.menuItem.id === item.id)
        if (foundItem) {
            this.increaseQty(foundItem);
        } else {
            this.items.push(new CartItem(item));
        }
    }

    removerItem(item: CartItem) {
        let index = this.items.indexOf(item);
        this.items.splice(index, 1);
    }

    total(): number {
        return this.items
            .map(item => item.value())
            .reduce((prev, value) => prev + value, 0);
    }

    increaseQty(item: CartItem): void {
        item.quantity += 1;
    }

    decreaseQty(item: CartItem): void {
        item.quantity -= 1;

        if (item.quantity === 0)
            this.removerItem(item);
    }
}