import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user';
import { AuthService, LoginResponse } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  public status:number
  public user:User
  
  constructor(private _authService:AuthService){
    this.status=-1
    this.user=new User(1,"","","","","","")
  }

  onSubmit(form:any){
    console.log("Formulario activado")
    console.log(this.user.email)
    this._authService.login(this.user).subscribe({
      next:(response:LoginResponse)=>{
        console.log(response)
      },
      error:(err:Error)=>{

      }
    })

  }
}
