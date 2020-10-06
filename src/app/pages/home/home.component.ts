import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DisplayModalService } from 'src/app/display-modal.service';
import { InstagramService, TransactionPayload } from 'src/app/services/instagram.service';
import { UserService } from 'src/app/services/user.service';

interface responseAPI {
  status:string,
  success:boolean
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private userService: UserService, 
    private instagramService: InstagramService,
    public displays: DisplayModalService,
    private router: Router
  ) { }
  

  q = ''
  estilobotao = "background:blue"
  today = Date();

  showToday() {
    console.log(this.today)
  }
  body:TransactionPayload
  imagens:any = [];
  buscaInstagram() {

    try {

      this.body = {
        card_number:''+222,
        cvv:parseInt('222'),
        expiry_date:'20/12/2020',
        destination_user_id: 34,
        value:parseFloat('399.99')
      }

    } catch(e) {
      alert('informações invalidas')
    }
    this.instagramService.search(this.body).toPromise().then((resultado:responseAPI) => { 
      console.log(resultado.status)
    })
  }

  logout() {
    localStorage.removeItem('credentials')
    this.router.navigateByUrl('/login')
  }

  valorModal = false
  showNotFoundModal() {
    console.log(parseFloat(this.q.replace(/\./g,'').replace(/\,/g,'.')))
    this.valorModal = !this.valorModal
    this.displays.mudarValor(this.valorModal)
  }

  ngOnInit(): void {
    console.log(this.userService.loggedUser.user)
  }

  maskSearch(event) {
    console.log(event)
    
    if (event.keyCode == 8 && this.q != '') {
      this.q = '';
    }

    if (event.keyCode >= 48 && event.keyCode <= 57) {
      console.log('É numero')
      
      this.q = this.q + event.key 
      this.q = this.q.replace(/\,/gi,'').replace(/(\d{2})$/g, ',$1')
      this.q = this.q.replace(/\./gi,'').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    }
  }

  maskSearchDown(event) {
    event.preventDefault();
  }

}
