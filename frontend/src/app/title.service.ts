// title.service.ts
import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  constructor(private title: Title) {}

  setTitle(newTitle: string) {
    this.title.setTitle(newTitle);
  }
}

// Define the decorator function
export function SetTitle(title: string) {
  return function (constructor: any) {
    const original = constructor.prototype.ngOnInit;

    constructor.prototype.ngOnInit = function () {
      const titleService = (this as any).titleService as TitleService;
      titleService.setTitle(title);

      if (original) {
        original.apply(this);
      }
    };
  };
}
