import { Component, ViewChild, ViewContainerRef, inject, signal } from "@angular/core";
import { DynamicComponent } from "./dynamic.component";

@Component({
  selector: "app-root",
  standalone: true,
  template: `
    <h1>Welcome to {{ title }}!</h1>

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
export class AppComponent {
  protected condition = signal(false);
  protected title = "Creating Dynamic Component";

   @ViewChild("loadDyn", { read: ViewContainerRef }) viewContainerRef!: ViewContainerRef;

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
