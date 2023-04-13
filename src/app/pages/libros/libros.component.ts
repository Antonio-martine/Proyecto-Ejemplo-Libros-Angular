import { Component, OnInit } from '@angular/core';
import { Libros } from 'src/app/models/libro';
import { LibroService } from 'src/app/service/libro.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit{

      //Componentes
      libros: Libros[] = [];
      libro = new Libros();

  constructor(private LibroService:LibroService){

  }


  ngOnInit(): void {
    this.LibroService.getLibros().subscribe(data =>{
      this.libros = data.map(doc =>{
        return{
          ...doc.payload.doc.data() as Libros,
          id:doc.payload.doc.id
        }
      })
    })
  }
  //Agregar un método para insertar un libro desde el formulario
  insertarLibro(){
    this.LibroService.addLibro(this.libro);
    this.libro = new Libros();
  }
  //Método para seleccionar un libro de la tabl
  selectLibro(libroSeleccionado:Libros){
    this.libro = libroSeleccionado;
  }

  //Método para actulizar un libro
  updateLibro(){
    this.LibroService.updateLibro(this.libro);
    this.libro = new Libros();
  }

  //Metodo para eliminar un libro
  deleteLibro(id:string){
    this.LibroService.deleteLibro(id);
    this.libro = new Libros();
  }
}






