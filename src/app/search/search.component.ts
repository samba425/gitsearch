import { Component, OnInit } from '@angular/core';
import { GitService } from '../git.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 searchList;
 spinner = false;
  constructor(private gitSearch: GitService) { }

  search(data) {
    this.spinner = true;
    this.searchList = '';
    this.gitSearch.searchUser(data.value.user).subscribe((res) => {
      if(res['items'].length) {
        this.searchList = res;
      }
    this.spinner = false
    },err => console.log('error',err))
  }

  ngOnInit() {
  }

}
