import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import {BaseService} from "../shared/base.service";
import {ResponseType} from "../shared/response-type.model";
import {CalendarList} from "./calendar-list.model";

/**
 * Optional query options for calendarlist.
 */
export interface  CalendarListQueryOptions {
    /**
     * Maximum number of task lists returned on one page. Optional. The default is 100.
     */
    maxResults?: number;
    /**
     * The minimum access role for the user in the returned entries. Optional. The default is no restriction.
     *
     * Acceptable values are:
     * "freeBusyReader": The user can read free/busy information.
     * "owner": The user can read and modify events and access control lists.
     * "reader": The user can read events that are not private.
     * "writer": The user can read and modify events.
     */
    minAccessRole?: string;

    /**
     *    Token specifying which result page to return. Optional.
     */
    pageToken?: string;

    /**
     * Whether to include deleted calendar list entries in the result. Optional. The default is False.
     */
    showDeleted?: boolean;

    /**
     * Whether to show hidden entries. Optional. The default is False.
     */
    showHidden?: boolean;

    /**
     * Token obtained from the nextSyncToken field returned on the last page of results from the previous list request.
     * It makes the result of this list request contain only entries that have changed since then.
     * If only read-only fields such as calendar properties or ACLs have changed, the entry won't be returned.
     * All entries deleted and hidden since the previous list request will always be in the result set and
     * it is not allowed to set showDeleted neither showHidden to False.
     * To ensure client state consistency minAccessRole query parameter cannot be specified together with nextSyncToken.
     * If the syncToken expires, the server will respond with a 410 GONE response code and the client
     * should clear its storage and perform a full synchronization without any syncToken.
     */
    syncToken?: string;
}

@Injectable()
export class CalendarListService {
    /**
     * relative url to the tasklists api
     * @type {string}
     */
    private api = '/calendar/v3/users/me/calendarList';

    /**
     * Creates the CalendarListService
     * @param service Injected internal http service for interacting with google apis
     */
    constructor(private service: BaseService) {
    }

    /**
     * Returns entries on the user's calendar list.
     * @param authToken The users authentication token.
     * @param options Optional Query Parameters.
     * @return {Observable<R>} List of calendars for authenticated user.
     */
    public list(authToken: string, options?: CalendarListQueryOptions): Observable<Array<CalendarList>> {
        return this.service.get(this.api, authToken, {params: options})
            .map(res => <ResponseType>res.json())
            .map(res => <Array<CalendarList>>res.items);
    }

}
