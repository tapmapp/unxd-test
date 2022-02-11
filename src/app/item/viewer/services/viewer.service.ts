import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class ViewerService {
  private preview!: string;
  private previewSubject = new Subject<string>();
  public preview$: Observable<string> = this.previewSubject.asObservable();

  constructor() {}

  public setPreviewImg(previewImgUrl: string): void {
    this.preview = previewImgUrl;
    this.previewSubject.next(this.preview);
  }
}
