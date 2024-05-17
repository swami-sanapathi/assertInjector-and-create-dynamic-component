import { Component } from '@angular/core';
import { MonacoEditorComponent } from './monaco-editor.component';

@Component({
    selector: 'dynamic-component',
    standalone: true,
    template: ` <app-monaco-editor /> `,
    imports: [MonacoEditorComponent],
})
export class DynamicComponent {}
