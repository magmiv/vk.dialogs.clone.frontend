import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialogs-list',
  templateUrl: './dialogs-list.component.html',
  styleUrls: ['./dialogs-list.component.scss']
})
export class DialogsListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(123);
  }

}
