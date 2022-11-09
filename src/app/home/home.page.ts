import { Component,  ViewChild } from '@angular/core';
import { DataPoint } from '../model/datapoint';
import { DatapointService } from '../services/datapoint.service';
import { Group } from '../model/groups';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild("searchLocation", { static: false })
  searchLocation: any;
  datapoints: DataPoint[] = [];
  groups:any;
  finalGroup: Group[] = [];

  selectedDatapoints: DataPoint[] = [];
  constructor(private datapointService: DatapointService) {}

  getDataPoints(searchLocation: any):void{
    this.finalGroup = [];

    this.datapoints.forEach(d => {
          d.isSelected = false;
    });

    this.datapointService.getDataPoints(searchLocation)
      .subscribe(datapoints => {
        this.datapoints = datapoints; 
        console.log(this.datapoints);

        if(this.datapoints.length >0){
          this.groups = this.datapoints.reduce((r,a) =>{
            r[a.categoryName] = [...r[a.categoryName] || [],a];
            return r;
          },{});
          console.log(this.groups);

          for(var key in this.groups){
            var arr = this.groups[key];

            const newgroup : Group={
              id : arr[0].category,
              categoryName : key,
              details : []
            }


            for(var i = 0; i < arr.length;i++){
              var obj = arr[i];
              newgroup.details.push(arr[i]);
            }

            this.finalGroup.push(newgroup);
          }

          this.selectedDatapoints = [];
          console.log(this.finalGroup);
        }
      });
  }
}
