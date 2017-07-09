import {MessagePayload} from "./message-payload.model";
/**
 * An email message.
 */
export interface Message {
    /**
     * The immutable ID of the message.
     */
    id: string;
    /**
     * The ID of the thread the message belongs to. To add a message or draft to a thread; the following criteria must be met:<br/>
     * - The requested threadId must be specified on the Message or Draft.Message you supply with your request.<br/>
     * - The References and In-Reply-To headers must be set in compliance with the RFC 2822 standard.<br/>
     * - The Subject headers must match.
     */
    threadId: string;
    /**
     * List of IDs of labels applied to this message.
     */
    labelIds: Array<string>;
    /**
     * A short part of the message text.
     */
    snippet: string;
    /**
     * The ID of the last history record that modified this message.
     */
    historyId: number;
    /**
     * The internal message creation timestamp (epoch ms), which determines ordering in the inbox.
     * For normal SMTP-received email, this represents the time the message was originally accepted by Google,
     * which is more reliable than the Date header. However, for API-migrated mail,
     * it can be configured by client to be based on the Date header.
     */
    internalDate: number;
    /**
     * The parsed email structure in the message parts.
     */
    payload: MessagePayload;
    /**
     * Estimated size in bytes of the message.
     */
    sizeEstimate: number;
    /**
     * The entire email message in an RFC 2822 formatted and base64url encoded string.
     * Returned in messages.get and drafts.get responses when the format=RAW parameter is supplied.
     */
    raw: string;
}