import { Component, OnInit } from '@angular/core';
import { DisplayModalService } from 'src/app/display-modal.service';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss']
})
export class NotfoundComponent implements OnInit {
  showDisplay:boolean

  constructor(
    public displays: DisplayModalService
  ) {

   
   }

  ngOnInit(): void {
   this.displays.showNotFound.subscribe((valor) => {
     this.showDisplay = valor
   })

  
  }

}
