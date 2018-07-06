import { Component, OnInit } from '@angular/core';
import { GitSearchService } from './git-search.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GitSearchService]
})
export class AppComponent implements OnInit {
  title = 'GitHub Browser';
  constructor(private gitSearchService: GitSearchService) {

  }
  ngOnInit() {
    // this.gitSearchService.gitSearch('angular').then( (response) => {
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
  }
}
