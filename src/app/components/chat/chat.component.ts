import { Component, OnInit } from '@angular/core';
import { Chats } from 'src/app/interface';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  
  constructor() { /* TODO document why this constructor is empty */  }

  message!: string

  chat_history: Array<Chats> = [
    {
      username: "Guest",
      content: "You can find out the ID of an image by looking at the Picsum-ID header, or the User Comment field in the EXIF metadata.",
      time:"2022-10-10 15:43:22"
    },
    {
      username: "Guest",
      content: "You can find out the ID of an image by looking at the Picsum-ID header, or the User Comment field in the EXIF metadata.",
      time:"2022-10-10 15:43:22"
    },
    {
      username: "Guest",
      content: "You can find out the ID of an image by looking at the Picsum-ID header, or the User Comment field in the EXIF metadata.",
      time:"2022-10-10 15:43:22"
    },
    {
      username: "Guest",
      content: "You can find out the ID of an image by looking at the Picsum-ID header, or the User Comment field in the EXIF metadata.",
      time:"2022-10-10 15:43:22"
    },
    {
      username: "Guest",
      content: "You can find out the ID of an image by looking at the Picsum-ID header, or the User Comment field in the EXIF metadata.",
      time:"2022-10-10 15:43:22"
    },
    {
      username: "Guest",
      content: "You can find out the ID of an image by looking at the Picsum-ID header, or the User Comment field in the EXIF metadata.",
      time:"2022-10-10 15:43:22"
    },
  ]
  ngOnInit(): void {

  }

  SendMessage(){
    let time_current = new Date().toDateString()
    let body = {
      username:"Guest",
      content:this.message,
      time: time_current
    }
    this.chat_history.push(body)
  }
}
