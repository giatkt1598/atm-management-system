import { HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class CustomHttpWaitService {
    private pendingRequests = new Set<HttpRequest<any>>();

    public getLoading$() {
        return this._loadingEvent.asObservable();
    };

    private _loadingEvent = new BehaviorSubject<boolean>(false);

    addRequest(request: HttpRequest<any>) {
        this.pendingRequests.add(request);
        this._loadingEvent.next(this.numOfPending > 0);
    }

    delete(request: HttpRequest<any>) {
        this.pendingRequests.delete(request);
        this._loadingEvent.next(this.numOfPending > 0);
    }

    public get numOfPending() {
        return this.pendingRequests.size;
    }
}