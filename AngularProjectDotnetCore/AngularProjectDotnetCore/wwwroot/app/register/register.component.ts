import { Component, OnInit } from "@angular/core";
import { IUser } from "./user";

@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html',
    styleUrls: ['register.component.css']
})

export class RegisterComponent implements OnInit {

    countrys: string[] = ['Hà Nội', 'Hải Phòng', 'Vĩnh Phúc'];

    pageTitle: string = "Register";

    user: IUser = {
        userName: '',
        email: '',
        password: '',
        gender: '',
        country: 'default',
    };

    checkRegister(): void {
  
    }

    ngOnInit(): void {
        
    }
}