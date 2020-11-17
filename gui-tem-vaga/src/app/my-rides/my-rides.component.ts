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
  rides = [{a: 1}, {a: 2}, {a: 3}]

  constructor(private userService: UserService, private rideService: RideService) {
  }

  evaluateRide(cpfToEvaluate: string, evaluationValue: number){
    this.userService.evaluateUser(cpfToEvaluate, evaluationValue)
    .subscribe(
      ar => {
        console.log(ar)
      },
      msg => console.log('batata')
    )
  }

  ngOnInit(): void {
  }

}
