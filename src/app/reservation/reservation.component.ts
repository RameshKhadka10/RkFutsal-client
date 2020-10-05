import { tokenName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../_services/reservation.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  form: any= {};
  currentUser: any;
  isSuccessful = false;
  isFailed = false;
  errorMessage = "";

  constructor(private reservationService: ReservationService, private token : TokenStorageService) { }

  ngOnInit(): void {
    this.currentUser= this.token.getUser();
    this.form={username: this.currentUser.username}
  }

  onSubmit(): void{
    this.reservationService.makeReservations(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
      },
      err =>{
        this.errorMessage = err.error.message;
        
      }
    );
  }


}
