export interface EventAttachment {
    /**
     * URL link to the attachment.
     * For adding Google Drive file attachments use the same format as
     * in alternateLink property of the Files resource in the Drive API.
     */
    fileUrl: string;
    /**
     * Attachment title.
     */
    title: string;
    /**
     * Internet media type (MIME type) of the attachment.
     */
    mimeType: string;
    /**
     * URL link to the attachment's icon. Read-only.
     */
    iconLink: string;
    /**
     * ID of the attached file. Read-only.
     * For Google Drive files, this is the ID of the corresponding Files resource entry in the Drive API.
     */
    fileId: string
}