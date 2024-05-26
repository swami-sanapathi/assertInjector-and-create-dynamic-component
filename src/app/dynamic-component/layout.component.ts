import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import DynamicComponent from './dynamic.component';

@Component({
    selector: 'app-dynamic-layout',
    standalone: true,

    template: `
        <button (click)="loadComponent()">Create Component</button>
        <button (click)="unloadComponent()">Remove Component</button>

        <div class="some-design">
            <ng-template #loadDyn></ng-template>
        </div>
    `,
    styles: `
        .some-design {
            background-color: red;
            color: white;
            padding: 10px;
        }
    `,
})
export class LayoutComponent {
    @ViewChild('loadDyn', { read: ViewContainerRef }) viewContainerRef!: ViewContainerRef;

    loadComponent() {
        this.viewContainerRef?.clear();
        this.viewContainerRef.createComponent(DynamicComponent);
    }

    unloadComponent() {
        this.viewContainerRef.clear();
    }
}
