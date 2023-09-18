import { Component, OnInit } from '@angular/core';
 import {User} from 'src/app/admin/table-list/user';


import { ListeUserAscService } from 'src/app/user_dashboard/settings/liste-user-asc.service';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  users:User[];
 
  constructor(private ListeUserAscService :ListeUserAscService) {}

    ngOnInit(): void {
      this.getUserAsc();
      }
      private getUserAsc(){
        this.ListeUserAscService.getListUserAsc().subscribe(data => {
          console.log("bonj");

        this.users = data;
        });
        }

 

    // private getAdmins(){
    //   this.UserlistService.getUserByRoles('ROLE_Entreprise').subscribe(data => {
    //   this.admins = data;
    //   });
    //   }

}
