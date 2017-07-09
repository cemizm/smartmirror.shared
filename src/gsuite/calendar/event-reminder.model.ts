import {CalendarReminder} from "./calendar-reminders.model";
export interface EventReminder {
    /**
     * Whether the default reminders of the calendar apply to the event.
     */
    useDefault: boolean;
    /**
     * If the event doesn't use the default reminders, this lists the reminders specific to the event, or, if not set,
     * indicates that no reminders are set for this event. The maximum number of override reminders is 5.
     */
    overrides: Array<CalendarReminder>;
}