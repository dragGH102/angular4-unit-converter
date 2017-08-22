import { Component, OnInit } from '@angular/core';
import { UnitConverterService } from './unit-converter.service';

@Component({
  selector: 'unit-converter',
  templateUrl: './unit-converter.component.html',
  styleUrls: ['./unit-converter.component.css'],
})
export class UnitConverterComponent implements OnInit {
  title = "Unit converter - simple app for 2degrees interview";
  fromPair: {
    val: number,
    unit: string,
  };
  to = 'm';
  result: number;
  units: string[];

  constructor(private unitConverterService: UnitConverterService) { }

  ngOnInit() {
    this.units = this.unitConverterService.getUnits();
  }

  parseSourceUnit(source) {
    this.result = null;
    if (source.valid) {
      this.fromPair = this.unitConverterService.parseUnit(source.value);
    }
  }

  canSubmit(source) {
    return source.valid && !!this.fromPair;
  }

  convert() {
    this.result = this.unitConverterService.convertToUnit(this.fromPair.val, this.fromPair.unit, this.to);
  }
}
