/**
 * Represents the entire message payload, it will contain the standard
 * RFC 2822 email headers such as To, From, and Subject.
 */
export interface MessageHeader {
    /**
     * The name of the header before the : separator. For example, To.
     */
    name: string;
    /**
     * The value of the header after the : separator. For example, someuser@example.com.
     */
    value: string;
}