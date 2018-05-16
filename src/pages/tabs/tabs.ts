import { Component } from '@angular/core';

import { ScannerPage } from '../scanner/scanner';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { CommentariesPage } from '../commentaries/commentaries';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ScannerPage;
  tab3Root = ContactPage;
  tab4Root = CommentariesPage;


  constructor() {

  }
}
