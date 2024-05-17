import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MonacoEditorModule, NGX_MONACO_EDITOR_CONFIG } from 'ngx-monaco-editor-v2';

@Component({
    selector: 'app-monaco-editor',
    template: ` <ngx-monaco-editor [(ngModel)]="code" [options]="editorOptions" /> `,
    standalone: true,
    providers: [
        {
            provide: NGX_MONACO_EDITOR_CONFIG,
            useFactory: () => ({
                onMonacoLoad: () => {
                    console.log('Monaco editor loaded');
                },
                defaultOptions: {
                    theme: 'vs-dark',
                    language: 'javascript',
                },
            }),
        },
    ],
    imports: [FormsModule, MonacoEditorModule],
})
export class MonacoEditorComponent {
    code: string = ``;
    editorOptions = { theme: 'vs-dark', language: 'javascript' };
}
