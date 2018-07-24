import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDraggableHelper]',
  exportAs: 'appDraggableHelper'
})
export class DraggableHelperDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {}

  onDragStart(): void {
    this.viewContainerRef.createEmbeddedView(this.templateRef);
  }

  onDragEnd(): void {
    this.viewContainerRef.clear();
  }
}
