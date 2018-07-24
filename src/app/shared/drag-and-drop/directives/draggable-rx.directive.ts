import {
  Directive,
  EventEmitter,
  HostBinding,
  Output,
  OnInit,
  HostListener
} from '@angular/core';
import { Subject } from 'rxjs';
import { switchMap, takeUntil, repeat, take } from 'rxjs/operators';

@Directive({
  selector: '[appDraggableRx]'
})
export class DraggableRxDirective implements OnInit {
  @Output() dragStart = new EventEmitter<PointerEvent>();
  @Output() dragMove = new EventEmitter<PointerEvent>();
  @Output() dragEnd = new EventEmitter<PointerEvent>();
  @HostBinding('class.draggable') draggable = true;
  @HostBinding('class.dragging') dragging = false;
  private pointerDown = new Subject<PointerEvent>();
  private pointerMove = new Subject<PointerEvent>();
  private pointerUp = new Subject<PointerEvent>();

  constructor() {}

  @HostListener('pointerdown', ['$event'])
  onPointerDown(event: PointerEvent): void {
    this.pointerDown.next(event);
  }

  @HostListener('document:pointermove', ['$event'])
  onPointerMove(event: PointerEvent): void {
    this.pointerMove.next(event);
  }

  @HostListener('document:pointerup', ['$event'])
  onPointerUp(event: PointerEvent): void {
    this.pointerUp.next(event);
  }

  ngOnInit(): void {
    // stream of drag start
    const dragStart$ = this.pointerDown.asObservable();

    // stream of drag moves
    const dragMove$ = this.pointerDown.pipe(
      switchMap(() => this.pointerMove),
      takeUntil(this.pointerUp),
      repeat()
    );

    // another way
    // const dragMove$ = this.pointerDown.pipe(
    //   switchMap(() => this.pointerMove.pipe(takeUntil(this.pointerUp)))
    // );

    // stream of drag end
    const dragEnd$ = this.pointerDown.pipe(
      switchMap(() => this.pointerUp.pipe(take(1)))
    );

    // another way
    // const dragEnd$ = this.pointerDown.pipe(
    //   switchMap(() => this.pointerUp),
    //   take(1),
    //   repeat()
    // );

    dragStart$.subscribe(event => {
      this.dragging = true;
      this.dragStart.emit(event);
    });

    dragMove$.subscribe(event => this.dragMove.emit(event));

    dragEnd$.subscribe(event => {
      this.dragging = false;
      this.dragEnd.emit(event);
    });
  }
}
