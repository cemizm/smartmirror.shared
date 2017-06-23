/**
 * Created by Cem Basoglu on 09.06.17.
 */

import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {SmartMirrorService} from "./smartmirror.service";
import {Mirror} from "../models/mirror";
import {Ticket} from "../models/ticket";

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

/**
 * TicketService class for registration of new mirrors
 */
@Injectable()
export class TicketService  {
    /**
     * relative url to the tickets api
     * @type {string}
     */
    private api = '/tickets';

    /**
     * Creates the AuthService
     * @param service Injected internal http service for interacting with SmartMirror Api
     */
    constructor(private service: SmartMirrorService) {
    }

    /**
     * Gets a registration ticket for a new mirror with given id
     * @param id The id of the mirror to create a new registration ticket
     * @return {Observable<R>} ticket for registration
     */
    public get(id:string): Observable<Ticket> {
        return this.service.get(this.api + '/' + id).map(res => <Ticket>res.json());
    }

    /**
     * Registers a new mirror with the given ticket number for the authenticated user
     * @param number The ticket number of the mirror to register with
     * @return {Observable<R>} the created mirror with default settings
     */
    public register(number: string): Observable<Mirror> {
        return this.service.post(this.api + '/' + number, {}).map(res => <Mirror>res.json());
    }

}
