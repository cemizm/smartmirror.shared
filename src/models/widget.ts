/**
 * Created by cem on 09.06.17.
 */

import {WidgetType, WidgetSide} from "./enums";

export interface Widget {
    /**
     * Name of the widget
     */
    name: string;
    /**
     * Type of the Widget
     */
        type: WidgetType;
    /**
     * The Side of the Mirror to Display the Widget
     */
    side: WidgetSide;
    /**
     * The Order Position inside the Mirror Side
     */
    order: number;
    /**
     * Settings of the Widget
     */
    setting: WeatherSetting | TaskSetting | NewsSetting | MailSettings | CalendarSettings;
}

/**
 * Settings of the Weather Widget
 */
export interface WeatherSetting {
    /**
     * The City for Weather retrieval
     */
    city: string;

    /**
     * Maximal count of forecast days to display
     */
    maxCount: number;
}

/**
 * Setting for the Task Widget
 */
export interface TaskSetting {

    /**
     * Maximal count of task items to display
     */
    maxCount: number;
    /**
     * OAuth token for google tasks
     */
    oAuthToken: string;

    /**
     * Task List to display.
     */
    taskListId: string;
}

/**
 * Setting for the News Widget
 */
export interface NewsSetting {
    /**
     * Url of the RSS News Feed
     */
    feedUrl: string;

    /**
     * Maximal count of news items to display
     */
    maxCount: number;
}

export interface MailSettings {

    /**
     * Maximal count of email items to display
     */
    maxCount: number;

    /**
     * show only unread email
     */
    unread: boolean;

    /**
     * OAuth token for google mail
     */
    oAuthToken: string;

}

export interface CalendarSettings {

    /**
     * Maximal count of email items to display
     */
    maxCount: number;

    /**
     * OAuth token for google mail
     */
    oAuthToken: string;

    /**
     * the google calendar id to display
     */
    calendarId: string;

}