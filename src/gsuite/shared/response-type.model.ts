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
     * Token used at a later point in time to retrieve only the entries that have changed since this result was returned.
     * Omitted if further results are available, in which case nextPageToken is provided.
     */
    nextSyncToken: string;
    /**
     * Collection of Items.
     */
    items: Array<any>;
}
