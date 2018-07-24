import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'draggable-directive-example' },
  {
    path: 'draggable-directive-example',
    loadChildren:
      './pages/draggable-directive-example/draggable-directive-example.module#DraggableDirectiveExampleModule'
  },
  {
    path: 'movable-directive-example',
    loadChildren:
      './pages/movable-directive-example/movable-directive-example.module#MovableDirectiveExampleModule'
  },
  {
    path: 'movable-area-example',
    loadChildren:
      './pages/movable-area-example/movable-area-example.module#MovableAreaExampleModule'
  },
  {
    path: 'advanced-positioning-example',
    loadChildren:
      './pages/advanced-positioning-example/advanced-positioning-example.module#AdvancedPositioningExampleModule'
  },
  {
    path: 'sortable-behaviour-example',
    loadChildren:
      './pages/sortable-behaviour-example/sortable-behaviour-example.module#SortableBehaviourExampleModule'
  },
  {
    path: 'droppable-behaviour-example',
    loadChildren:
      './pages/droppable-behaviour-example/droppable-behaviour-example.module#DroppableBehaviourExampleModule'
  },
  { path: '**', redirectTo: 'draggable-directive-example' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
