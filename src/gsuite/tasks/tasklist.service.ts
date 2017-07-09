import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import {BaseService} from "../shared/base.service";
import {ResponseType} from "../shared/response-type.model";
import {Tasklist} from "./tasklist.model";

/**
 * Optional query options for tasklist.
 */
export interface  TaskListQueryOptions {
    /**
     * Maximum number of task lists returned on one page. Optional. The default is 100.
     */
    maxResults?: number;
    /**
     * Token specifying the result page to return. Optional.
     */
    pageToken?: string;
}

@Injectable()
export class TaskListService {
    /**
     * relative url to the tasklists api
     * @type {string}
     */
    private api = '/tasks/v1/users/@me/lists';

    /**
     * Creates the TaskService
     * @param service Injected internal http service for interacting with google apis
     */
    constructor(private service: BaseService) {
    }

    /**
     * Returns all the authenticated user's task lists
     * @param authToken The authenticated user's token.
     * @return {Observable<R>} Tasklists of the authenticated user.
     */
    public list(authToken: string, options?: TaskListQueryOptions): Observable<Array<Tasklist>> {
        return this.service.get(this.api, authToken, {params: options})
            .map(res => <ResponseType>res.json())
            .map(res => <Array<Tasklist>>res.items);
    }

    /**
     * Returns the authenticated user's specified task list.
     * @param authToken The authenticated user's token.
     * @param tasklist Task list identifier.
     * @return {Observable<R>} Specified Tasklist for the authenticated user.
     */
    public get(authToken: string, tasklist: string): Observable<Tasklist> {
        return this.service.get(this.api, authToken, {
            params: {
                tasklist: tasklist
            }
        }).map(res => <Tasklist>res.json());
    }
}
