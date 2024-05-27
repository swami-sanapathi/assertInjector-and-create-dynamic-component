import { Component, inject, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
        <div class="container">
            <div class="container-title">
                <h1>{{ title() }}!</h1>
            </div>

            <div class="container-sub-title">
                @if (subTitle()) {
                    <h1>{{ subTitle() }}!</h1>
                }
            </div>
        </div>
        <div class="features">
            <button class="btn" (click)="toggleOn('dynamic-component')">Dynamic Component</button>
            <button class="btn" (click)="toggleOn('injection-context')">Assert Injector</button>
            <button class="btn" (click)="toggleOn('address-form')">Simple Form To Reuse Route</button>
        </div>
        <div class="layout">
            <router-outlet />
        </div>
    `,
    styles: `
        .container {
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            background-color: #f0f0f0;
        }
        .container-title {
            text-align: center;
            margin-bottom: 20px;
            font-size: 24px;
            font-weight: bold;
        }
        .container-sub-title {
            text-align: center;
            margin-bottom: 5px;
            font-size: 20px;
            font-weight: bold;
        }
        .features {
            height: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
            margin-top: 10px;
        }
        .btn {
            padding: 10px 20px;
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        .btn:hover {
            background-color: #0056b3;
        }
        .layout {
            margin-top: 20px;
        }
    `,
    imports: [RouterOutlet],
})
export class AppComponent {
    protected title = signal('Welcome to Angular!!!!');
    protected subTitle = signal<string | null>(null);

    private readonly router = inject(Router);

    toggleOn(name: 'dynamic-component' | 'injection-context' | 'address-form') {
        this.subTitle.set(name);
        if (name === 'dynamic-component') {
            this.router.navigate(['dynamic-component']);
        } else if (name === 'injection-context') {
            this.router.navigate(['injection-context']);
        } else if (name === 'address-form') {
            this.router.navigate(['address-form']);
        }
    }
}
