import {
  Directive,
  OnInit,
  HostBinding,
  HostListener,
  Output,
  EventEmitter
} from '@angular/core';

import { DroppableService } from '../services/droppable.service';

@Directive({
  selector: '[appDropzone]'
})
export class DropzoneDirective implements OnInit {
  @HostBinding('class.dropzone-active') activated = false;
  @HostBinding('class.dropzone-entered') entered = false;

  @Output() drop = new EventEmitter<PointerEvent>();

  constructor(private droppableService: DroppableService) {}

  ngOnInit(): void {
    this.droppableService.dragStart$.subscribe(event =>
      this.onDragStart(event)
    );
    this.droppableService.dragEnd$.subscribe(event => this.onDragEnd(event));
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

  onDragStart(event: PointerEvent): void {
    this.activated = true;
  }

  onDragEnd(event: PointerEvent): void {
    if (this.entered) {
      console.log('dropped');
      this.drop.emit(event);
    }
    this.activated = false;
    this.entered = false;
  }
}
