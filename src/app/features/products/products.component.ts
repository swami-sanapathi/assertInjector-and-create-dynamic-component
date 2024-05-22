import { JsonPipe } from '@angular/common';
import { Component, OnInit, effect, inject, input, numberAttribute } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductService } from './product.service';

@Component({
    standalone: true,
    template: `
        <button routerLink="/products/{{ id() - 1 }}">prev</button>
        <button routerLink="/products/{{ id() + 1 }}">next</button>
        {{ productService.currentProduct() | json }}
        {{ productService.someText() }}
    `,
    providers: [ProductService],
    imports: [JsonPipe, RouterLink],
})
export default class ProductsComponent implements OnInit {
    protected productService = inject(ProductService);
    id = input.required({ transform: numberAttribute });
    constructor() {
        effect(
            () => {
                console.log(this.id());
                this.productService.getProductsById(this.id());
            },
            { allowSignalWrites: true },
        );
    }

    ngOnInit(): void {
        console.log('ProductsComponent initialized');
        this.productService.returnSomeText();
    }
}
