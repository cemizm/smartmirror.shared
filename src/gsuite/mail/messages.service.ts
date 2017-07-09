import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import {BaseService} from "../shared/base.service";
import {Message} from "./message.model";

/**
 * Optional query options for tasklist.
 */
export interface  MessageListQueryOptions {
    /**
     * Include messages from SPAM and TRASH in the results. (Default: false)
     */
    includeSpamTrash?: boolean;
    /**
     * Only return messages with labels that match all of the specified label IDs.
     */
    labelIds?: string;
    /**
     * Maximum number of messages to return.
     */
    maxResults?: boolean;
    /**
     * Page token to retrieve a specific page of results in the list.
     */
    pageToken?: string;
    /**
     * Only return messages matching the specified query. Supports the same query format as the Gmail search box.
     * For example, "from:someuser@example.com rfc822msgid: is:unread". Parameter cannot be
     * used when accessing the api using the gmail.metadata scope.
     */
    q?: string;
}

export interface MessageQueryOptions {
    /**
     * The format to return the message in.
     * Acceptable values are: <br/>
     * - "full": Returns the full email message data with body content parsed in the payload field;
     * the raw field is not used. (default) <br/>
     * - "metadata": Returns only email message ID, labels, and email headers. <br/>
     * - "minimal": Returns only email message ID and labels; does not return the email headers, body, or payload. <br/>
     * - "raw": Returns the full email message data with body content in the raw field as a base64url
     * encoded string; the payload field is not used.
     */
    format: string;
    /**
     * When given and format is METADATA, only include headers specified.
     */
    metadataHeaders: string;
}

/**
 * Lists the messages in the user's mailbox.
 */
interface MessagesListResponse {
    /**
     * List of messages.
     */
    messages: Array<Message>;
    /**
     * Token to retrieve the next page of results in the list.
     */
    nextPageToken: string;
    /**
     * Estimated total number of results.
     */
    resultSizeEstimate: number;
}

@Injectable()
export class MessagesService {
    /**
     * relative url to the tasklists api
     * @type {string}
     */
    private api = '/gmail/v1/users/';

    /**
     * Creates the MessagesService
     * @param service Injected internal http service for interacting with google apis
     */
    constructor(private service: BaseService) {
    }

    /**
     * Lists the messages in the user's mailbox.
     * @param authToken token of the authenticated user
     * @param userId The user's email address. The special value me can be used to indicate the authenticated user.
     * @param options Optional query parameters
     * @return {Observable<R>}
     */
    public list(authToken: string, userId: string, options?: MessageListQueryOptions): Observable<Array<Message>> {
        return this.service.get(this.api + userId + '/messages', authToken, {params: options})
            .map(res => <MessagesListResponse>res.json())
            .map(res => <Array<Message>>res.messages);
    }

    /**
     * Gets the specified message.
     * @param authToken token of the authenticated user
     * @param userId The user's email address. The special value me can be used to indicate the authenticated user.
     * @param id The ID of the message to retrieve.
     * @param options Optional query parameters
     * @return {Observable<R>}
     */
    public get(authToken: string, userId: string, id: string, options?: MessageQueryOptions): Observable<Message> {
        return this.service.get(this.api + userId + '/messages/' + id, authToken, {params: options})
            .map(res => <Message>res.json());
    }
}
