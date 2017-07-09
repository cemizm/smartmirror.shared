export interface EventAttendee {
    /**
     * The attendee's Profile ID, if available. It corresponds to theid field in the People collection of the Google+ API
     */
    id: string;
    /**
     * The attendee's Profile ID, if available. It corresponds to theid field in the People collection of the Google+ API
     */
    email: string;
    /**
     * The attendee's name, if available. Optional.
     */
    displayName: string;
    /**
     * Whether the attendee is the organizer of the event. Read-only. The default is False.
     */
    organizer: boolean;
    /**
     * Whether this entry represents the calendar on which this copy of the event appears. Read-only. The default is False.
     */
    self: boolean;
    /**
     * Whether the attendee is a resource. Read-only. The default is False.
     */
    resource: boolean;
    /**
     * Whether this is an optional attendee. Optional. The default is False.
     */
    optional: boolean;
    /**
     * The attendee's response status. Possible values are: <br/>
     * - "needsAction" - The attendee has not responded to the invitation. <br/>
     * - "declined" - The attendee has declined the invitation. <br/>
     * - "tentative" - The attendee has tentatively accepted the invitation. <br/>
     * - "accepted" - The attendee has accepted the invitation.
     */
    responseStatus: string;
    /**
     * The attendee's response comment. Optional.
     */
    comment: string;
    /**
     * Number of additional guests. Optional. The default is 0.
     */
    additionalGuests: number;
}