import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PipesDocsComponent } from './pipes-docs.component';
import { TruncatePipe } from './truncate.pipe';
import { CardModule } from '../common/card/card.module';
import { CcFormatPipe } from './cc-format.pipe';

const routes = [
  {
    path: '',
    component: PipesDocsComponent
  }
];


@NgModule({
  declarations: [
    PipesDocsComponent,
    TruncatePipe,
    CcFormatPipe,
  ],
  imports: [
    CommonModule,
    CardModule,
    RouterModule.forChild(routes)
  ]
})
export class PipesModule { }
