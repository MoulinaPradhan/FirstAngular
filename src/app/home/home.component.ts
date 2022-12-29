import { Component, ViewEncapsulation,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public eventList: any;
  event_category="ALL_EVENTS";
  event_sub_category="Upcoming";
 
   url='https://api.codingninjas.com/api/v3/events?event_category='+this.event_category+'&'+'event_sub_category='+this.event_sub_category+'&tag_list=&offset=0'
 
 
   // public tag_list="Coding%20Concepts";
   // public offset=1;
  
   
 constructor(private http:HttpClient){}
  
   ngOnInit() : void{
     this.getevents();
   }
 
   solve_allevent(){
     console.log("clicked");
     this.event_category='ALL_EVENTS';  
     this.url='https://api.codingninjas.com/api/v3/events?event_category='+this.event_category+'&'+'event_sub_category=Upcoming&tag_list=&offset=0'
     console.log(this.url);
     this.getevents();
   }
 
   solve_webinar(){
     console.log("clicked");
     this.event_category='WEBINAR';
     console.log(this.event_category);
     this.url='https://api.codingninjas.com/api/v3/events?event_category='+this.event_category+'&'+'event_sub_category=Upcoming&tag_list=&offset=0'
     console.log(this.url);
     this.getevents();
   }
   solve_code(){
     console.log("clicked");
     this.event_category="CODING_EVENT"
     this.url='https://api.codingninjas.com/api/v3/events?event_category='+this.event_category+'&'+'event_sub_category=Upcoming&tag_list=&offset=0'
     console.log(this.url);
     this.getevents();
   }
   solve_boot(){
     console.log("clicked");
     this.event_category="BOOTCAMP_EVENT"
     this.url='https://api.codingninjas.com/api/v3/events?event_category='+this.event_category+'&'+'event_sub_category=Upcoming&tag_list=&offset=0'
     console.log(this.url);
     this.getevents();
   }
   solve_work(){
     console.log("clicked");
     this.event_category="WORKSHOP"
     this.url=this.url;
     console.log(this.url);
     this.getevents();
   }

   getArchive(){
    this.event_sub_category = "Archived";
    this.url = 'https://api.codingninjas.com/api/v3/events?event_category='+this.event_category+'&'+'event_sub_category='+this.event_sub_category+'&tag_list=&offset=0';
    this.getevents(); 
  }

  getUpcoming(){
    this.event_sub_category = "Upcoming";
    this.url = 'https://api.codingninjas.com/api/v3/events?event_category='+this.event_category+'&'+'event_sub_category='+this.event_sub_category+'&tag_list=&offset=0';
    this.getevents(); 
  }

  getAllTimeFavorites(){
    this.event_sub_category = "All Time Favorites";
    this.url = 'https://api.codingninjas.com/api/v3/events?event_category='+this.event_category+'&'+'event_sub_category='+this.event_sub_category+'&tag_list=&offset=0';
    this.getevents(); 
  }
  
   public getevents(){
     this.http.get(this.url).subscribe((data) =>{
       console.log(data);
       this.eventList=data;
     });
   } 
 }