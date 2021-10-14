import { Component, OnInit } from '@angular/core';
import { item, PedidoAtualService } from '../pedido-atual.service';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent implements OnInit {

  cardapio: item[]
  categorias: string[] = []
  
  constructor(public ps: PedidoAtualService) { }

  ngOnInit(): void {
    this.ps.listarItens().subscribe(cardapio => {
      this.cardapio=cardapio
      
      for (let i=0; i < cardapio.length; i++){
        if(!this.categorias.includes(cardapio[i].categoria)){
          this.categorias.push(cardapio[i].categoria)
        }
      }
    })
  }

  cardapioPorCategoria(categoria: string){
    let cardapioPorCategoria: item[] = []
    this.cardapio.forEach(function(e){
      if(e.categoria == categoria){
        cardapioPorCategoria.push(e)
        cardapioPorCategoria.sort((a,b)=>{
          return a.preco-b.preco
        })
      }
    })
    return cardapioPorCategoria
  }
}
