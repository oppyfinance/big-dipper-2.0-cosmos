import { Categories } from '../types'

class MsgCreateIssueToken {
  public category: Categories; // required
  public type: string; // required
  public json: any; // required
  public receiver: string;
  public token: MsgCoin;

  constructor(payload: any) {
    this.category = 'create-issue-token'; // required
    this.type = payload.type; // required
    this.json = payload.json; // required
    this.receiver = payload.receiver;
    this.token = payload.token
  }

  static fromJson(json: any) {
    return new MsgCreateIssueToken({
      json,
      type: json['@type'],
      receiver: json.receiver,
      token: {
        denom: json.coin.denom,
        amount: json.coin.amount,
      }
    });
  }
}

export default MsgCreateIssueToken