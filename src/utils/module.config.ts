/**
 * Created by cem on 10.06.17.
 */

import {Injectable} from "@angular/core";
import {SmartMirrorModuleOptions} from "./module.options";

/**
 * Configuration class for the smart mirror module
 */
@Injectable()
export class SmartMirrorModuleConfig {

    /**
     * creates the configration class with the given options
     * @param options The options to use for configuration
     */
    constructor(private options: SmartMirrorModuleOptions) {

    }

    /**
     * The smart mirror api url for the http requests
     * @return {string} The Smart Mirror Api url
     */
    get ApiUrl(): string {
        return this.options.apiUrl;
    }

    /**
     * The smart mirror realtime service url.
     * @constructor
     */
    get RTUrl(): string {
        return this.options.rtUrl;
    }
}
