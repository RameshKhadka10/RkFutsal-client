import { Component, OnInit } from '@angular/core';

import { ReservationService } from '../_services/reservation.service';

import {Users} from '../models/users';




@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {

  public username: string;
  public user: Users;

 public users: Users[];

 

  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void {

   

  }

  public getUser(){
    this.reservationService.getUser(this.username).subscribe(user => this.user = user);
    
    

  }

  public getAllUsers(){
    this.reservationService.getAllReservations().subscribe(users => this.users = users);
  
    
    

  }

}
