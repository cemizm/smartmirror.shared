/**
 * A gadget that extends an event.
 */
export interface EventGadget {
    /**
     * The gadget's type.
     */
        type: string;
    /**
     * The gadget's title.
     */
    title: string;
    /**
     * The gadget's URL. The URL scheme must be HTTPS.
     */
    link: string;
    /**
     * The gadget's icon URL. The URL scheme must be HTTPS.
     */
    iconLink: string;
    /**
     * The gadget's width in pixels. The width must be an integer greater than 0. Optional.
     */
    width: number;
    /**
     * The gadget's height in pixels. The height must be an integer greater than 0. Optional.
     */
    height: number;
    /**
     * The gadget's display mode. Optional. Possible values are: <br/>
     * - "icon" - The gadget displays next to the event's title in the calendar view. <br/>
     * - "chip" - The gadget displays when the event is clicked. <br/>
     */
    display: string;
    /**
     * Preferences of the gadget.
     */
    preferences: { [key: string]: string};
}