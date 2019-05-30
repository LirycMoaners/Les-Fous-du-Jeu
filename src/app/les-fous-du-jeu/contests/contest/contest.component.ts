import { Component, OnInit } from '@angular/core';
import { Contest } from '../../shared/contest/contest.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ContestService } from '../../shared/contest/contest.service';
import { environment } from 'src/environments/environment';
import { flatMap } from 'rxjs/operators';
import { PrizeService } from '../../shared/contest/prize/prize.service';
import { Prize } from '../../shared/contest/prize/prize.model';

@Component({
  selector: 'lfdj-contest',
  templateUrl: './contest.component.html',
  styleUrls: ['./contest.component.scss']
})
export class ContestComponent implements OnInit {
  public apiDomain: string;
  public contest: Contest;
  public prizes: Prize[];

  constructor(
    private route: ActivatedRoute,
    private contestService: ContestService,
    private prizeService: PrizeService,
    private router: Router
  ) { }

  ngOnInit() {
    this.apiDomain = environment.apiDomain;
    const contestId: string = this.route.snapshot.paramMap.get('id');

    if (contestId) {
      this.contestService.getContest(contestId).pipe(
        flatMap((contest: Contest) => {
          this.contest = contest;
          return this.prizeService.getPrizes(this.contest.prizesId);
        })
      ).subscribe(prizes => this.prizes = prizes);
    } else {
      this.router.navigate(['/home']);
    }
  }
}
