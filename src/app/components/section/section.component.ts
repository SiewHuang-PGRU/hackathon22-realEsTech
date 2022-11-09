import { Component, Input, OnInit } from '@angular/core';
import { DataPoint } from 'src/app/model/datapoint';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
})
export class SectionComponent implements OnInit {
  @Input() groups: any;
  @Input() selectedDatapoints: DataPoint[] = [];
  isAllSelected : boolean = false;
  openModal : boolean = false;
  selectedIds: string;
  embededCode: string;

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  updateSelectedData(detail: DataPoint): void{
    console.log('click');
    const _isSelected = !detail.isSelected;
    //this.groups.find(g => g.id === detail.category).details.find(d => d.id === detail.id).isSelected = detail.isSelected;
    
    if(_isSelected){
      //this.selectedDatapoints.push(this.groups.find(g => g.id === detail.category).details.find(d => d.id === detail.id));
      this.groups.forEach(grp => {
        if(grp.id == detail.category){
          grp.details.forEach(d => {
            if(d.id == detail.id){
              d.isSelected = true;
              this.selectedDatapoints.push(d);
            }
            
          });
        }
        
      });
    }else{
      this.groups.forEach(grp => {
        grp.details.forEach(d => {
          //this.updateSelectedData(d);
          if(d.id === detail.id){
            d.isSelected = false;

          }
        });
      });
      const indexOfObject = this.selectedDatapoints.findIndex(object => {
        return object.id === detail.id;
      });
      this.selectedDatapoints.splice(indexOfObject, 1);
    }
    console.log(this.selectedDatapoints);
    console.log(this.groups);
  }

  updateAll(): void{
    this.selectedDatapoints = [];
    //deselect all here
    // this.selectedDatapoints.forEach(d => {
    //   this.updateSelectedData(d);
    // });

    this.isAllSelected = !this.isAllSelected;

    if(this.isAllSelected){
      this.groups.forEach(grp => {
        grp.details.forEach(d => {
          //this.updateSelectedData(d);
          d.isSelected = true;
          this.selectedDatapoints.push(d);
        });
      });
    }
    else{
      this.groups.forEach(grp => {
        grp.details.forEach(d => {
          //this.updateSelectedData(d);
          d.isSelected = false;
        });
      });
    }
    //console.log(this.selectedDatapoints);
    //console.log(this.groups);
  }

  async embed(){
    // var finalGroup: Group[] = [];
    // if(this.selectedDatapoints.length >0){
    //   this.groups = this.selectedDatapoints.reduce((r,a) =>{
    //     r[a.categoryName] = [...r[a.categoryName] || [],a];
    //     return r;
    //   },{});
    //   console.log(this.groups);

    //   for(var key in this.groups){
    //     var arr = this.groups[key];

    //     const newgroup : Group={
    //       id : arr[0].category,
    //       categoryName : key,
    //       details : []
    //     }


    //     for(var i = 0; i < arr.length;i++){
    //       var obj = arr[i];
    //       newgroup.details.push(arr[i]);
    //     }

    //     finalGroup.push(newgroup);
    //   }

      
    //   console.log(finalGroup);
    // }
    var ids :string = "";
    this.selectedDatapoints.forEach(d => {
      if(ids===""){
        ids = d.id.toString();
      }else{
        ids += ","+d.id.toString();
      }
    });
    this.selectedIds = ids;
    console.log(this.selectedIds);
    this.openmodal();
    this.generateEmbededCode(this.selectedIds);
  }

  generateEmbededCode(ids: string):void{
    
    var code = '<iframe src="'+window.location.href + '/embedView/'+ids+'" style="width: 100%; height: 100%; border:0px;" width="100" height="100" scrolling="no" ></iframe>';
    this.embededCode = code;
  }


  async openmodal(){
    this.openModal = true;
    // const modal = await this.modalController.create({
    //   component: EmbedModalComponent,
    //   cssClass: 'my-custom-class',
    // });
    // return await modal.present();
  }
  
  copyCode(content: string):void{
    navigator.clipboard.writeText(content);
  }

  setOpen(status: boolean):void{
    this.openModal = status;
  }
}
