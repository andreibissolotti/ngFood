import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface item {
  categoria: string,
  descricao: string,
  preco: number
}

const urlBase = "http://localhost:3000";

@Injectable({
  providedIn: 'root'
})

export class PedidoAtualService {

  constructor (private http: HttpClient){}

  pedido: item[] = []
  categorias: string[]

  listarItens(){
    return this.http.get<item[]>(`${urlBase}/cardapio`);
  }
  
  addItem(item: item){
    this.pedido.push(item);
  }

  delItem(item: item){
    const index = this.pedido.indexOf(item);
    if (index >= 0){
      this.pedido.splice(index,1);
    }
  }

  limparPedido(){
    this.pedido=[];
  }

  precoPedido(){
    let preco = 0;
    this.pedido.forEach(function(e){preco += e.preco});
    return preco;
  }

  contItem(item: item){
    let sum = 0;
    this.pedido.forEach(function(e){
      if (e == item){
        sum++
      }
    })
    return sum
  }
}
