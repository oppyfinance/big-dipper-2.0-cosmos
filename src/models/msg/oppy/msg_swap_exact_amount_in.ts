import { Categories } from '../types'

class MsgSwapExactAmountIn {
  public category: Categories; // required
  public type: string; // required
  public json: any; // required
  public sender: string;
  public tokenIn: MsgCoin;
  public tokenOut: MsgCoin;

  constructor(payload: any) {
    this.category = 'swap_exact_amount_in'; // required
    this.type = payload.type; // required
    this.json = payload.json; // required
    this.sender = payload.sender;
    this.tokenIn = payload.tokenIn;
    this.tokenOut = payload.tokenOut;
  }

  static fromJson(json: any) {
    return new MsgSwapExactAmountIn({
      json,
      type: json['@type'],
      sender: json.sender,
      tokenIn: {
        denom: json.tokenIn.denom,
        amount: json.tokenIn.amount,
      },
      tokenOut: {
        denom: json.routes[json.routes.length-1].tokenOutDenom,
        amount: json.tokenOutMinAmount,
      }
    });
  }
}

export default MsgSwapExactAmountIn