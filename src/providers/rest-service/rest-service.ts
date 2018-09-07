import { Injectable } from '@angular/core';
import { HTTP } from "@ionic-native/http";

/*
  Generated class for the RestServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestServiceProvider {

  constructor(public http: HTTP) {
    console.log('Hello RestServiceProvider Provider');
  }

  restAPI : string = 'http://192.168.100.125:8881/inlife-app-wordpress-rest-api/wp-json/inlife-api/v1/';
  return : any;

  get_settings(){



  }

}
