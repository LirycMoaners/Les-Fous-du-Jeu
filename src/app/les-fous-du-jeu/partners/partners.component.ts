import { Component, OnInit } from '@angular/core';
import { PartnerService } from '../shared/partner/partner.service';
import { Partner } from '../shared/partner/partner.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'lfdj-partners',
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
}
