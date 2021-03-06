import { Component } from '@angular/core';
import { AngularFireDatabase } from "@angular/fire/database";
import { Observable } from 'rxjs';


@Component({
  selector: 'environment-component',
  templateUrl: './environment.component.html',
})

export class EnvironmentComponent {

  environment: Observable<any>;
  
  constructor(db: AngularFireDatabase) {
    
    this.environment = db.object('environment').valueChanges();
  }

}
