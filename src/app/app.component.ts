import { Component, AfterViewChecked} from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewChecked{
  title = 'juborajsarker';

  collapse: boolean = true;

  public sWidth ;
  public isNavDrawerShow = false;

  constructor(){
    this.sWidth = screen.width;

    if(this.sWidth < 992){
      this.isNavDrawerShow = true;
    }else {
      this.isNavDrawerShow = false;
    }
    
  }


  ngAfterViewChecked (): void {
   
  }
}
