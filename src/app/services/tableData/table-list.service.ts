import {Injectable} from '@angular/core';

@Injectable()
export class TableListService {

  getTableData() {
    return DATA;
  }
}

const DATA = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz"
  },
  {
    id: 2,
    name: "Leanne Sui",
    username: "Bret",
    email: "Sincere@april.biz"
  },
  {
    id: 3,
    name: "Sander Graham",
    username: "Bret",
    email: "Sincere@april.biz"
  },
  {
    id: 4,
    name: "Bram Bret",
    username: "Bret",
    email: "Sincere@april.biz"
  },
  {
    id: 5,
    name: "Nicholas DuBuque",
    username: "Nicholas.Stanton",
    email: "Rey.Padberg@rosamond.biz"
  }
];
