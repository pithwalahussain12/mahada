import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preivew-pdf',
  templateUrl: './preivew-pdf.component.html',
  styleUrls: ['./preivew-pdf.component.css']
})
export class PreivewPdfComponent implements OnInit {

  constructor() { }

  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }

  ngOnInit(): void {
  }

}
