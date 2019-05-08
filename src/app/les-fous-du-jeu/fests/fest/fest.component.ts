import { Component, OnInit } from '@angular/core';
import { Festival } from '../../shared/festival/festival.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FestivalService } from '../../shared/festival/festival.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'lfdj-fest',
  templateUrl: './fest.component.html',
  styleUrls: ['./fest.component.scss']
})
export class FestComponent implements OnInit {
  public apiDomain: string;
  public festival: Festival;

  constructor(
    private route: ActivatedRoute,
    private festivalService: FestivalService,
    private router: Router
  ) { }

  ngOnInit() {
    this.apiDomain = environment.apiDomain;
    const festivalId: string = this.route.snapshot.paramMap.get('id');

    if (festivalId) {
      this.festivalService.getFestival(festivalId).subscribe((festival: Festival) => this.festival = festival);
    } else {
      this.router.navigate(['/home']);
    }
  }
}
