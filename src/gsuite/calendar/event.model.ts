import {EventPerson} from "./event-person.model";
import {EventDate} from "./event-date.model";
import {EventAttendee} from "./event-attendee.model";
import {EventProperties} from "./event-properties.model";
import {EventGadget} from "./event-gadget.model";
import {EventReminder} from "./event-reminder.model";
import {EventSource} from "./event-source.model";
import {EventAttachment} from "./event-attachments.model";

/**
 * An event in a calendar.
 */
export interface Event {
    /**
     * Type of the resource ("calendar#event").
     */
    kind: string;
    /**
     * ETag of the resource.
     */
    etag: string;
    /**
     * Opaque identifier of the event. When creating new single or recurring events, you can specify their IDs.
     */
    id: string;
    /**
     * Status of the event. Optional. Possible values are: <br/>
     * - "confirmed" - The event is confirmed. This is the default status.  <br/>
     * - "tentative" - The event is tentatively confirmed.  <br/>
     * - "cancelled" - The event is cancelled. <br/>
     */
    status: string;
    /**
     * An absolute link to this event in the Google Calendar Web UI. Read-only.
     */
    htmlLink: string;
    /**
     * Creation time of the event. Read-only.
     */
    created: Date;
    /**
     * Last modification time of the event. Read-only.
     */
    updated: Date;
    /**
     * Title of the event.
     */
    summary: string;
    /**
     * Description of the event. Optional.
     */
    description: string;
    /**
     * Geographic location of the event as free-form text. Optional.
     */
    location: string;
    /**
     * The color of the event. This is an ID referring to an entry in the event section
     * of the colors definition (see the colors endpoint). Optional.
     */
    colorId: string;
    /**
     * The creator of the event. Read-only.
     */
    creator: EventPerson;
    /**
     * The organizer of the event. If the organizer is also an attendee,
     * this is indicated with a separate entry in attendees with the organizer field set to True.
     * To change the organizer, use the move operation. Read-only, except when importing an event.
     */
    organizer: EventPerson;

    /**
     * The (inclusive) start time of the event. For a recurring event, this is the start time of the first instance.
     */
    start: EventDate;
    /**
     * The (exclusive) end time of the event. For a recurring event, this is the end time of the first instance.
     */
    end: EventDate;
    /**
     * Whether the end time is actually unspecified. An end time is still provided for compatibility reasons,
     * even if this attribute is set to True. The default is False.
     */
    endTimeUnspecified: boolean;

    /**
     * List of RRULE, EXRULE, RDATE and EXDATE lines for a recurring event, as specified in RFC5545.
     * Note that DTSTART and DTEND lines are not allowed in this field; event start and end times are
     * specified in the start and end fields. This field is omitted for single events or instances of recurring events.
     */
    recurrence: Array<string>;
    /**
     * For an instance of a recurring event, this is the id of the recurring event to which this instance belongs. Immutable.
     */
    recurringEventId: string;
    /**
     * For an instance of a recurring event, this is the time at which this event would start according to
     * the recurrence data in the recurring event identified by recurringEventId. Immutable.
     */
    originalStartTime: EventDate;
    /**
     * Whether the event blocks time on the calendar. Optional. Possible values are: <br/>
     * - "opaque" - The event blocks time on the calendar. This is the default value. <br/>
     * - "transparent" - The event does not block time on the calendar. <br/>
     */
    transparency: string;
    /**
     * Visibility of the event. Optional. Possible values are: <br/>
     * - "default" - Uses the default visibility for events on the calendar. This is the default value. <br/>
     * - "public" - The event is public and event details are visible to all readers of the calendar. <br/>
     * - "private" - The event is private and only event attendees may view event details. <br/>
     * - "confidential" - The event is private. This value is provided for compatibility reasons.
     */
    visibility: string;
    /**
     * Event unique identifier as defined in RFC5545. It is used to uniquely identify events accross calendaring
     * systems and must be supplied when importing events via the import method.
     */
    iCalUID: string;
    /**
     * Sequence number as per iCalendar.
     */
    sequence: number;

    /**
     * The attendees of the event. See the Events with attendees guide
     * for more information on scheduling events with other calendar users.
     */
    attendees: Array<EventAttendee>
    /**
     * Whether attendees may have been omitted from the event's representation. When retrieving an event,
     * this may be due to a restriction specified by the maxAttendee query parameter.
     * When updating an event, this can be used to only update the participant's response.
     * Optional. The default is False.
     */
    attendeesOmitted: boolean;
    /**
     * Extended properties of the event.
     */
    extendedProperties: EventProperties;
    /**
     * An absolute link to the Google+ hangout associated with this event. Read-only.
     */
    hangoutLink: string;
    /**
     * A gadget that extends this event.
     */
    gadget: EventGadget;
    /**
     * Whether anyone can invite themselves to the event (currently works for Google+ events only). Optional. The default is False.
     */
    anyoneCanAddSelf: boolean;
    /**
     * Whether attendees other than the organizer can invite others to the event. Optional. The default is True.
     */
    guestsCanInviteOthers: boolean;
    /**
     * Whether attendees can modify the event. Optional. The default is False.
     */
    guestsCanModify: boolean;
    /**
     * Whether attendees other than the organizer can see who the event's attendees are. Optional. The default is True.
     */
    guestsCanSeeOtherGuests: boolean;
    /**
     * Whether this is a private event copy where changes are not shared with other copies
     * on other calendars. Optional. Immutable. The default is False.
     */
    privateCopy: boolean;
    /**
     * Whether this is a locked event copy where no changes can be made to the main event fields
     * "summary", "description", "location", "start", "end" or "recurrence". The default is False. Read-Only.
     */
    locked: boolean;
    /**
     * Information about the event's reminders for the authenticated user.
     */
    reminders: EventReminder;
    /**
     * Source from which the event was created. For example, a web page, an email message or any document
     * identifiable by an URL with HTTP or HTTPS scheme. Can only be seen or modified by the creator of the event.
     */
    source: EventSource;
    /**
     * File attachments for the event. Currently only Google Drive attachments are supported.
     * In order to modify attachments the supportsAttachments request parameter should be set to true.
     * There can be at most 25 attachments per event.
     */
    attachments: Array<EventAttachment>;
}