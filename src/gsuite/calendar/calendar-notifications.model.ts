/**
 * Notification Settings for a calendar.
 */
export interface CalendarNotifications {
    /**
     * The type of notification. Possible values are:<br/>
     * - "eventCreation" - Notification sent when a new event is put on the calendar. <br/>
     * - "eventChange" - Notification sent when an event is changed.  <br/>
     * - "eventCancellation" - Notification sent when an event is cancelled.  <br/>
     * - "eventResponse" - Notification sent when an event is changed.  <br/>
     * - "agenda" - An agenda with the events of the day (sent out in the morning).
     */
        type: string;

    /**
     *The method used to deliver the notification. Possible values are:<br/>
     * - "email" - Reminders are sent via email.</br>
     * - "sms" - Reminders are sent via SMS. This value is read-only and is ignored on inserts and updates.
     * SMS reminders are only available for Google Apps for Work, Education, and Government customers.
     */
    method: string;
}
