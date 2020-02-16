import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Contest } from 'src/app/shared/models/contest.model';
import { ContestService } from 'src/app/core/http-services/contest.service';

@Component({
  selector: 'app-contests',
  templateUrl: './contests.component.html',
  styleUrls: ['./contests.component.scss']
})
export class ContestsComponent implements OnInit {
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
