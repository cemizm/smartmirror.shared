export interface EventPerson {
    /**
     * The creator's Profile ID, if available. It corresponds to theid field in the People collection of the Google+ API.
     */
    id: string;
    /**
     * The creator's email address, if available.
     */
    email: string;
    /**
     * The creator's name, if available.
     */
    displayName: string;
    /**
     * Whether the creator corresponds to the calendar on which this copy of the event appears. Read-only. The default is False.
     */
    self: boolean
}