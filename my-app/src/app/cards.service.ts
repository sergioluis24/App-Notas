import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Item { title: string, fecha: any, contenido: string }

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  notas:any[]
  //Traer un solo card
  // private itemDoc: AngularFirestoreDocument<Item>;
  // item: Observable<Item>;
  //Leer todas las cards
  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Item>('Notas');
    this.items = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Item;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
    // this.itemDoc = afs.doc<Item>('Notas/1');
    // this.item = this.itemDoc.valueChanges();
  }
  readNotas(){
    return this.items
  }
  addItem(item:Item) {
    this.itemsCollection.add(item);
  }
}
