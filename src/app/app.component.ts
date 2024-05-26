import { Component, Injector, OnInit, ViewChild, ViewContainerRef, effect, inject, signal } from '@angular/core';
import { DynamicComponent } from './dynamic.component';

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
        <h1>{{ title() }}!</h1>

        <button (click)="loadComponent()">Create Component</button>
        <button (click)="unloadComponent()">Remove Component</button>

        <!-- @if (condition()) { -->
        <div class="some-design">
            <ng-template #loadDyn></ng-template>
        </div>
        <!-- } -->
    `,
    styles: `
        .some-design {
            background-color: red;
            color: white;
            padding: 10px;
        }
    `,
})
export class AppComponent implements OnInit {
    protected condition = signal(false);
    protected changeThis = signal(false);
    protected injector = inject(Injector);
    protected title = signal('SOme Thinmg');
    values = effect(() => {
        this.condition();
        this.changeThis();
    });
    constructor() {
        effect(
            () => {
                console.log('this.condition()', this.condition());
                this.callThisFunction();
            },
            { allowSignalWrites: true },
        );
    }

    ngOnInit(): void {
        effect(
            () => {
                console.log('this.values()');
            },
            { injector: this.injector },
        );
    }

    @ViewChild('loadDyn', { read: ViewContainerRef }) viewContainerRef!: ViewContainerRef;

    loadComponent() {
        this.title.set('Some Title 2');
        this.condition.set(true);
        this.viewContainerRef?.clear();
        this.viewContainerRef.createComponent(DynamicComponent);
    }

    unloadComponent() {
        this.viewContainerRef.clear();
        this.condition.set(false);
    }
    callThisFunction() {
        this.changeThis.update((value) => !value);
        console.log('this.changeThis()', this.changeThis());
    }
}
