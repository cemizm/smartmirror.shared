export interface EventDate {
    /**
     * The date, in the format "yyyy-mm-dd", if this is an all-day event.
     */
    date: Date;
    /**
     * The time, as a combined date-time value.
     * A time zone offset is required unless a time zone is explicitly specified in timeZone.
     */
    dateTime: Date;
    /**
     * The time zone in which the time is specified.
     * For recurring events this field is required and specifies the time zone in which the recurrence is expanded.
     * For single events this field is optional and indicates a custom time zone for the event start/end.
     */
    timeZone: string
}