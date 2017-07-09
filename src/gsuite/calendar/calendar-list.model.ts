import {CalendarReminder} from "./calendar-reminders.model";
import {CalendarNotifications} from "./calendar-notifications.model";
/**
 * The collection of calendars in the user's calendar list.
 */
export interface CalendarList {
    /**
     * Type of the resource ("calendar#calendarListEntry").
     */
    kind: string;
    /**
     * ETag of the resource.
     */
    etag: string;
    /**
     * Identifier of the calendar.
     */
    id: string;
    /**
     * Title of the calendar. Read-only.
     */
    summary: string;
    /**
     * Description of the calendar. Optional. Read-only.
     */
    description: string;
    /**
     * Geographic location of the calendar as free-form text. Optional. Read-only.
     */
    location: string;
    /**
     * The time zone of the calendar. Optional. Read-only.
     */
    timeZone: string;
    /**
     * The summary that the authenticated user has set for this calendar. Optional.
     */
    summaryOverride: string;
    /**
     * The color of the calendar. This is an ID referring to an entry in the calendar section of the colors definition.
     */
    colorId: string;
    /**
     * The main color of the calendar in the hexadecimal format "#0088aa". This property supersedes the index-based colorId property.
     */
    backgroundColor: string;
    /**
     * The foreground color of the calendar in the hexadecimal format "#ffffff". This property supersedes the index-based colorId property.
     */
    foregroundColor: string;
    /**
     * Whether the calendar has been hidden from the list. Optional. The default is False.
     */
    hidden: boolean;
    /**
     * Whether the calendar content shows up in the calendar UI. Optional. The default is False.
     */
    selected: boolean;
    /**
     * The effective access role that the authenticated user has on the calendar. Read-only. Possible values are: <br/>
     * - "freeBusyReader" - Provides read access to free/busy information. <br/>
     * - "reader" - Provides read access to the calendar. Private events will appear to users with reader access,
     * but event details will be hidden. <br/>
     * - "writer" - Provides read and write access to the calendar. Private events will appear to users with writer
     * access, and event details will be visible. <br/>
     * - "owner" - Provides ownership of the calendar. This role has all of the permissions of the writer role with
     * the additional ability to see and manipulate ACLs.
     */
    accessRole: string;
    /**
     * The default reminders that the authenticated user has for this calendar.
     */
    defaultReminders: Array<CalendarReminder>;
    /**
     * The list of notifications set for this calendar.
     */
    notificationSettings: Array<CalendarNotifications>;
    /**
     * Whether the calendar is the primary calendar of the authenticated user. Read-only. Optional. The default is False.
     */
    primary: boolean;
    /**
     * Whether this calendar list entry has been deleted from the calendar list. Read-only. Optional. The default is False.
     */
    deleted: boolean
}