import { Component, OnInit } from '@angular/core';
import { ImportService } from '../import.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private importservice: ImportService) { }

  server;

  ngOnInit(): void {
    this.importservice.getData().subscribe((response: any) => {
      this.server = response.data.children;
      console.log('response', response);

    })

  }

}
