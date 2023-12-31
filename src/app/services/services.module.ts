import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { ServicesDocsComponent } from './services-docs.component';

const routes = [
  {
    path: '',
    component: ServicesDocsComponent
  }
];


@NgModule({
  declarations: [
    ServicesDocsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ServicesModule { }
