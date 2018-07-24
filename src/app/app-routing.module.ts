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
    path: 'moveable-directive-example',
    loadChildren:
      './pages/moveable-directive-example/moveable-directive-example.module#MoveableDirectiveExampleModule'
  },
  {
    path: 'moveable-area-example',
    loadChildren:
      './pages/moveable-area-example/moveable-area-example.module#MoveableAreaExampleModule'
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
