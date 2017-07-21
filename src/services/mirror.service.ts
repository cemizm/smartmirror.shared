/**
 * Created by Cem Basoglu on 09.06.17.
 */

import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Mirror} from "../models/mirror";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import {SmartMirrorService} from "./smartmirror.service";
import {SocketService} from "./socket.service";

/**
 * MirrorService class for interacting with the remote mirror collection.
 */
@Injectable()
export class MirrorService {
    /**
     * relative url to the mirrors api
     * @type {string}
     */
    private api = '/mirrors';

    /**
     * Creates the MirrorService
     * @param service Injected internal http service for interacting with SmartMirror Api
     */
    constructor(private service: SmartMirrorService,
                private socket: SocketService) {
    }

    public watchUpdates(id: string): Observable<Mirror> {
        this.socket.connect(id);

        return this.socket.watch<Mirror>("update");
    }

    /**
     * Gets all Mirrors for authenticated User
     * @return {Observable<R>}
     */
    public getAll(): Observable<Array<Mirror>> {
        return this.service.get(this.api).map(res => <Array<Mirror>>res.json());
    }

    /**
     * Gets the mirror with the given id
     * @param id The id of the mirror to request
     * @return {Observable<R>}
     */
    public getById(id: string): Observable<Mirror> {
        return this.service.get(this.api + '/' + id).map(res => <Mirror>res.json());
    }

    /**
     * Updates the given mirror of the authenticated user
     * @param mirror The mirror to update
     * @return {Observable<R>}
     */
    public update(mirror: Mirror): Observable<void> {
        return this.service.put(this.api, mirror).map(()=> {
        });
    }

    /**
     * Deletes the mirror with the given id of the authenticated user
     * @param id The mirror id to delete
     * @return {Observable<R>}
     */
    public deleteById(id: string): Observable<void> {
        return this.service.delete(this.api + '/' + id).map(()=> {
        });
    }

}
