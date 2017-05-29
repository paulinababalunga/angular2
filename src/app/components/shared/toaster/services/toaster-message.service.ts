import { Injectable } from '@angular/core';
import {ToasterService} from 'angular2-toaster';

@Injectable()
export class ToasterMessageService {

  constructor(private toasterService: ToasterService) {
  }

  showSuccess(message: string) {
    this.toasterService.pop({type: 'success', body: message});
  }

  showWarning(message: string) {
    this.toasterService.pop({type: 'warning', body: message});
  }

  showError(message: string) {
    this.toasterService.pop({type: 'error', body: message});
  }

  showInfo(message: string) {
    this.toasterService.pop({type: 'info', body: message});
  }
}
