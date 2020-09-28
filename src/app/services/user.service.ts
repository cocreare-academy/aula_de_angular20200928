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
    if (!user.user || !user.password) {
      alert('Digite suas credenciais')
    } else {
      localStorage.setItem('credentials', JSON.stringify(this.loggedUser))
      this.router.navigateByUrl('/home')
    }
  }

  constructor(private router: Router) { }
}
