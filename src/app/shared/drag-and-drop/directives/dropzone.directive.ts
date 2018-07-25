import {
  Directive,
  OnInit,
  HostBinding,
  HostListener,
  Output,
  EventEmitter,
  SkipSelf
} from '@angular/core';

import { DroppableService } from '../services/droppable.service';

@Directive({
  selector: '[appDropzone]',
  providers: [DroppableService]
})
export class DropzoneDirective implements OnInit {
  @HostBinding('class.dropzone-active') activated = false;
  @HostBinding('class.dropzone-entered') entered = false;

  @Output() drop = new EventEmitter<PointerEvent>();
  @Output() remove = new EventEmitter<PointerEvent>();

  constructor(
    @SkipSelf() private globalDroppableService: DroppableService,
    private localDroppableService: DroppableService
  ) {}

  ngOnInit(): void {
    // Global Service Instance
    this.globalDroppableService.dragStart$.subscribe(event =>
      this.onGlobalDragStart(event)
    );
    this.globalDroppableService.dragEnd$.subscribe(event =>
      this.onGlobalDragEnd(event)
    );

    // Local Service Instance
    this.localDroppableService.dragStart$.subscribe(event =>
      this.onLocalDragStart(event)
    );
    this.localDroppableService.dragEnd$.subscribe(event =>
      this.onLocalDragEnd(event)
    );
  }

  @HostListener('pointerenter')
  onPointerEnter(): void {
    if (!this.activated) {
      return;
    }
    this.entered = true;
  }

  @HostListener('pointerleave')
  onPointerLeave(): void {
    if (!this.activated) {
      return;
    }
    this.entered = false;
  }

  onGlobalDragStart(event: PointerEvent): void {
    this.activated = true;
  }

  onGlobalDragEnd(event: PointerEvent): void {
    if (this.entered) {
      console.log('dropped');
      this.drop.emit(event);
    }
    this.activated = false;
    this.entered = false;
  }

  onLocalDragStart(event: PointerEvent): void {
    this.activated = true;
    this.entered = true;
  }

  onLocalDragEnd(event: PointerEvent): void {
    if (!this.entered) {
      this.remove.emit(event);
    }
    this.activated = false;
    this.entered = false;
  }
}
