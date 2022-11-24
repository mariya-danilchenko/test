import { Component } from '@angular/core';
import {Router} from "@angular/router";

interface Person {
  name: string;
  surname: string;
  age: number | null;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public router:Router) {

  }

  go(){
    this.router.navigate(["/product"])
  }

  title: string = 'test';

  object1: Person = {
    name: 'Tom',
    surname: 'Tom1',
    age: null
  }

  array1: {}[] = [
    {
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
  ];

  array2: {}[] = [
    {
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
  ];

  getSmth(): string {
    return this.title;
  }

  ngOnInit() {
    //Массивы
    //this.array1.forEach()
    //this.array1.filter()
    //this.array1.map()
    //this.array1.reduce()
    //this.array1.some()
    //this.array1.every()
    //this.array1.find()


    //Объекты
    //Object.values(this.object1)
    //Object.keys(this.object1)
    //Object.assign()


    //this.makeSolution1();
    this.makeSolution2();
  }

  makeSolution1(): void {
    const result = this.array1
      .reduce((acc: {}[], curr: any) => {
        let objectWithAge = null

        Object.keys(curr).forEach(key => {
          objectWithAge = this.getNewObjectIfFoundKey(this.array2, key, curr)
        })

        return [
          ...acc,
          objectWithAge ?? curr
        ];

      }, [])

    console.log(result)
  }

  makeSolution2(): void {
    const result = this.array1.map((el) => {
      const array1ElData = this.getFirstProperty(el);
      const valueByKeyFromArray2 = this.getValuesByKeyFromObject(this.array2, array1ElData.key)

      return {
        ...array1ElData.value,
        ...(valueByKeyFromArray2[0] ?? {})
      }
    })

    console.log(result)
  }

  getFirstProperty(obj: any = {}): any {
    const key = Object.keys(obj ?? {})[0] ?? '';

    return {
      value: obj[key],
      key
    };
  }

  getValuesByKeyFromObject(array: any[], keyName: string,): object[] {
    const objectFromArray2 = this.getObjectByKey(array, keyName)

    return Object.values(objectFromArray2 ?? {})
  }

  getNewObjectIfFoundKey(array: any[], keyName: string, curr: any): object | null{
    const valuesFromArray2 = this.getValuesByKeyFromObject(array, keyName)

    if (!!valuesFromArray2.length) {
      return this.getNewObjectWithKey(keyName, curr[keyName], valuesFromArray2[0])
    }

    return null
  }

  getNewObjectWithKey(keyName: string, value1: object, value2: object): object {
    return {
      [keyName]: {
        ...value1,
        ...value2
      }
    }
  }

  getObjectByKey(array: any[], keyName: string, ): object | undefined {
    return array.find(el => !!el[keyName])
  }

  getNewObject(): object {
    return {
      ...this.object1,
      age: 5
    }
  }

  getNewObjectUnsafe(): object {
    this.object1.age = 5

    return this.object1;
  }

  getNewArray(): Person[] {
    return [this.object1, {
      name: 'Tom2',
      surname: 'Toms surname',
      age: 10
    }]
  }

}
