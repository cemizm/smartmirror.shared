/**
 * Created by cem on 09.06.17.
 */

export interface User {
    user: string;           // email of user
    name: string;           // name of user
}

export interface LoginRequest {
    user: string;           // email of user
    password: string;       // md5 hashed password of user
}

export interface LoginResponse extends User {
    accessToken: string;    // access token for authenticating subsequent smartmirror api requests
}

export interface RegisterRequest {
    email: string;          // email of new user
    name: string;           // name of new user
    password: string;       // md5 hashed password of new user
}