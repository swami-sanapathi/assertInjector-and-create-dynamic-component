import { ApplicationConfig } from '@angular/core';
import { RouteReuseStrategy, provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { CustomRouteReuseStrategy } from './services/route-reuse';

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes, withComponentInputBinding()),
        {
            provide: RouteReuseStrategy,
            useClass: CustomRouteReuseStrategy,
        },
    ],
};
