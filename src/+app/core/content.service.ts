import { Injectable } from '@angular/core';

import Record from './record';

@Injectable()
export class ContentService {
    constructor() { }
    getRecords(page:number, limit:number):Promise<Record[]> {
        return Promise.resolve([]);
    }
    getRecord(id:string):Promise<Record> {
        return Promise.resolve(<Record>{id: 'id1', values: [{name: 'test'}]});
    }
}