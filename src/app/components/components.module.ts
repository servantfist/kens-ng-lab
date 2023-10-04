import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DateUtilsComponent } from '../services/date-utils/date-utils.component';
import { AccordionComponent } from './accordion/accordion.component';
import { PomodoroComponent } from './pomodoro/pomodoro.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { StarRatingsComponent } from './star-ratings/star-ratings.component';
import { CardModule } from '../common/card/card.module';
import { ComponentDocsComponent } from './component-docs.component';
import { TopOfPageComponent } from './top-of-page/top-of-page.component';
import { LoaderComponent } from './loader/loader.component';
import { CcInputComponent } from './cc-input/cc-input.component';

const routes = [
  {
    path: '',
    component: ComponentDocsComponent
  }
];


@NgModule({
  declarations: [
    ComponentDocsComponent,
    AccordionComponent,
    ProgressBarComponent,
    DateUtilsComponent,
    StarRatingsComponent,
    PomodoroComponent,
    TopOfPageComponent,
    LoaderComponent,
    CcInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    CardModule
  ],
  exports: [
  ]
})
export class ComponentsModule { }
