import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { flatMap } from 'rxjs/operators';
import { Contest } from 'src/app/shared/models/contest.model';
import { Prize } from 'src/app/shared/models/prize.model';
import { ContestService } from 'src/app/core/http-services/contest.service';
import { PrizeService } from 'src/app/core/http-services/prize.service';

@Component({
  selector: 'app-contest',
  templateUrl: './contest.component.html',
  styleUrls: ['./contest.component.scss']
})
export class ContestComponent implements OnInit {
  public apiDomain: string;
  public contest: Contest;
  public prizes: Prize[];
  public pictures: string[] = [];

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
      ).subscribe(prizes => {
        this.prizes = prizes;
        this.pictures = [...this.prizes.map(prize => prize.pictureLarge), ...this.contest.picturesLarge];
      });
    } else {
      this.router.navigate(['/home']);
    }
  }
}
