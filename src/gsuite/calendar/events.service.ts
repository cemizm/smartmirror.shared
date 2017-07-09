import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import {BaseService} from "../shared/base.service";
import {ResponseType} from "../shared/response-type.model";
import {Event} from "./event.model";


/**
 * Optional query options for events.
 */
export interface  EventsQueryOptions {
    /**
     * Whether to always include a value in the email field for the organizer, creator and attendees,
     * even if no real email is available (i.e. a generated, non-working value will be provided).
     * The use of this option is discouraged and should only be used by clients which cannot handle the
     * absence of an email address value in the mentioned places. Optional. The default is False.
     */
    alwaysIncludeEmail?: boolean;
    /**
     * Specifies event ID in the iCalendar format to be included in the response. Optional.
     */
    iCalUID?: string;
    /**
     * The maximum number of attendees to include in the response.
     * If there are more than the specified number of attendees, only the participant is returned. Optional.
     */
    maxAttendees?: number;
    /**
     * Maximum number of events returned on one result page.
     * By default the value is 250 events. The page size can never be larger than 2500 events. Optional.
     */
    maxResults?: number;
    /**
     * The order of the events returned in the result. Optional. The default is an unspecified, stable order. <br/>
     * Acceptable values are:<br/>
     * - "startTime": Order by the start date/time (ascending).
     * This is only available when querying single events (i.e. the parameter singleEvents is True) <br/>
     * - "updated": Order by last modification time (ascending).
     */
    orderBy?: string;
    /**
     * Token specifying which result page to return. Optional.
     */
    pageToken?: string;
    /**
     * Extended properties constraint specified as propertyName=value. Matches only private properties.
     * This parameter might be repeated multiple times to return events that match all given constraints.
     */
    privateExtendedProperty?: string;
    /**
     * Free text search terms to find events that match these terms in any
     * field, except for extended properties. Optional.
     */
    q?: string;
    /**
     * Extended properties constraint specified as propertyName=value. Matches only shared properties.
     * This parameter might be repeated multiple times to return events that match all given constraints.
     */
    sharedExtendedProperty?: string;
    /**
     * Whether to include deleted events (with status equals "cancelled") in the result. Cancelled instances
     * of recurring events (but not the underlying recurring event) will still be included if showDeleted and
     * singleEvents are both False. If showDeleted and singleEvents are both True, only single instances of
     * deleted events (but not the underlying recurring events) are returned. Optional. The default is False.
     */
    showDeleted?: boolean;
    /**
     * Whether to include hidden invitations in the result. Optional. The default is False.
     */
    showHiddenInvitations?: boolean;
    /**
     * Whether to expand recurring events into instances and only return single one-off events and
     * instances of recurring events, but not the underlying recurring events themselves. Optional.
     * The default is False.
     */
    singleEvents?: boolean;
    /**
     * Token obtained from the nextSyncToken field returned on the last page of results from the previous list request.
     * It makes the result of this list request contain only entries that have changed since then.
     */
    syncToken?: string;
    /**
     * Upper bound (exclusive) for an event's start time to filter by. Optional.
     * The default is not to filter by start time. Must be an RFC3339 timestamp with
     * mandatory time zone offset, e.g., 2011-06-03T10:00:00-07:00, 2011-06-03T10:00:00Z.
     * Milliseconds may be provided but will be ignored.
     */
    timeMax?: string;
    /**
     * Lower bound (inclusive) for an event's end time to filter by. Optional.
     * The default is not to filter by end time. Must be an RFC3339 timestamp
     * with mandatory time zone offset, e.g., 2011-06-03T10:00:00-07:00, 2011-06-03T10:00:00Z.
     * Milliseconds may be provided but will be ignored.
     */
    timeMin?: string;
    /**
     * Time zone used in the response. Optional. The default is the time zone of the calendar.
     */
    timeZone?: string;
    /**
     * Lower bound for an event's last modification time (as a RFC3339 timestamp) to
     * filter by. When specified, entries deleted since this time will always be included
     * regardless of showDeleted. Optional. The default is not to filter by last modification time.
     */
    updatedMin?: string;
}

@Injectable()
export class EventsService {
    /**
     * relative url to the calendars api
     * @type {string}
     */
    private api = '/calendar/v3/calendars/';

    /**
     * Creates the EventsService
     * @param service Injected internal http service for interacting with google apis
     */
    constructor(private service: BaseService) {
    }

    /**
     * Returns events on the specified calendar.
     * @param authToken token of the authenticated user
     * @param calendar Calendar identifier. To retrieve calendar IDs call the calendarList.list method.
     * If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
     * @param options Optional query parameters
     * @return {Observable<R>} Events on the specified calendar
     */
    public list(authToken: string, calendar: string, options?: EventsQueryOptions): Observable<Array<Event>> {
        return this.service.get(this.api + calendar + '/events', authToken, {params: options})
            .map(res => <ResponseType>res.json())
            .map(res => <Array<Event>>res.items);
    }

}
