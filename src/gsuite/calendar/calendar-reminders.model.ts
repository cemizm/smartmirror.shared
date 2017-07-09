/**
 * Reminder settings for a calendar.
 */
export interface CalendarReminder {
    /**
     * The method used by this reminder. Possible values are: <br/>
     * - "email" - Reminders are sent via email. <br/>
     * - "sms" - Reminders are sent via SMS. These are only available for Google Apps for Work,
     * Education, and Government customers. Requests to set SMS reminders for other account types are ignored. <br/>
     * - "popup" - Reminders are sent via a UI popup.
     */
    method: string;
    /**
     * Number of minutes before the start of the event when the reminder should trigger.
     * Valid values are between 0 and 40320 (4 weeks in minutes).
     */
    minutes: number
}