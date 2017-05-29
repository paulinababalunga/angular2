/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ToasterMessageService } from './toaster-message.service';

describe('ToasterMessageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToasterMessageService]
    });
  });

  it('should ...', inject([ToasterMessageService], (service: ToasterMessageService) => {
    expect(service).toBeTruthy();
  }));
});
