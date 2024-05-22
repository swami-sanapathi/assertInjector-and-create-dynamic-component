import { ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy } from '@angular/router';

export class CustomRouteReuseStrategy implements RouteReuseStrategy {
    stored: { [k: string]: DetachedRouteHandle } = {};
    pathsToDetach: string[] = ['address-form'];

    shouldDetach(route: ActivatedRouteSnapshot): boolean {
        console.log(route)
        return this.pathsToDetach.includes(route.routeConfig!.path!);
    }

    store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
        this.stored[route.routeConfig!.path!] = handle;
    }

    shouldAttach(route: ActivatedRouteSnapshot): boolean {
        return !!route.routeConfig && !!this.stored[route.routeConfig.path!];
    }

    retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
        return this.stored[route.routeConfig!.path!];
    }

    shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
        return future.routeConfig === curr.routeConfig;
    }
}
