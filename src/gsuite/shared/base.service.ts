import {Injectable} from '@angular/core';
import {Http, RequestOptionsArgs, Response, Request, RequestOptions, Headers, RequestMethod} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

/**
 * Internal service used by the module to add headers on each http-request and handle unauthorized response
 */
@Injectable()
export class BaseService {

  private api = 'https://www.googleapis.com';

  /**
   * creates the internal smart mirror api service
   * @param config Injected configuration for remote service
   * @param tokenService Injected token service for invalidating the authentication token
   * @param http Injected angular http client used for the remote requests
   */
  constructor(private http: Http) {
  }

  /**
   * Performs a request with `get` http method.
   */
  public get(url: string, token: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.sendRequest({method: RequestMethod.Get, url: url, body: ''}, token, options);
  }

  /**
   * Performs a request with `post` http method.
   */
  public post(url: string, token: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    return this.sendRequest({method: RequestMethod.Post, url: url, body: body}, token, options);
  }

  /**
   * Performs a request with `put` http method.
   */
  public put(url: string, token: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    return this.sendRequest({method: RequestMethod.Put, url: url, body: body}, token, options);
  }

  /**
   * Performs a request with `delete` http method.
   */
  public delete(url: string, token: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.sendRequest({method: RequestMethod.Delete, url: url, body: ''}, token, options);
  }

  /**
   * Performs a request with `patch` http method.
   */
  public patch(url: string, token: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    return this.sendRequest({method: RequestMethod.Patch, url: url, body: body}, token, options);
  }

  /**
   * Performs a request with `head` http method.
   */
  public head(url: string, token: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.sendRequest({method: RequestMethod.Head, url: url, body: ''}, token, options);
  }

  /**
   * Performs a request with `options` http method.
   */
  public options(url: string, token: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.sendRequest({method: RequestMethod.Options, url: url, body: ''}, token, options);
  }

  /**
   * extends the request options with stored authentication token and sends the request to the remove service
   * @param requestOptionsArgs The basic request options arguments
   * @param options Enhanced request options arguments
   * @return {Observable<R|T>} Observable to listen on http response
   */
  private sendRequest(requestOptionsArgs: RequestOptionsArgs, token: string, options?: RequestOptionsArgs): Observable<any> {

    const requestOptions = new RequestOptions(requestOptionsArgs);

    requestOptions.url = this.api + requestOptions.url;

    if (!requestOptions.headers) {
      requestOptions.headers = new Headers();
    }

    requestOptions.headers.set('Authorization', 'Bearer ' + token);

    const request = new Request(requestOptions);
    return this.http.request(request, options)
      .map(res => res);
  }
}
