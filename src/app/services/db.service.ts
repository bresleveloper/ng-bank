import { Injectable } from '@angular/core';
import { BankUser } from '../model/bank-user';
import { Account } from '../model/account';
import { AccountAction } from '../model/account-action';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  private users:BankUser[]
  private accounts:Account[]
  private actions:AccountAction[]

  constructor() {
    this.users = window['bank_users'] ? window['bank_users'] : []
    this.accounts = window['bank_accounts'] ? window['bank_accounts'] : []
    this.actions = window['bank_actions'] ? window['bank_actions'] : []
  }

  loginToAccount(u:string, p:string):BankUser{
    return this.users.find(bu => bu.UserName == u && bu.Password == p)
  }

}
