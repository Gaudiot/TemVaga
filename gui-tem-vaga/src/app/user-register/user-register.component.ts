import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  users = [
    {name: "Victor", rate: 5},
    {name: "Elaine", rate: 3},
    {name: "Guta", rate: 4}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
