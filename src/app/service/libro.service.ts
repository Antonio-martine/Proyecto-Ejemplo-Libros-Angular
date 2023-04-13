import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import { Libros } from '../models/libro';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  constructor(private firestore:AngularFirestore) { }

  //Metodo para obtner todos los documentos de la coleccion
  getLibros(){
    return this.firestore.collection('libro').snapshotChanges();
  }

  //Metodo para añadir un nuevo documento
  addLibro(libro:Libros){
    return this.firestore.collection('libro').add(Object.assign({},libro));
  }

  //Metodo para actualizar un documento 
  updateLibro(libro:Libros){
    this.firestore.doc('libro/'+libro.id).update(libro);
  }

  /*Metodo para eliminar un documento*/
  deleteLibro(libroId:string){
    this.firestore.doc('libro/'+libroId).delete();
  }
}

