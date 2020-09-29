import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router'
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../../common/style.scss']
})
export class LoginComponent implements OnInit {

  user = {
    user: "",
    password: ""
  }

  errorMessage=""
  constructor(private router: Router, private userService: UserService) { 
    console.log('contructor iniciado')
  }

  ngOnInit(): void {
    console.log(this.fazConsoleLog())
  }


  fazConsoleLog(): string {
    return 'Login carregou'
  }

  login() {
    console.log(this.user)
    if (!this.user.user) {
      this.errorMessage = "Por favor digite um usuário válido"
    } else  if (!this.user.password) {
      this.errorMessage = "Por favor digite uma senha válid"
    } else  {
      this.userService.login(this.user)
    }
    
  }

  ngOnDestroy() {
    console.log('Saindo')
  }

  ngOnChanges() {
    console.log(this.user.user)
  }
}
