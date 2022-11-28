import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit {
  selectedIds:string;
  constructor(private route:ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.selectedIds =
    this.route.snapshot.paramMap.get('ids');
    console.log(this.selectedIds);
  }

  goto(page: string):void{
    this.router.navigate([`/${page}`,this.selectedIds]);
  }
}
