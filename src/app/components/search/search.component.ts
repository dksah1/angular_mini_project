import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [MatInputModule,MatButtonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  @Output() search = new EventEmitter<string>();

  onSearch(){
    console.log("on search called");
    this.search.emit(this.text)
  }  
  text="";
  inputChange(event:any){
    console.log('Text has been changed',event.target.value);
    this.text= event.target.value;
  }
  onTyping(event:any){
     console.log("tying",event.target.value);
     
  }
}
