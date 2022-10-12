import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { navbarData } from './nav-data';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})


export class SidenavComponent implements OnInit {

  

  ngOnInit(): void {
  }

  // collapsed = false;
  // navData = navbarData;


  @ViewChild(MatSidenav) sidenav!: MatSidenav;
  constructor(private observer: BreakpointObserver) { 

  }

  ngAfterViewInit(){
      this.observer.observe(['(max-width: 800px)']).subscribe((res) =>{
          if(res.matches){
            this.sidenav.mode='over';
            this.sidenav.close();
          }
          else
          {
            this.sidenav.mode='side';
            this.sidenav.open();
          }
      });
    }




      // If user is sign in, only then can see this Side Nav Bar

    // isLoggedIn(){
    //   let userDataStr: any = localStorage.getItem("result");
    //   let userDataObj: any = JSON.parse(userDataStr);
    //   console.log(userDataObj);
    //   if(userDataObj !== null) {
    //     return (userDataObj.token) ? true : false;
    //   } else {
    //     return false;
    //   }
    // }


    // If user Is logged Out

//     isLoggedOut()
// {
//    localStorage.removeItem('result');
//   this.route.navigate(['login']);   
// }

}
