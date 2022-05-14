import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  
  proyectos: any = [];
  lstRows: any = [];

  constructor() { }

  ngOnInit(): void {
    this.cargarProyectos();
    this.cargarRows();
  }

  cargarRows() {
    this.lstRows = this.splitArr(this.proyectos, 3)
  }

  splitArr(arr, size) {
     let newArr = [];
     for(let i = 0; i< arr.length; i += size) {
       newArr.push(arr.slice(i, i+size));
     }
     return newArr;
  }

  cargarProyectos() {
    this.proyectos = [{
      nombre: 'Proyecto 1',
      descripcion: 'Some quick example text to build on the card title and make up the bulk of the card'
    }, {
      nombre: 'Proyecto 2',
      descripcion: 'Some quick example text to build on the card title and make up the bulk of the card'
    }, {
      nombre: 'Proyecto 3',
      descripcion: 'Some quick example text to build on the card title and make up the bulk of the card'
    }, {
      nombre: 'Proyecto 4',
      descripcion: 'Some quick example text to build on the card title and make up the bulk of the card'
    }, {
      nombre: 'Proyecto 5',
      descripcion: 'Some quick example text to build on the card title and make up the bulk of the card'
    }, {
      nombre: 'Proyecto 6',
      descripcion: 'Some quick example text to build on the card title and make up the bulk of the card'
    }];
  }

}
