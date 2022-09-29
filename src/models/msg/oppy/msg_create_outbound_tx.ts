import { Categories } from '../types'

class MsgCreateOutboundTx {
  public category: Categories; // required
  public type: string; // required
  public json: any; // required
  public outboundTx: string;

  constructor(payload: any) {
    this.category = 'create-outbound-tx'; // required
    this.type = payload.type; // required
    this.json = payload.json; // required
    this.outboundTx = payload.outboundTx;
  }

  static fromJson(json: any) {
    return new MsgCreateOutboundTx({
      json,
      type: json['@type'],
      outboundTx: json.outboundTx
    });
  }
}

export default MsgCreateOutboundTx