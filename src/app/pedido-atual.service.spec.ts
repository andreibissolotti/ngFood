import { TestBed } from '@angular/core/testing';

import { PedidoAtualService } from './pedido-atual.service';

describe('PedidoAtualService', () => {
  let service: PedidoAtualService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PedidoAtualService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
