import { Component, OnInit } from '@angular/core';
import { title } from 'process';
import { Menus } from 'src/app/interface';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  username !: string | null
  hotnews !: string | null
  menus : Array<Menus> = [
    {
      title:"Home",
      link:"#",
    },
    {
      title:"About Us",
      link:"#",
    },
    {
      title:"Blog",
      link:"#",
    },
    {
      title:"Services",
      link:"#",
    },
    {
      title:"Products",
      link:"#",
    },
    {
      title:"Contact",
      link:"#",
    },
  ]
  ngOnInit(): void {
    localStorage.removeItem('username')
    this.username = localStorage.getItem('username') || null
    this.hotnews = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
}
}
