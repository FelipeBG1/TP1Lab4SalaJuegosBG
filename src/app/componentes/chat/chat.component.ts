import { Component, OnInit } from '@angular/core';
import { Message } from './../../clases/Mensaje';
import { ChatService } from 'src/app/services/chat.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  mensajes : any;
  mensaje : Message;

  constructor(private chat : ChatService,public user : UserService) { 
    this.mensajes = chat.items,
    this.mensaje = {
      user: '',
      message: '',
      date: Date().toString(),
    }
  }

  sendMessage()
  {
    let hora = new Date();
    this.mensaje.user = this.user.userInfo;
    this.mensaje.date = hora.getHours() + ':' + hora.getMinutes();
    this.chat.sendMessage(this.mensaje);
    this.mensaje.message = '';
  }

  ngOnInit(): void {
  }

}
