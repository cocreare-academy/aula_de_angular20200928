import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InstagramService, User } from 'src/app/services/instagram.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private userService: UserService, 
    private instagramService: InstagramService,
    private router: Router
  ) { }
  
  busca = ''
  estilobotao = "background:blue"
  today = Date();

  showToday() {
    console.log(this.today)
  }

  imagens:any = [];
  private resultado: User[];
  buscaInstagram() {
    this.instagramService.search().subscribe(resultado => { 
      console.log(resultado[0].id)
    })
  }

  logout() {
    localStorage.removeItem('credentials')
    this.router.navigateByUrl('/login')
  }

  ngOnInit(): void {
    console.log(this.userService.loggedUser.user)
  }

}
