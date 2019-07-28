import { Component, OnInit } from '@angular/core';
import { AccountAction } from 'src/app/model/account-action';
import { ActivatedRoute } from '@angular/router';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-actions-summary',
  templateUrl: './actions-summary.component.html',
  styleUrls: ['./actions-summary.component.css']
})
export class ActionsSummaryComponent implements OnInit {

  _accountID:number
  actions:AccountAction[] = []
  constructor(private route:ActivatedRoute, private db:DbService) { }

  ngOnInit() {
    this.route.params.subscribe(myparams => {
      //debugger
      this._accountID = myparams['bankAccoundId']
      this.actions = this.db.getAccountsActionsByAccountId(this._accountID)
    })
  }
}
