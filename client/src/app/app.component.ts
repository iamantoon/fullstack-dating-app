import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccountService } from './_services/account.service';
import { User } from './_models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // Inside our AppComponent, it goes through several stages before it displays the content inside our browser
  // The earliest part is the constructor
  // This happens as soon as our component is instantiated and there are several life cycle events that goes
  // through a component when it's created
  constructor(private accountService: AccountService){}

  ngOnInit(): void {
    // Observables are lazy by nature and they will not happen if nobody's observing them
    this.setCurrentUser();
  }

  
  setCurrentUser(){
    // const user: User = JSON.parse(localStorage.getItem('user'));
    const userString = localStorage.getItem('user');
    if (!userString) return;
    const user: User = JSON.parse(userString);
    this.accountService.setCurrentUser(user);
  }
}
