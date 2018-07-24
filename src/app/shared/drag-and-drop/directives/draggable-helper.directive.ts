import {
  Directive,
  TemplateRef,
  ViewContainerRef,
  OnInit,
  OnDestroy
} from '@angular/core';
import {
  Overlay,
  OverlayRef,
  GlobalPositionStrategy
} from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';

import { DraggableDirective } from './draggable.directive';

@Directive({
  selector: '[appDraggableHelper]',
  exportAs: 'appDraggableHelper'
})
export class DraggableHelperDirective implements OnInit, OnDestroy {
  private overlayRef: OverlayRef;
  private positionStrategy = new GlobalPositionStrategy();
  private startPosition: any;

  constructor(
    private drggableDirective: DraggableDirective,
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
    private overlay: Overlay
  ) {}

  ngOnInit(): void {
    this.drggableDirective.dragStart.subscribe((event: PointerEvent) =>
      this.onDragStart(event)
    );
    this.drggableDirective.dragMove.subscribe((event: PointerEvent) =>
      this.onDragMove(event)
    );
    this.drggableDirective.dragEnd.subscribe(() => this.onDragEnd());

    // create overlay
    this.overlayRef = this.overlay.create({
      positionStrategy: this.positionStrategy
    });
  }

  private onDragStart(event: PointerEvent): void {
    // this.viewContainerRef.createEmbeddedView(this.templateRef);

    // determine relative start position
    const clientRect = this.drggableDirective.element.nativeElement.getBoundingClientRect();
    this.startPosition = {
      x: event.clientX - clientRect.left,
      y: event.clientY - clientRect.top
    };
  }

  private onDragMove(event: PointerEvent): void {
    // render the helper in the overlay
    if (!this.overlayRef.hasAttached()) {
      this.overlayRef.attach(
        new TemplatePortal(this.templateRef, this.viewContainerRef)
      );
    }

    // position the helper
    this.positionStrategy.left(`${event.clientX - this.startPosition.x}px`);
    this.positionStrategy.top(`${event.clientY - this.startPosition.y}px`);
    this.positionStrategy.apply();
  }

  private onDragEnd(): void {
    this.overlayRef.detach();
    // this.viewContainerRef.clear();
  }

  ngOnDestroy(): void {
    this.overlayRef.dispose();
  }
}
