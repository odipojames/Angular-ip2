import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';
import {RoutingModule} from './routing/routing.module';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import { ReposearchComponent } from './reposearch/reposearch.component';

const routes:Routes=[
  {path:"github",component:GithubComponent},
  {path:"reposearch",component:ReposearchComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    ReposearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RoutingModule,
    NgProgressModule.forRoot(),
    RouterModule.forRoot(routes),
    NgProgressHttpModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
