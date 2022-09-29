import { Categories } from '../types'

class MsgCreatePool {
  public category: Categories; // required
  public type: string; // required
  public json: any; // required
  public creator: string;

  constructor(payload: any) {
    this.category = 'create-pool'; // required
    this.type = payload.type; // required
    this.json = payload.json; // required
    this.creator = payload.creator;
  }

  static fromJson(json: any) {
    return new MsgCreatePool({
      json,
      type: json['@type'],
      creator: json.creator
    });
  }
}

export default MsgCreatePool