/**
 * Created by cem on 09.06.17.
 */

import {Widget} from './widget';

/**
 * The Mirror interface
 *
 * @interface Mirror
 */
export interface Mirror {

    /**
     * The Id of the Mirror
     */
    id: string;
    /**
     * The User to which the Mirror belongs to
     */
    user: string;
    /**
     * The Name of the Mirror used to display on administration operations.
     */
    name: string;
    /**
     * The Path to the Image used to display on administration operations.
     */
    image: string;
    /**
     * The Widgets to Display in the Mirror frontend
     */
    widgets: Array<Widget>;
}
