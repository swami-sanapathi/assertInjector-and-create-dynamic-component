import {
    Component,
    InjectionToken,
    Injector,
    OnInit,
    assertInInjectionContext,
    inject,
    runInInjectionContext,
} from '@angular/core';

@Component({
    selector: 'app-injection-context',
    standalone: true,
    template: ` Some Content`,
})
export default class InjectionContextComponent implements OnInit {
    injector = inject(Injector);
    constructor() {
        console.log(assertInjector(addFnToken));
    }

    ngOnInit(): void {
        assertInjector(addFnToken, this.injector, () => {
            console.log(addFnToken());
        });
    }
}

function assertInjector(fn: Function, injector?: Injector, runner?: () => any) {
    !injector && assertInInjectionContext(fn);
    const newInjector = injector ?? inject(Injector);
    if (!runner) return newInjector;
    return runInInjectionContext(newInjector, runner);
}

function addFnToken() {
    const token = inject(ADD_FN);
    return token(1, 2);
}

export const ADD_FN = new InjectionToken('Add Function', { factory: () => (a: number, b: number) => a + b });
