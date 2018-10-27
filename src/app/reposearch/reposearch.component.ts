import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GithubRequestService} from '../github-http/github-request.service';

import {Repo} from '../repo';

@Component({
  selector: 'app-reposearch',
  templateUrl: './reposearch.component.html',
  styleUrls: ['./reposearch.component.css']
})
export class ReposearchComponent implements OnInit {

  repos: any =[];

searchItem:string ;

constructor(private gitrequest:GithubRequestService) {
  this.gitrequest.getRepos().subscribe(cat=>{
    // console.log(cat)
    this.repos=cat;
  })
}

searchIt(){
  this.gitrequest.updateProfile(this.searchItem)
  this.gitrequest.getRepos().subscribe(cat=>{
    // console.log(cat)
    this.repos=cat;
  })
}
  ngOnInit() {
  }

}
