import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public colors =["red", "blue", "green","yellow"]


public arr={
  "coding Ninjas":["About Us","Privacy Policy","Terms & Condition", "Pricing & Refund Policy","Bug Bounty","Our Students","Press Release"],
  "PRODUCTS":["Courses","Try courses for Free","Career Camp","Mock Interviews","Hire Talent"],
  "COMMUNITY": ["CodeStudio","Blog","Events","Campus Ninja","Affiliate","Scholarship Event"],
 

 

}


  ngOnInit(): void {
    
}
}
