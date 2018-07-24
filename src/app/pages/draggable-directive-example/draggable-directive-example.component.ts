import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-draggable-directive-example',
  templateUrl: './draggable-directive-example.component.html',
  styleUrls: ['./draggable-directive-example.component.css']
})
export class DraggableDirectiveExampleComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  onDragStart(): void {
    console.log('got drag start!');
  }

  onDragMove(event: PointerEvent): void {
    console.log(`got drag move! x: ${event.clientX}, y: ${event.clientY}`);
  }

  onDragEnd(): void {
    console.log('got drag end!');
  }
}
