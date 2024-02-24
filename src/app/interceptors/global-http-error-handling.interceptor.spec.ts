import { TestBed } from '@angular/core/testing';

import { GlobalHttpErrorHandlingInterceptor } from './global-http-error-handling.interceptor';

describe('GlobalHttpErrorHandlingInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      GlobalHttpErrorHandlingInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: GlobalHttpErrorHandlingInterceptor = TestBed.inject(GlobalHttpErrorHandlingInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
