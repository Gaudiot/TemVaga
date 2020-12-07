import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-requested-rides',
  templateUrl: './requested-rides.component.html',
  styleUrls: ['./requested-rides.component.css']
})
export class RequestedRidesComponent implements OnInit {
  rides = [
    {driver: "Guta", id: 1, time: 13, destiny: "Boa viagem"},
     {driver: "Elaine", id: 2, time: 8, destiny: "Olinda"},
     {driver: "Victor", id: 3, time: 10, destiny: "Boa Viagem"}
    ];

  constructor() { }

  reset(){
    this.rides = [
      {driver: "Guta", id: 1, time: 13, destiny: "Boa viagem"},
       {driver: "Elaine", id: 2, time: 8, destiny: "Olinda"},
       {driver: "Victor", id: 3, time: 10, destiny: "Boa Viagem"}
      ];
  }

  cancelRide(id){
    const rideIndex = this.rides.findIndex(ride => ride.id === id);
    if (rideIndex >= 0){
      this.rides.splice(rideIndex, 1)
    }
  }

  ngOnInit(): void {
  }

}
