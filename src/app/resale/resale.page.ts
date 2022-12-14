import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-resale',
  templateUrl: './resale.page.html',
  styleUrls: ['./resale.page.scss'],
})
export class ResalePage implements OnInit {
  selectedIds:string;
  locationName:string;
  constructor(private route:ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.selectedIds =
    this.route.snapshot.paramMap.get('ids');
    console.log(this.selectedIds);
  }

  getLocation(location: string) {
    this.locationName = location;
    console.log(location);
  }

  goToHome(){
    this.router.navigate(['/']);
  }
}
