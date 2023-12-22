import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-create-advertisment',
  templateUrl: './create-advertisment.component.html',
  styleUrls: ['./create-advertisment.component.css']
})
export class CreateAdvertismentComponent implements OnInit {

  constructor() { }

  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }


  ngOnInit(): void {
  }

}
