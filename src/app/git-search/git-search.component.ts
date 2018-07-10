import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { GitSearchService } from '../git-search.service';
import { GitSearch } from '../git-search';

@Component({
  selector: 'app-git-search',
  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.css']
})
export class GitSearchComponent implements OnInit {
  searchResults: GitSearch;
  searchQuery: string;
  title: string;
  displayQuery: string;
  pageIndex = 1;
  constructor(
    private gitSearchService: GitSearchService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  gitSearch() {
    this.gitSearchService.gitSearch({
      query: this.searchQuery,
      page: this.pageIndex
    }).then((response) => {
      this.searchResults = response;
    }, (error) => {
      alert('Error: ' + error.statusText);
    });
  }
  sendQuery() {
    this.searchResults = null;
    this.pageIndex = 1;
    this.router.navigate([`/search/${this.searchQuery}`, { page: this.pageIndex }]);
  }
  previousPage() {
    this.pageIndex = this.pageIndex - 1;
    this.router.navigate([`/search/${this.searchQuery}`, { page: this.pageIndex }]);
  }
  nextPage() {
    this.pageIndex = this.pageIndex + 1;
    this.router.navigate([`/search/${this.searchQuery}`, { page: this.pageIndex }]);
  }
  goToPage(page: number): void {
    this.pageIndex = page;
    this.router.navigate([`/search/${this.searchQuery}`, { page: this.pageIndex }]);
  }
  ngOnInit() {
    // this.gitSearchService.gitSearch('angular').then( (response) => {
    //   this.searchResults = response;
    //   // alert('Total Libraries Found: ' + response.total_count);
    //   console.log('Total Libraries Found: ' + response.total_count);
    // }, (error) => {
    //   alert('Error: ' + error.statusText);
    // });
    // this.gitSearchService.gitSearchUser('tom').then( (response) => {
    //   // alert('"Total Users Found: ' + response.total_count);
    //   console.log('Total Users Found: ' + response.total_count);
    // }, (error) => {
    //   alert('Error: ' + error.statusText);
    // });
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.searchQuery = params.get('query');
      this.pageIndex = parseInt(params.get('page'), 10) || this.pageIndex;
      this.displayQuery = params.get('query');
      this.gitSearch();
    });
    this.route.data.subscribe((result) => {
      this.title = result.title;
    });
  }
}
