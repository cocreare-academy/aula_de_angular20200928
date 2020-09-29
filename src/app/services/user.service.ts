import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  
  loggedUser = {
    user: "",
    password: ""
  }
  
  login(user) {
    this.loggedUser = user
    
      localStorage.setItem('credentials', JSON.stringify(this.loggedUser))
      this.router.navigateByUrl('/home')
  }

  constructor(private router: Router) { }
}
