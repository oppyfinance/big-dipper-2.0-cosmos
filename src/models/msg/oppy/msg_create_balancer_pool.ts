import { Categories } from '../types'

class MsgCreateBalancerPool {
  public category: Categories; // required
  public type: string; // required
  public json: any; // required
  public creator: string;
  public token1: MsgCoin;
  public token2: MsgCoin;

  constructor(payload: any) {
    this.category = 'create-balancer-token'; // required
    this.type = payload.type; // required
    this.json = payload.json; // required
    this.creator = payload.sender;
    this.token1 = payload.token1;
    this.token2 = payload.token2;
  }

  static fromJson(json: any) {
    return new MsgCreateBalancerPool({
      json,
      type: json['@type'],
      sender: json.sender,
      token1: {
        denom: json.poolAssets[0].token.denom,
        amount: json.poolAssets[0].token.amount,
      },
      token2: {
        denom: json.poolAssets[1].token.denom,
        amount: json.poolAssets[1].token.amount,
      }
    });
  }
}

export default MsgCreateBalancerPool