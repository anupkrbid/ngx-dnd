import {
  AfterContentInit,
  ContentChildren,
  Directive,
  ElementRef,
  QueryList
} from '@angular/core';
import { Subscription } from 'rxjs';

import { MovableDirective } from './movable.directive';

interface Boundary {
  minX: number;
  maxX: number;
  minY: number;
  maxY: number;
}

@Directive({
  selector: '[appMovableArea]'
})
export class MovableAreaDirective implements AfterContentInit {
  @ContentChildren(MovableDirective) movables: QueryList<MovableDirective>;
  private boundary: Boundary;
  private subscriptions: Subscription[] = [];

  constructor(private element: ElementRef) {}

  ngAfterContentInit(): void {
    this.movables.changes.subscribe(() => {
      this.subscriptions.forEach(s => s.unsubscribe());

      this.movables.forEach(movable => {
        this.subscriptions.push(
          movable.dragStart.subscribe(() => this.measureBoundaries(movable))
        );
        this.subscriptions.push(
          movable.dragMove.subscribe(() => this.maintainBoundaries(movable))
        );
      });
    });
    this.movables.notifyOnChanges();
  }

  measureBoundaries(movable: MovableDirective) {
    // need: bounding rect of the area + bounding rect of movable
    const viewRect: ClientRect = this.element.nativeElement.getBoundingClientRect();
    const movableClientRect: ClientRect = movable.element.nativeElement.getBoundingClientRect();
    this.boundary = {
      minX: viewRect.left - movableClientRect.left + movable.position.x,
      maxX: viewRect.right - movableClientRect.right + movable.position.x,
      minY: viewRect.top - movableClientRect.top + movable.position.y,
      maxY: viewRect.bottom - movableClientRect.bottom + movable.position.y
    };
  }

  maintainBoundaries(movable: MovableDirective) {
    movable.position.x = Math.max(this.boundary.minX, movable.position.x);
    movable.position.x = Math.min(this.boundary.maxX, movable.position.x);
    movable.position.y = Math.max(this.boundary.minY, movable.position.y);
    movable.position.y = Math.min(this.boundary.maxY, movable.position.y);
  }
}
