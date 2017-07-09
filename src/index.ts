import {NgModule, ModuleWithProviders, InjectionToken} from "@angular/core";
import {HttpModule} from "@angular/http";
import {CommonModule} from "@angular/common";
import {MirrorService} from "./services/mirror.service";
import {StorageService} from "./services/storage.service";
import {TokenService} from "./services/token.service";
import {SmartMirrorModuleConfig} from "./utils/module.config";
import {SmartMirrorModuleOptions} from "./utils/module.options";
import {SmartMirrorService} from "./services/smartmirror.service";
import {AuthService} from "./services/auth.service";
import {TicketService} from "./services/ticket.service";
import {BaseService} from "./gsuite/shared/base.service";
import {TaskService} from "./gsuite/tasks/task.service";
import {TaskListService} from "./gsuite/tasks/tasklist.service";
import {CalendarListService} from "./gsuite/calendar/calendar-list.service";
import {EventsService} from "./gsuite/calendar/events.service";
import {MessagesService} from "./gsuite/mail/messages.service";

export * from './models/index';
export * from './services/index';
export * from './utils/index'
export * from './gsuite/index'

export const SMARTMIRRORMODULE_OPTIONS = new InjectionToken<SmartMirrorModuleOptions>("SMARTMIRRORMODULE_OPTIONS");

/**
 * The shared Angular module for Smart Mirror project
 *
 * @example
 *
 * import {SmartMirrorModule} from "@cemizm/smartmirror-shared";
 *
 * @NgModule({
 *   declarations: [
 *     AppComponent
 *   ],
 *   imports: [
 *     BrowserModule,
 *     SmartMirrorModule.forRoot({apiUrl: 'https://sm-webapi.azurewebsites.net/api'})
 *   ],
 *   providers: [],
 *   bootstrap: [AppComponent]
 * })
 * export class AppModule { }
 *
 */
@NgModule({
    imports: [
        CommonModule,
        HttpModule
    ],
    declarations: [],
    providers: [
        {
            provide: SmartMirrorModuleConfig,
            useFactory: createSmartMirrorModuleConfig,
            deps: [
                SMARTMIRRORMODULE_OPTIONS
            ]
        },
        SmartMirrorService,
        BaseService
    ]
})
export class SmartMirrorModule {
    static forRoot(options: SmartMirrorModuleOptions): ModuleWithProviders {
        return {
            ngModule: SmartMirrorModule,
            providers: [
                {provide: SMARTMIRRORMODULE_OPTIONS, useValue: options},
                StorageService,
                TokenService,
                AuthService,
                MirrorService,
                TicketService,

                //G-Suite stuff
                //Tasks
                TaskService,
                TaskListService,
                //Calendars
                CalendarListService,
                EventsService,
                //Gmail
                MessagesService,
            ]
        };
    }
}

export function createSmartMirrorModuleConfig(options: SmartMirrorModuleOptions): SmartMirrorModuleConfig {
    return new SmartMirrorModuleConfig(options);
}