import { Component, OnInit } from '@angular/core';
import { item, PedidoAtualService } from '../pedido-atual.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  constructor(public ps: PedidoAtualService) { }

  ngOnInit(){
  }

  obterListaPedidos(){
    let listaPedido: item[] = []
    this.ps.pedido.forEach(function(e){
      if (!listaPedido.includes(e)){
        listaPedido.push(e);
      }
    })
    return listaPedido;
  }

}
