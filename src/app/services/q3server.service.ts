import {Injectable} from '@angular/core';

var Q3RCon = require('quake3-rcon');

@Injectable({
  providedIn: 'root'
})
export class Q3serverService {
  private server: any;

  constructor() {
    this.server = new Q3RCon({
      address: '127.0.0.1',
      port: 27960
    });
  }

  public getLeaderboard() {
    return this.server.rcon('status');
  }
}
