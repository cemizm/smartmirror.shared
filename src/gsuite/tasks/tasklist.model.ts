
/**
 * A list containing tasks. Users can have more than one task list to manage their tasks the way they want.
 */
export interface Tasklist {
    /**
     * Type of the resource. This is always "tasks#taskList".
     */
    kind: string;
    /**
     * Task list identifier.
     */
    id: string;
    /**
     *    ETag of the resource.
     */
    etag: string;
    /**
     * Title of the task list.
     */
    title: string;
    /**
     * Last modification time of the task list
     */
    updated: Date;
    /**
     * URL pointing to this task list. Used to retrieve, update, or delete this task list.
     */
    selfLink: string;
}
