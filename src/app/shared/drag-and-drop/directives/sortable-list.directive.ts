import {
  Directive,
  QueryList,
  ContentChildren,
  AfterContentInit,
  Output,
  EventEmitter
} from '@angular/core';

import { SortableDirective } from './sortable.directive';

export interface SortEvent {
  currentIndex: number;
  newIndex: number;
}

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
    const currentIndex = this.sortables.toArray().indexOf(sortable);

    const previousRect =
      currentIndex > 0 ? this.clientRects[currentIndex - 1] : undefined;
    const nextRect =
      currentIndex < this.clientRects.length - 1
        ? this.clientRects[currentIndex + 1]
        : undefined;

    if (
      previousRect &&
      event.clientY < previousRect.top + previousRect.height / 2
    ) {
      this.sort.emit({
        currentIndex: currentIndex,
        newIndex: currentIndex - 1
      });
    } else if (nextRect && event.clientY > nextRect.top + nextRect.height / 2) {
      this.sort.emit({
        currentIndex: currentIndex,
        newIndex: currentIndex + 1
      });
    }
  }
}
