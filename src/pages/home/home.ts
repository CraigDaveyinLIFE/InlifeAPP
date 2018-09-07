import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HTTP } from "@ionic-native/http";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  settings : any;

  constructor(public navCtrl: NavController , public http: HTTP) {
      this.getAllPosts();
  }

  getAllPosts(){

      this.http.get('http://192.168.100.125:8881/inlife-app-wordpress-rest-api/wp-json/inlife-api/v1/settings' , {} , {})
          .then(data => {

              console.log(data.status);
              console.log(data.data);
              console.log(data.headers);

              this.settings = data.data;

          })
          .catch(error => {

              console.log(error.status);
              console.log(error.error);
              console.log(error.headers);

              this.settings = error;

          });

  }

}
