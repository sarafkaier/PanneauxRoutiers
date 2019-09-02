import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'liste-panneaux', loadChildren: './liste-panneaux/liste-panneaux.module#ListePanneauxPageModule' },
  { path: 'categorie', loadChildren: './categorie/categorie.module#CategoriePageModule' },
  { path: 'quiz-home', loadChildren: './quiz-home/quiz-home.module#QuizHomePageModule' },
  { path: 'quiz-question', loadChildren: './quiz-question/quiz-question.module#QuizQuestionPageModule' },
  { path: 'quiz-result', loadChildren: './quiz-result/quiz-result.module#QuizResultPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
