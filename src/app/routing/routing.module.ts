import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router'

import { GithubComponent } from '../github/github.component';
import { ReposearchComponent } from '../reposearch/reposearch.component';


const routes:Routes=[
  {path:"github",component:GithubComponent},
  {path:"reposearch",component:ReposearchComponent},

]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
    declarations: []
})
export class RoutingModule {

 }
