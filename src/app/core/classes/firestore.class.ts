import { AngularFirestore, AngularFirestoreCollection, QueryFn } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export abstract class Firestore<C extends { id: string}> {

    protected collection: AngularFirestoreCollection<C>;

    constructor(protected db: AngularFirestore) {}

    protected setCollection(path: string, queryFn?: QueryFn): void {
        this.collection = path ? this.db.collection(path, queryFn) : null;
    }

    private setItem(item: C, operation: 'set' | 'update'): Promise<C> {
        return this.collection.doc<C>(item.id)
        [operation](item).then(() => item);
    }

    getAll(): Observable<C[]> {
        return this.collection.valueChanges();
    }

    get(id: string): Observable<C> {
        return this.collection.doc<C>(id).valueChanges();
    }

    create(item: C): Promise<C> {
        item.id = this.db.createId();
        return this.setItem(item, 'set');
    }

    update(item: C): Promise<C> {
        return this.setItem(item, 'update');
    }

    delete(item: C): Promise<void> {
        return this.collection.doc<C>(item.id).delete();
    }
}
