import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { DataPoint } from 'src/app/model/datapoint';
import { DatapointService } from 'src/app/services/datapoint.service';

@Component({
  selector: 'app-selected-data-points',
  templateUrl: './selected-data-points.component.html',
  styleUrls: ['./selected-data-points.component.scss'],
})
export class SelectedDataPointsComponent implements OnInit {
  //@Input() details: DataPoint[] = [];
  @Input() ids: string;
  details: DataPoint[] = [];
  constructor(private route: ActivatedRoute,
            private dataPointService: DatapointService) { }

  ngOnInit() {
    const idString =
    this.route.snapshot.paramMap.get('ids');
    console.log(idString);
    if(idString != null){
      this.getSelectedDataPointsFromParam(idString);
      console.log('a');
    }else{
      this.getSelectedDataPointsFromParam(this.ids);
      console.log('b');
    }
  }

  getSelectedDataPointsFromParam(idString: string):void{
    
    // const idString =
    // String(this.route.snapshot.paramMap.get('ids'));
    const ids = idString.split(",");
    var arr : Number[] = [];
    console.log(ids);
    ids.forEach(id => {
      arr.push(Number(id));
    });
    console.log(arr);
    this.dataPointService.getDataPointsByIds(arr)
      .subscribe(res => this.details = res);
  }
}
