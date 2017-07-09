import {MessageAttachment} from "./message-attachment.model";
import {MessageHeader} from "./message-header.model";

export interface MessagePayload {
    /**
     * The immutable ID of the message part.
     */
    partId: string;
    /**
     * The MIME type of the message part.
     */
    mimeType: string;
    /**
     * The filename of the attachment. Only present if this message part represents an attachment.
     */
    filename: string;
    /**
     * List of headers on this message part. For the top-level message part, representing the entire
     * message payload, it will contain the standard RFC 2822 email headers such as To, From, and Subject.
     */
    headers: Array<MessageHeader>;
    /**
     * The message part body for this part, which may be empty for container MIME message parts.
     */
    body: MessageAttachment;
    /**
     * The child MIME message parts of this part. This only applies to container MIME message parts,
     * for example multipart/*. For non- container MIME message part types, such as text/plain,
     * this field is empty. For more information, see RFC 1521.
     */
    parts: Array<any>;
}