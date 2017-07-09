import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {BaseService} from "../shared/base.service";
import {ResponseType} from "../shared/response-type.model";
import {Task} from "./task.model";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";

/**
 * Optional query parameters for tasks
 */
export interface TaskQueryOptions {
    /**
     * Upper bound for a task's completion date to filter by. Optional. The default is not to filter by completion date.
     */
    completedMax?: Date;
    /**
     * Lower bound for a task's completion date to filter by. Optional. The default is not to filter by completion date.
     */
    completedMin?: Date;
    /**
     * Upper bound for a task's due date to filter by. Optional. The default is not to filter by due date.
     */
    dueMax?: Date;
    /**
     * Lower bound for a task's due date to filter by. Optional. The default is not to filter by due date.
     */
    dueMin?: Date;
    /**
     * Maximum number of task lists returned on one page. Optional. The default is 100.
     */
    maxResults?: number;
    /**
     * Token specifying the result page to return. Optional.
     */
    pageToken?: string;
    /**
     * Flag indicating whether completed tasks are returned in the result. Optional. The default is True.
     */
    showCompleted?: boolean;
    /**
     * Flag indicating whether deleted tasks are returned in the result. Optional. The default is False.
     */
    showDeleted?: boolean;
    /**
     * Flag indicating whether hidden tasks are returned in the result. Optional. The default is False.
     */
    showHidden?: boolean;
    /**
     * Lower bound for a task's last modification time to filter by. Optional. The default is not to filter by last modification time.
     */
    updatedMin?: Date;

}

@Injectable()
export class TaskService {
    /**
     * relative url to the tasks api
     * @type {string}
     */
    private api = '/tasks/v1/lists/';

    /**
     * Creates the TaskService
     * @param service Injected internal http service for interacting with google apis
     */
    constructor(private service: BaseService) {
    }

    /**
     * Returns all tasks in the specified task list.
     * @param authToken The authenticated user's token.
     * @param tasklist Task list identifier.
     * @return {Observable<R>} Tasks for specified Tasklist of the authenticated user.
     */

    public list(authToken: string, tasklist: string, options?: TaskQueryOptions): Observable<Array<Task>> {
        return this.service.get(this.api + tasklist + "/tasks", authToken)
            .map(res => <ResponseType>res.json())
            .map(res => <Array<Task>>res.items);
    }
}
