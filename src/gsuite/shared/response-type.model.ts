export interface ResponseType {
    /**
     * Type of the resource.
     */
    kind: string;
    /**
     * ETag of the resource.
     */
    etag: string;
    /**
     * Token that can be used to request the next page of this result.
     */
    nextPageToken: string;
    /**
     * Collection of Items.
     */
    items: Array<any>;
}
