import { Component, OnInit } from '@angular/core';
import { SocketService } from './services/socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  constructor(
    private SocketService: SocketService,
  ){}
  ngOnInit() {
    console.log('test');
    fetch('/api/test').then(async(result)=>{
      const body = await result.body;
      console.log('body:', body)
    });
  }
}
