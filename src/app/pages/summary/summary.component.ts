import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Account } from 'src/app/model/account';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  _BankUserId:number
  accounts:Account[] = []
  constructor(private route:ActivatedRoute, private db:DbService) { }

  ngOnInit() {
    this.route.params.subscribe(myparams => {
      //debugger
      this._BankUserId = myparams['bankUserId']
      this.accounts = this.db.getAccountsById(this._BankUserId)
    })
  }

}
