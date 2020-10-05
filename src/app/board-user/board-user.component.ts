import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ReservationService } from '../_services/reservation.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent implements OnInit {

  users: Observable<any[]>;
  currentUser: any;
  username: any;

  constructor(private reserveService: ReservationService, private token: TokenStorageService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.username= this.currentUser.username;
    this.users = this.reserveService.getReservationByUsername(this.username);
   
    
  }

  

}
