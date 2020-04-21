import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticate(username, password) {
    // if (username === "master-admin" && password === "master-pass") {
      console.log(username);
      console.log(password);
      if (username === "master-admin" && password === "master-pass") {
      console.log("setting session!");
      sessionStorage.setItem('username', username)
      console.log(sessionStorage.getItem('username'));
      console.log(sessionStorage.getItem('password'));      
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    console.log("logged in!");
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    console.log("loggin out!");
    sessionStorage.removeItem('username')
  }
}