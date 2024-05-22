import { Injectable, signal } from '@angular/core';

export interface Product {
    id: number;
    name: string;
}

@Injectable()
export class ProductService {
    products = [
        { id: 1, name: 'Product 1' },
        { id: 2, name: 'Product 2' },
        { id: 3, name: 'Product 3' },
        { id: 4, name: 'Product 4' },
        { id: 5, name: 'Product 5' },
        { id: 6, name: 'Product 6' },
    ];

    currentProduct = signal<Product | null>(null);

    getProductsById(id: number) {
        console.log('Service Call');
        this.currentProduct.set(this.products.find((product) => product.id === id)!);
    }

    someText = signal<string>('');

    returnSomeText() {
        console.log('from OnInit');
        this.someText.set('Some Text OnInit');
    }
}
