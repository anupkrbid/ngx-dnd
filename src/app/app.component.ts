import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navigations = [
    {
      url: '/draggable-directive-example',
      title: 'Draggable Directive'
    },
    {
      url: '/movable-directive-example',
      title: 'Movable Directive'
    },
    {
      url: '/movable-area-example',
      title: 'Movable Area'
    },
    {
      url: '/advanced-positioning-example',
      title: 'Advanced Positioning'
    },
    {
      url: '/sortable-behaviour-example',
      title: 'Sortable Behaviour'
    },
    {
      url: '/droppable-behaviour-example',
      title: 'Droppable Behaviour'
    }
  ];
}
