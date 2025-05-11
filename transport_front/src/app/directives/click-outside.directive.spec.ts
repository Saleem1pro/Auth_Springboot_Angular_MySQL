import { ClickOutsideDirective } from './click-outside.directive';
import { ElementRef } from '@angular/core';

describe('ClickOutsideDirective', () => {
  it('should create an instance', () => {
    // Crée un mock ElementRef
    const mockElementRef = { nativeElement: {} } as ElementRef;
    
    // Fournit le mock au constructeur
    const directive = new ClickOutsideDirective(mockElementRef);
    expect(directive).toBeTruthy();
  });
});