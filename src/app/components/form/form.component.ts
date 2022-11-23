import { AfterContentInit, AfterViewInit, Component, ViewChild } from "@angular/core";
import { BehaviorSubject, combineLatest, debounce, debounceTime, filter, fromEvent } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements AfterViewInit {
  @ViewChild('nameField') nameField: any;

  public array1$: BehaviorSubject<number[]> =
    new BehaviorSubject<number[]>([])

  public value$: BehaviorSubject<string> =
    new BehaviorSubject<string>('')

  constructor() {

  }

  ngAfterViewInit(): void {
    fromEvent(this.nameField.nativeElement, 'keyup')
      .pipe(
        debounceTime(1000),
      )
      .subscribe((ev: any) => this.value$.next(ev.target.value))

    combineLatest([
      this.array1$,
      this.value$
    ]).subscribe((v) => console.log(v))

    this.array1$
      .pipe(
        filter(() => !!this.nameField.nativeElement.value),
        debounceTime(1000),
      )
      .subscribe((value) => {});

    setTimeout(() => {
      this.array1$.next([1])
    }, 1000)
  }

}
