import { Component, ViewChild, ViewContainerRef, signal } from '@angular/core';
import { DynamicComponent } from './dynamic.component';
import { InjectionContextComponent } from './injection-context/injection-context.component';

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
        <h1>{{ title }}!</h1>

        <button (click)="loadComponent()">Create Component</button>
        <button (click)="unloadComponent()">Remove Component</button>

        <div class="some-design">
            <ng-template #loadDyn></ng-template>
        </div>

        <app-injection-context />
    `,
    styles: `
        .some-design {
            background-color: red;
            color: white;
            padding: 10px;
        }
    `,
    imports: [InjectionContextComponent],
})
export class AppComponent {
    protected condition = signal(false);
    protected title = 'Creating Dynamic Component';

    @ViewChild('loadDyn', { read: ViewContainerRef }) viewContainerRef!: ViewContainerRef;

    loadComponent() {
        this.condition.set(true);
        this.viewContainerRef?.clear();
        this.viewContainerRef.createComponent(DynamicComponent);
    }

    unloadComponent() {
        this.viewContainerRef.clear();
        this.condition.set(false);
    }
}
