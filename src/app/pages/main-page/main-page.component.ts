import { CUSTOM_ELEMENTS_SCHEMA, Component, booleanAttribute } from '@angular/core';
import { UnitsServiceService } from '../../core/services/units-service.service';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Unit } from '../../core/models/unit.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent {
  units: Unit[] = [];
  resultUnits: Unit[] = [];
  isLoading: boolean = false;

  visibleUnits: number = 9;

  filterForms: FormGroup;

  showClosed: boolean = false;

  constructor(
    private _unitService: UnitsServiceService,
    private fb: FormBuilder
  ) {
    this.filterForms = this.fb.group({
      manha: [false],
      tarde: [false],
      noite: [false],
    });
  }

  ngOnInit() {
    this.getUnits();
  }

  toggleClosed() {
    this.showClosed = !this.showClosed;
  }

  getUnits() {
    this.isLoading = true;
    this._unitService.getUnits().subscribe({
      next: (data) => {
        this.units = data.locations;
        //console.log('Units data:', data);
      },
      error: (err) => {
        console.error('Error fetching units:', err);
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }

  showMore(){
    this.visibleUnits += 9;
  }

  onSubmit() {
    this.isLoading = true;
    const forms = this.filterForms.value;

    let filteredUnits = this.units.slice();

    // OPENED OR CLOSED FILTER -+- FIRST FILTER
    if (!this.showClosed) {
      filteredUnits = filteredUnits.filter((unit) => unit.opened === true);
    }

    this.resultUnits = this.formatedUnitsHour(filteredUnits);

    let hourStart: number = 0;
    let hourEnd: number = 0;

    if (forms.manha) {
      hourStart = 6;
      hourEnd = forms.tarde ? (forms.noite ? 23 : 18) : 12;
    } else if (forms.tarde) {
      hourStart = 12;
      hourEnd = forms.noite ? 23 : 18;
    } else if (forms.noite) {
      hourStart = 18;
      hourEnd = 23;
    }

    if (hourStart !== 0 && hourEnd !== 0) {
      this.resultUnits = filteredUnits.filter((unit) =>
        unit.schedules?.some(
          (schedule) =>
            schedule.formattedHours?.end !== undefined &&
            schedule.formattedHours.start < hourEnd &&
            schedule.formattedHours.end > hourStart
        )
      );
    }

    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }

  // CONVERTE SIRING PARA APENAS NUMBERS
  formatedUnitsHour(array: Unit[]): any {
    if (!array) {
      return [];
    }

    array.forEach((unit) => {
      if (unit.schedules) {
        unit.schedules.map((schedule) => {
          if (schedule.hour.includes('às')) {
            const hoursArray = schedule.hour
              .trim()
              .replaceAll('h', ',')
              .split('às'); // "06h às 22h" -> "22h"

            const startHour = parseFloat(hoursArray[0]);
            const endHour = parseFloat(hoursArray[1]);

            schedule.formattedHours = {
              start: startHour,
              end: endHour,
            };
          }
        });
      }
    });

    return array;
  }

  resetForm() {
    this.filterForms.reset();

    this.showClosed = false;
  }
}
