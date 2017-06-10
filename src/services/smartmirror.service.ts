/**
 * Created by Cem Basoglu on 10.06.17.
 */

import {Injectable} from "@angular/core";
import {Http, RequestOptionsArgs, Response, Request, RequestOptions, Headers, RequestMethod} from "@angular/http";
import {Observable} from "rxjs";
import {ErrorObservable} from "rxjs/observable/ErrorObservable";

import {TokenService} from "./token.service";
import {SmartMirrorModuleConfig} from "../utils/module.config";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";

/**
 * Internal service used by the module to add headers on each http-request and handle unauthorized response
 */
@Injectable()
export class SmartMirrorService {

    /**
     * creates the internal smart mirror api service
     * @param config Injected configuration for remote service
     * @param tokenService Injected token service for invalidating the authentication token
     * @param http Injected angular http client used for the remote requests
     */
    constructor(private config: SmartMirrorModuleConfig,
                private tokenService: TokenService,
                private http: Http) {
    }

    /**
     * Performs a request with `get` http method.
     */
    public get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.sendRequest({method: RequestMethod.Get, url: url, body: ''}, options);
    }

    /**
     * Performs a request with `post` http method.
     */
    public post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
        return this.sendRequest({method: RequestMethod.Post, url: url, body: body}, options);
    }

    /**
     * Performs a request with `put` http method.
     */
    public put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
        return this.sendRequest({method: RequestMethod.Put, url: url, body: body}, options);
    }

    /**
     * Performs a request with `delete` http method.
     */
    public delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.sendRequest({method: RequestMethod.Delete, url: url, body: ''}, options);
    }

    /**
     * Performs a request with `patch` http method.
     */
    public patch(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
        return this.sendRequest({method: RequestMethod.Patch, url: url, body: body}, options);
    }

    /**
     * Performs a request with `head` http method.
     */
    public head(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.sendRequest({method: RequestMethod.Head, url: url, body: ''}, options);
    }

    /**
     * Performs a request with `options` http method.
     */
    public options(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.sendRequest({method: RequestMethod.Options, url: url, body: ''}, options);
    }

    /**
     * extends the request options with stored authentication token and sends the request to the remove service
     * @param requestOptionsArgs The basic request options arguments
     * @param options Enhanced request options arguments
     * @return {Observable<R|T>} Observable to listen on http response
     */
    private sendRequest(requestOptionsArgs: RequestOptionsArgs, options?: RequestOptionsArgs): Observable<any> {

        let requestOptions = new RequestOptions(requestOptionsArgs);

        requestOptions.url = this.config.ApiUrl + requestOptions.url;

        if (!requestOptions.headers)
            requestOptions.headers = new Headers();



        if (this.tokenService.Token)
            requestOptions.headers.set("Authorization", "Bearer " + this.tokenService.Token);

        let request = new Request(requestOptions);

        return this.http.request(request, options)
            .map(res => res)
            .catch(res => this.errorHandler(res));
    }

    /**
     * Handles authentication errors and returns errors to the caller
     * @param errorResponse The errorResponse to handle
     * @return {ErrorObservable} The ErrorObservable to notify the caller
     */
    private errorHandler(errorResponse: Response): Observable<any> | ErrorObservable {

        if (errorResponse.status === 401) {
            this.tokenService.invalidate();
        }

        return Observable.throw(errorResponse);
    }

}
