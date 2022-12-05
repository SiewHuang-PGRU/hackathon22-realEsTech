import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-new-launch',
  templateUrl: './new-launch.page.html',
  styleUrls: ['./new-launch.page.scss'],
})
export class NewLaunchPage implements OnInit {
  selectedIds:string;
  constructor(private route:ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.selectedIds =
    this.route.snapshot.paramMap.get('ids');
    console.log(this.selectedIds);
  }
  
  goToHome(){
    this.router.navigate(['/']);
  }
}
