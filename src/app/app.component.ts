import { Component } from '@angular/core';
import { LoginComponent } from './pages/login/login.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Titulo da página';
  outro = LoginComponent
  

}
