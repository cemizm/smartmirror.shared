/**
 * Created by Cem Basoglu on 10.06.17.
 */

import {Injectable} from "@angular/core";
import {StorageService} from "./storage.service";
import {Subject, Observable} from "rxjs";

const tokenKey = 'auth.token';

export enum AuthUpdateType {
    LoginSucess = 1,
    AuthenticationFailure = 2,
}

/**
 * Service to access and store the JW-Token in the localStorage and to get notifications on authentication updates
 *
 * Example authentication notifications:
 * ```typescript
 * import {TokenService} from "@cemizm/smartmirror-shared";
 *
 * ...
 *
 * constructor(private tokenService: TokenService) {
 *   tokenService.Updates.subscribe(type => {
 *     console.log("Authentication updates: " + type);
 *   });
 * }
 * ```
 */
@Injectable()
export class TokenService {

    /**
     * Observable subject for authentication updates
     * @type {Subject<AuthUpdateType>}
     */
    private updates = new Subject<AuthUpdateType>();


    /**
     * Creates the AuthService
     * @param storageService Injected StorageService for storing authentication token
     */
    constructor(private storageService: StorageService) {

    }

    /**
     * Observable to listen on authentication updates
     * @return {Observable<AuthUpdateType>} The observable to subscribe authentication updates
     */
    get Updates(): Observable<AuthUpdateType> {
        return this.updates;
    }

    /**
     * Gets the Token of the authenticated user
     * @return {string} Token of the authenticatd user
     */
    get Token(): string {
        return this.storageService.getItem(tokenKey);
    }

    /**
     * Sets the token of the authenticated user
     * @param token The Token of the authenticated user
     */
    set Token(token: string) {
        if (!token) {
            this.invalidate();
            return;
        }

        this.updates.next(AuthUpdateType.LoginSucess);

        this.storageService.setItem(tokenKey, token);
    }

    /**
     * Invalidates the stored token
     */
    invalidate(): void {
        if (this.Token) {
            this.updates.next(AuthUpdateType.AuthenticationFailure);
        }

        this.storageService.removeItem(tokenKey);
    }
}
