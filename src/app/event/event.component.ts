import { Component, OnInit } from '@angular/core';
import {HttpClient}  from  '@angular/common/http'

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
event_category="ALL_EVENTS";
 public event_sub_category="Upcoming";
 public tag_list="Coding%20Concepts";
 public offset=1;


 public eventList: any;
  constructor(private http:HttpClient){
     
  }
  ngOnInit() : void{
    this.getevents();
  }
  public getevents(){
    this.http.get('https://api.codingninjas.com/api/v3/events?event_category='+this.event_category+'&'+'event_sub_category=Upcoming&tag_list=&offset=0').subscribe((data) =>{
      // console.log(data);
      this.eventList=data;
    });
  } 
}
