
/**
 * A link of a Task.
 */
export interface TaskLink {
    /**
     * Type of the link, e.g. "email".
     */
        type: string;
    /**
     * The description. In HTML speak: Everything between <a> and </a>.
     */
    description: string;
    /**
     * The URL.
     */
    link: string;
}
