import { Component, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Festival } from 'src/app/shared/models/festival.model';
import { FestivalService } from 'src/app/core/http-services/festival.service';

@Component({
  selector: 'app-fests',
  templateUrl: './fests.component.html',
  styleUrls: ['./fests.component.scss']
})
export class FestsComponent implements OnInit {
  public apiDomain: string;
  public festivals: Festival[] = [];

  constructor(
    private festivalService: FestivalService
  ) { }

  ngOnInit() {
    this.apiDomain = environment.apiDomain;
    this.festivalService.getFestivals().subscribe((festivals: Festival[]) => {
      this.festivals = festivals;
    });
  }
}
