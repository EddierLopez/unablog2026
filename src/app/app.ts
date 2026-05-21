import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CategoryService } from './services/category.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  public categories:any    
  protected readonly title = signal('webapp');  
  public currentUser
  constructor(private categoryService:CategoryService,private _auth:AuthService){    
    this.loadCategories()    
    this.currentUser=_auth.currentUser
  } 
  

  loadCategories(){    
    this.categoryService.getCategories().subscribe({
      next:(response:any)=>{       
        this.categories=response 
        console.log('Respuesta---->',this.categories)        
      },
      error:(err:Error)=>{
        console.log('Error---->',err)
      }
    })
  }

}
