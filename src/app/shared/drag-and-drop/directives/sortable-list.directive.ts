import {
  Directive,
  QueryList,
  ContentChildren,
  AfterContentInit,
  Output,
  EventEmitter
} from '@angular/core';

import { SortableDirective } from './sortable.directive';
import { createDirectiveInstance } from '@angular/core/src/view/provider';

export interface SortEvent {
  currentIndex: number;
  newIndex: number;
}

const distance = (rectA: ClientRect, rectB: ClientRect): number =>
  Math.sqrt(
    Math.pow(rectB.top - rectA.top, 2) + Math.pow(rectB.left - rectA.left, 2)
  );

@Directive({
  selector: '[appSortableList]'
})
export class SortableListDirective implements AfterContentInit {
  @ContentChildren(SortableDirective) sortables: QueryList<SortableDirective>;
  @Output() sort = new EventEmitter<SortEvent>();
  private clientRects: ClientRect[];

  constructor() {}

  ngAfterContentInit() {
    // Called after ngOnInit when the component's or directive's content has been initialized.
    this.sortables.forEach(sortable => {
      sortable.dragStart.subscribe(() => this.measureClientRects());
      sortable.dragMove.subscribe(event => this.detectSorting(sortable, event));
    });
  }

  private measureClientRects() {
    this.clientRects = this.sortables.map(sortable =>
      sortable.element.nativeElement.getBoundingClientRect()
    );
  }

  private detectSorting(sortable: SortableDirective, event: PointerEvent) {
    // get all the client rects
    // sort them by distance to current sortable
    // find rectangle that we need to swap with
    // stop
    const currentIndex = this.sortables.toArray().indexOf(sortable);
    const currentRect = this.clientRects[currentIndex];

    const sorted = this.clientRects
      .slice()
      .sort(
        (rectA, rectB) =>
          // sort by distance to current rect
          distance(rectA, currentRect) - distance(rectB, currentRect)
      )
      .some(rect => {
        // find first rect tht we need to swap with
        if (rect === currentRect) {
          return false;
        }

        const isHorizontal = rect.top === currentRect.top;
        const isBefore = isHorizontal
          ? rect.left < currentRect.left
          : rect.top < currentRect.top;

        let moveBack = false;
        let moveForward = false;

        if (isHorizontal) {
          moveBack = isBefore && event.clientX < rect.left + rect.width / 2;
          moveForward = !isBefore && event.clientX > rect.left + rect.width / 2;
        } else {
          moveBack = isBefore && event.clientY < rect.top + rect.height / 2;
          moveForward = !isBefore && event.clientY > rect.top + rect.height / 2;
        }

        if (moveBack || moveForward) {
          this.sort.emit({
            currentIndex: currentIndex,
            newIndex: this.clientRects.indexOf(rect)
          });
          return true;
        }
        return false;
      });
  }
}
