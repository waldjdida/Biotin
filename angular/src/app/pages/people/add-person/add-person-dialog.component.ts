import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Store, select } from "@ngrx/store";
import { OrganisationOutputDto } from "src/app/models/organisation-output-dto";
import { invokeOrganisationsAPI } from "src/app/state/organisations/organisation.actions";
import { selectOrganisations } from "src/app/state/organisations/organisation.selectors";
import { invokeSaveNewPersonAPI } from "src/app/state/people/people.actions";


@Component({
  selector: 'add-person-dialog',
  templateUrl: 'add-person-dialog.component.html',
  styleUrls: ['add-person-dialog.component.scss']
})
export class DialogContentExampleDialog implements OnInit {

  @Output() onAdd = new EventEmitter<any>(true);

  constructor(private store: Store, private snackBar: MatSnackBar) {

    this.store.pipe(select(selectOrganisations)).subscribe(data => {
      this.orgs = data
    });
  }
  
  orgs: OrganisationOutputDto[] = []; 
  
 
  ngOnInit(): void {
    this.store.dispatch(invokeOrganisationsAPI());
  }

  form = new FormGroup({
    organisationId: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required])
  });

  save() {

    const input: any = {};

    Object.assign(input, this.form.value);

    if(this.form.valid){
      this.store.dispatch(invokeSaveNewPersonAPI({ newPerson: input}));
      this.onAdd.emit(input);
    }else{
      this.snackBar.open("Please add missing data",undefined, {duration: 3000});
    }    
  }
}