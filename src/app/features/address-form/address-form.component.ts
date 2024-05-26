import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-address-form',
    standalone: true,
    template: `
        <div class="form-container">
            <form #form="ngForm">
                <div class="form-group">
                    <label for="street">Street</label>
                    <input type="text" id="street" class="form-control" name="street" [(ngModel)]="street" />
                </div>
                <div class="form-group">
                    <label for="city">City</label>
                    <input type="text" id="city" class="form-control" name="city" [(ngModel)]="city" />
                </div>
                <button type="submit" class="btn btn-primary" (click)="navigateTo()">Submit</button>
                <button type="submit" class="btn btn-primary" (click)="navigateToProducts()">Go to Products</button>
            </form>
        </div>
    `,
    styles: `
        .form-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f0f0f0;
            padding: 100px;
        }
        .form-group {
            margin-bottom: 10px;
            width: 300px;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 4px;
        }
        label {
            display: block;
            font-weight: bold;
        }

        input {
            width: 100%;
            padding: 5px;
            border: 1px solid #ccc;
            border-radius: 4px;
        }
        button {
            margin-top: 10px;
            padding: 10px 20px;
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            margin-left: 10px;
        }
    `,
    imports: [FormsModule],
})
export default class AddressFormComponent implements OnInit {
    street: string = '';
    city: string = '';

    private readonly router = inject(Router);

    navigateTo() {
        this.router.navigateByUrl('view-details');
    }

    navigateToProducts() {
        this.router.navigate([`/products`, 1]);
    }

    ngOnInit(): void {
        console.log('AddressFormComponent initialized');
    }
}
