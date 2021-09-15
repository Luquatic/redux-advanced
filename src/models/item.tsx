class Item {
    id: string;
    name: string;
    price: number;
    quantity: number;
    totalPrice: number;

    constructor(name: string, price: number, quantity: number, totalPrice: number) {
        this.id = new Date().toISOString();
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.totalPrice = totalPrice;
    }
}

export default Item;
