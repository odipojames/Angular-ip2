import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../user';
import  {Repo} from '../repo';
import {environment} from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class GithubRequestService {

  private username:string;
  // private userid='';
  // private token='23648081c3efa06a5eb0fff721237e7b1a0e4855';

  constructor(private http:HttpClient){
    console.log('service works');
    this.username='odipojames';

  }

getUserInfo(){
  return this.http.get(environment.format + this.username + '?access_token=' + environment.token)
}

getRepos(){
    return this.http.get(environment.format + this.username + '/repos?access_token=' + environment.token)
}

updateProfile(searchItem:string){
  // let search_url = `${environment.mzizi}${searchItem}?access_token=${environment.token}`
  // return this.http.get(search_url);
  this.username=searchItem
}
updateRepo(searchItem:string){
  let api_url=`${environment.format}${searchItem}/repos?access_token=${environment.token}`
  return this.http.get(api_url)
}



  }
