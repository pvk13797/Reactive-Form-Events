import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrls: ['./list-events.component.css']
})
export class ListEventsComponent implements OnInit {

  title = 'Reactive-Form-Events';

  eventForm = this.fb.group({
    events: this.fb.array([
      this.fb.control('')
    ])
  });

  get events() {
    return this.eventForm.get('events') as FormArray;
  }

  addEvents() {
    this.events.push(this.fb.control(''));
  }

  deleteEvents(i: number) {
    this.events.removeAt(i);
  }
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
