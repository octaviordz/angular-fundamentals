import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import { GitSearchPagerComponent } from './git-search-pager/git-search-pager.component';
import { GitSearchService } from './git-search.service';
import { GitSearchComponent } from './git-search/git-search.component';

import { AppComponent } from './app.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'search',
    redirectTo: '/search/angular',
    pathMatch: 'full'
  },
  {
    path: 'search/:query',
    component: GitSearchComponent,
    data: {
      title: 'Git Search'
    }
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    GitSearchComponent,
    NotFoundComponent,
    HomePageComponent,
    GitSearchPagerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [GitSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
