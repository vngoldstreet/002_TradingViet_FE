import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonNewsComponent } from './common-news/common-news.component';
import { CotCftcComponent } from './cot-cftc/cot-cftc.component';
import { ExpertIndicatorComponent } from './expert-indicator/expert-indicator.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NewDetailComponent } from './new-detail/new-detail.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    data: {
      title: 'HomepageComponent',
      title_element: 'HomepageComponent',
      description:
        'HomepageComponent',
      keywords:
        'HomepageComponent',
      image: '',
      image_alt:
        'HomepageComponent',
    },
  },
  {
    path: 'bao-cao-cot-cftc',
    component: CotCftcComponent,
    data: {
      title: 'CotCftcComponent',
      title_element: 'CotCftcComponent',
      description:
        'CotCftcComponent',
      keywords:
        'CotCftcComponent',
      image: '',
      image_alt:
        'CotCftcComponent',
    },
  },
  {
    path: 'expert-advisor-indicator',
    component: ExpertIndicatorComponent,
    data: {
      title: 'ExpertIndicatorComponent',
      title_element: 'ExpertIndicatorComponent',
      description:
        'ExpertIndicatorComponent',
      keywords:
        'ExpertIndicatorComponent',
      image: '',
      image_alt:
        'ExpertIndicatorComponent',
    },
  },
  {
    path: 'tin-tuc',
    component: CommonNewsComponent,
    data: {
      title: 'CommonNewsComponent',
      title_element: 'CommonNewsComponent',
      description:
        'CommonNewsComponent',
      keywords:
        'CommonNewsComponent',
      image: '',
      image_alt:
        'CommonNewsComponent',
    },
  },
  {
    path: 'tin-tuc/:url',
    component: NewDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
