import { Component, OnInit, ViewChild } from '@angular/core';
import { FestivalService } from '../../shared/festival/festival.service';
import { Festival } from '../../shared/festival/festival.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'lfdj-fest-list',
  templateUrl: './fest-list.component.html',
  styleUrls: ['./fest-list.component.scss']
})
export class FestListComponent implements OnInit {
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
