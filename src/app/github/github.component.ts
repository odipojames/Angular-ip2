import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {User} from '../user';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  user:User


constructor(private http:HttpClient){}
  ngOnInit() {

    interface ApiResponse{
        login:string;
        public_repos:any[];
        avatar_url:any
      }



      this.http.get('https://api.github.com/users/odipojames?access_token=23648081c3efa06a5eb0fff721237e7b1a0e4855').subscribe(data=>{

  this.user= new User (data.login,data.public_repos,data.avatar_url)
          // Successful API request.
      })
    }

}
