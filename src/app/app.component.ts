import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test';


  ngOnInit(){
    const arr1 = [{
      a: {
        name: 'Tom',
        surname: 'Tom1'
      }
    },
      {
        b: {
          name: 'Tom B',
          surname: 'Tom1 B'
        }
      },
      {
        c: {
          name: 'Tom C',
          surname: 'Tom1 C'
        }
      },
      {
        d: {
          name: 'Tom D',
          surname: 'Tom1 D'
        }
      },
    ]

    const arr2 = [{
      a: {
        age: 15
      }
    },
      {
        b: {
          age: 10
        }
      },
      {
        d: {
          age: 5
        }
      },
    ]
  }
}
