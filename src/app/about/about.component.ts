import { Component, OnInit } from '@angular/core';
import { appLayout } from '../app.config';

import { UiCard, UiService } from '@kikstart/ui';
import { UiLink } from '@kikstart/ui';
import { UiBrand } from '@kikstart/ui';

@Component({
  template: `
    <ui-hero [brand]="brand" [description]="brand.description" [link]="link" [cards]="cards"></ui-hero>
  `,
})
export class AboutComponent implements OnInit {
  brand: UiBrand = { ...appLayout.brand, size: 'lg' };
  link: UiLink = {
    path: '/docs',
    label: 'Learn more',
    iconAfter: 'ml-2 fa fa-angle-double-right',
  };
  cards: UiCard[] = [];
  constructor(private ui: UiService) {}

  ngOnInit() {
    this.ui.setMetaData({ title: 'Home' });
  }
}
