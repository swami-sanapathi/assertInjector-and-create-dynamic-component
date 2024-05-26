import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    standalone: true,
    template: `
        <div>View Address Form Details</div>
        <button (click)="goBack()">Back</button>
    `,
})
export default class ViewAddressFormDetailsComponent {
    private readonly router = inject(Router);

    goBack() {
        this.router.navigate(['/address-form']);
    }
}
