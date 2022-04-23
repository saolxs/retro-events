import { Component } from '@angular/core';

import { products } from '../explore';

@Component({
  selector: 'app-explore-list',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css'],
})
export class ProductListComponent {
  explore = explore;

  share() {
    window.alert('The product has been shared!');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
