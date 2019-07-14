import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/services/db.service';
import { Router } from '@angular/router';
import { BankUser } from 'src/app/model/bank-user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private db:DbService, private router:Router) { }

  ngOnInit() {
  }

  login(u:string, p:string):void{
    let bu:BankUser = this.db.loginToAccount(u, p)
    this.router.navigateByUrl('summary/' + bu.id)
  }

}
