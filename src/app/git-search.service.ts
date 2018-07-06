import { Injectable } from '@angular/core';
import { GitSearch } from './git-search';
import { HttpClient } from '@angular/common/http';
import { GitSearchUser } from './git-users';
import { GitSearchParams } from './git-search/git-search-query';
// import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class GitSearchService {
  cachedValues: Array<{
    [query: string]: GitSearch
  }> = [];
  constructor(private http: HttpClient) { }

  gitSearch(query: GitSearchParams): Promise<GitSearch>  {
    // https://api.github.com/search/repositories?q=angular&page=1&per_page=10
    const pageSize = 10;
    const promise = new Promise<GitSearch>( (resolve, reject) => {
      const k = JSON.stringify(query);
      if (this.cachedValues[k]) {
        resolve(this.cachedValues[k]);
      } else {
        this.http.get(`https://api.github.com/search/repositories?q=${query.query}&page=${query.page}&per_page=${pageSize}`)
        .toPromise()
        .then( (response) => {
          const r = response as GitSearch;
          this.cachedValues[k] = r;
          resolve(r);
        }, (error) => {
          reject(error);
        });
      }
    });
    return promise;
  }

  gitSearchUser(query: string): Promise<GitSearchUser>  {
    return new Promise<GitSearchUser>( (resolve, reject) => {
      this.http.get('https://api.github.com/search/users?q=' + query)
      .toPromise()
      .then( (response) => {
        resolve(response as GitSearchUser);
      }, (error) => {
        reject(error);
      });
    });
  }
}
