import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  tempArray = [];
  checkedArray = [{ id: 2, name: 'roleName' },
  { id: 3, name: 'roleName2' }]

  onButtonSubmit() {
    if(this.tempArray.length > 0) {
    alert(JSON.stringify(this.tempArray))
    } else {
      alert('please selected atleast one')
    }
  }
  onChange(event, item, i) {
    if (event.target.checked) {
      this.tempArray.push(item);
    } else {
      if (this.checkedArray[i].id === item.id) {
        this.tempArray.splice(i, 1)
      }
    }
    console.log(this.tempArray), 'temp';
  }
}
