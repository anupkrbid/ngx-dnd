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
      url: '/moveable-directive-example',
      title: 'Moveable Directive'
    },
    {
      url: '/moveable-area-example',
      title: 'Moveable Area'
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
