/**
 * Created by cem on 09.06.17.
 */

import {WidgetType, WidgetSide} from './enums';

export interface Widget {
    name: string;           // Name of the Widget
    type: WidgetType;       // The Widget Type
    side: WidgetSide;       // The Side of the Mirror to Display the Widget
    order: number;          // The Order Position inside the Mirror Side
    setting: any;           // Settings of the Widget
}
