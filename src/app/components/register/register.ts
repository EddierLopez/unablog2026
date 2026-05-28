import { Component } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  public user:User
  constructor(private userService:UserService){
    this.user=new User(1,"","","","","user_role","")
  }

  onSubmit(form:any){
    this.userService.createUser(this.user).subscribe({
      next:(response)=>{
        console.log(response)
        form.reset()
      },
      error:(err:Error)=>{
        console.log("Error---->",err)
      }
    })
  }
}
