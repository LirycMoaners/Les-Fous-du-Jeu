import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Partner } from 'src/app/shared/models/partner.model';
import { PartnerService } from 'src/app/core/http-services/partner.service';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {
  public partners: Partner[] = [];
  public apiDomain: string;

  constructor(
    private partnerService: PartnerService
  ) { }

  ngOnInit() {
    this.apiDomain = environment.apiDomain;
    this.partnerService.getPartners().subscribe(partners => this.partners = partners);
  }

  navigateToWebsite(url: string) {
    const win = window.open(url, '_blank');
    win.focus();
  }
}
