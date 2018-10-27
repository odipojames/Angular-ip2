import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GithubRequestService} from '../github-http/github-request.service';

import {User} from '../user';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  user: any=[];
  constructor(private gitrequest:GithubRequestService) {
    this.gitrequest.getUserInfo().subscribe(user=>{
       console.log(user);
      this.user=user;

    });
  }
ngOnInit() {}
}
