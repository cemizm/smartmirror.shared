/**
 * Created by cem on 21.07.17.
 */

import {Injectable} from "@angular/core";
import {SmartMirrorModuleConfig} from "../utils/module.config";
import io from "socket.io-client";
import {Observable} from "rxjs";


/**
 * MirrorService class for interacting with the remote mirror collection.
 */
@Injectable()
export class SocketService {
    private socket: any;

    /**
     * Creates the SocketService
     */
    constructor(private config: SmartMirrorModuleConfig) {
    }

    /**
     * connects to the given socket.io service
     * @param mirrorId optional mirror id to subscribe to
     */
    public connect(mirrorId?: string) {
        var cfg = null;
        if (mirrorId)
            cfg = {query: 'mirrorId=' + mirrorId};

        this.socket = io(this.config.RTUrl, cfg);
    }

    /**
     * Watch to given message
     * @param message
     */
    public watch<T>(message: string): Observable<T> {
        return new Observable<T>(observer => {
            this.socket.on(message, (data) => {
                observer.next(data);
            });
            return () => {
                this.socket.disconnect();
            };
        });
    }

    /**
     * Send message
     * @param message to send
     * @param obj to send
     */
    public send<T>(message: string, obj: T): void {
        this.socket.emit(message, obj);
    }


}
