
export enum ActionEnum {
    Input = "Input",
    Output = "Output",
    Loan = "Loan"
}

export class AccountAction {
    id:number
    AccountId:number
    Type:ActionEnum
    Amount:number
}
