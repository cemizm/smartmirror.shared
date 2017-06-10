/**
 * Created by Cem Basoglu on 10.06.17.
 */

import {Injectable} from "@angular/core";

/**
 * Wrapper service for crud operations on the local Storage
 */
@Injectable()
export class StorageService {

    /**
     * Clears the whole localStorage for the application
     */
    clear(): void {
        localStorage.clear();
    }

    /**
     * Gets an item with the given key from the localStorage
     * @param key The key to get the value from the localStorage
     * @return {any} The value for the given key if exists, otherwise null
     */
    getItem(key: string): string {
        return localStorage.getItem(key);
    }

    /**
     * Gets the literal key on the given index in the localStorage
     * @param index The index in the localStorage to retrieve the literal key for
     * @return {string} The literal key for the given index
     */
    key(index: number): string {
        return localStorage.key(index);
    }

    /**
     * Removes an item with the given key from the localStorage
     * @param key The key of the item to remove
     */
    removeItem(key: string): void {
        localStorage.removeItem(key);
    }

    /**
     * Sets an item for the given key in the localStorage
     * @param key The key of the item to set
     * @param value The value of the item to in the localStorage
     */
    setItem(key: string, value: string): void {
        localStorage.setItem(key, value);
    }
}
