//Product model
export class Product {
    id?: number;
    name: string;
    price: number;
    description: string;

    constructor(name: string, price: number, description: string, id?: number) {
      if (id) this.id = id;
      this.name = name;
      this.price = price;
      this.description = description;
    }
}
