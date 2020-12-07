import { Component, OnInit } from '@angular/core';
import Ride from '../../../../common/src/Ride/ride';
import { UserService } from '../../services/user.service';
import { RideService } from '../../services/ride.service';

@Component({
  selector: 'app-my-rides',
  templateUrl: './my-rides.component.html',
  styleUrls: ['./my-rides.component.css']
})
export class MyRidesComponent implements OnInit {
  rides = [
    {driver: "Guta"},
    {driver: "Elaine"},
    {driver: "Victor"}
  ]

  constructor(private userService: UserService, private rideService: RideService) {
  }

  reset(){
    this.rides = [
      {driver: "Guta"},
      {driver: "Elaine"},
      {driver: "Victor"}
    ]
  }

  evaluateRide(cpfToEvaluate: string, evaluationValue: number){
    // this.userService.evaluateUser(cpfToEvaluate, evaluationValue, 'driver')
    // .subscribe(
    //   ar => {
    //     console.log(ar)
    //   },
    //   msg => console.log('batata')
    // )
    const rideIndex = this.rides.findIndex(ride => ride.driver === cpfToEvaluate);
    if(rideIndex >= 0){
      this.rides.splice(rideIndex, 1)
    }
  }

  ngOnInit(): void {
  }

}
