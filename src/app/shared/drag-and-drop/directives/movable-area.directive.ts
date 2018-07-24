import {
  AfterContentInit,
  ContentChildren,
  Directive,
  ElementRef,
  QueryList
} from '@angular/core';
import { Subscription } from 'rxjs';

import { MovableDirective } from './movable.directive';

interface Boundey {
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
  private boundry: Boundey;
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
    console.log('measure');
    // need: bounding rect of the area + bounding rect of movable
    const viewRect: ClientRect = this.element.nativeElement.getBoundingClientRect();
    const movableClientRect: ClientRect = movable.element.nativeElement.getBoundingClientRect();
    this.boundry = {
      minX: viewRect.left - movableClientRect.left + movable.position.x,
      maxX: viewRect.right - movableClientRect.right + movable.position.x,
      minY: viewRect.top - movableClientRect.top + movable.position.y,
      maxY: viewRect.bottom - movableClientRect.bottom + movable.position.y
    };
  }

  maintainBoundaries(movable: MovableDirective) {
    movable.position.x = Math.max(this.boundry.minX, movable.position.x);
    movable.position.x = Math.min(this.boundry.maxX, movable.position.x);
    movable.position.y = Math.max(this.boundry.minY, movable.position.y);
    movable.position.y = Math.min(this.boundry.maxY, movable.position.y);
  }
}
