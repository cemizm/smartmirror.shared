/**
 * Source from which an event was created. For example, a web page, an email
 * message or any document identifiable by an URL with HTTP or HTTPS scheme.
 */
export interface EventSource {
    /**
     * URL of the source pointing to a resource. The URL scheme must be HTTP or HTTPS.
     */
    url: string;
    /**
     * Title of the source; for example a title of a web page or an email subject.
     */
    title: string
}
