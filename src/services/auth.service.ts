/**
 * Created by Cem Basoglu on 09.06.17.
 */
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {User, LoginResponse, RegisterRequest} from "../models/user";
import {SmartMirrorService} from "./smartmirror.service";
import {TokenService} from "./token.service";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";

/**
 * AuthService class for authenticating and registering users on smart mirror api
 *
 * Example Authentication:
 * ```typescript
 * import {AuthService} from "@cemizm/smartmirror-shared";
 * ...
 * login() {
 *   this.authService.login("cem@basoglu.de", "md5password").subscribe(res => {
 *     console.log(res);
 *   }, err=> {
 *     console.log(err);
 *   })
 * }
 * ```
 */
@Injectable()
export class AuthService {
    /**
     * relative url for the authentication api
     * @type {string}
     */
    private api = "/auth";

    /**
     * Creates the AuthService
     * @param tokenService Injected TokenService for storing authentication token
     * @param service Injected internal http service for interacting with SmartMirror Api
     */
    constructor(private tokenService: TokenService, private service: SmartMirrorService) {
    }

    /**
     * Verifies the authentication token and returns the linked user
     * @return {Observable<R>} The user linked with the authentication token.
     */
    public get(): Observable<User> {
        return this.service.get(this.api).map(res => <User>res.json());
    }

    /**
     * Perform the login request and saves the authentication token in the localStorage
     * @param email The Email of the user to login
     * @param password The Password of the user to login
     * @return {Observable<R>} Login response with the user profile
     */
    public login(email: string, password: string): Observable<LoginResponse> {
        return this.service.post(this.api + '/', {
            user: email,
            password: password
        }).map(res => {
            let loginRes: LoginResponse = res.json();

            this.tokenService.Token = loginRes.accessToken;

            return loginRes;
        });
    }

    /**
     * Registers a new User with the given registration details on the smart mirror api
     * @param reg The registration details of the new user to register.
     * @return {Observable<R>} void
     */
    public register(reg: RegisterRequest): Observable<void> {
        return this.service.post(this.api + '/register', reg).map(res => {
        });
    }
}
