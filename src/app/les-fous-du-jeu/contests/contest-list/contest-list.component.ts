import { Component, OnInit } from '@angular/core';
import { ContestService } from '../../shared/contest/contest.service';
import { Contest } from '../../shared/contest/contest.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'lfdj-contest-list',
  templateUrl: './contest-list.component.html',
  styleUrls: ['./contest-list.component.scss']
})
export class ContestListComponent implements OnInit {
  public apiDomain: string;
  public contests: Contest[] = [];

  constructor(
    private contestService: ContestService
  ) { }

  ngOnInit() {
    this.apiDomain = environment.apiDomain;
    this.contestService.getContests().subscribe((contests: Contest[]) => {
      this.contests = contests;
    });
  }
}
