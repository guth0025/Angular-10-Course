import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import {Vehicle} from '../vehicle'
function validate_VIN(control:FormControl){
  const banned = ["I", "O", "Q"]

  if (banned.some(str => control.value.includes(str))) {
    return {
      error: "Must not contain I, O or Q"
    }
  }else{
    return null // all good
  }
}
@Component({
  selector: 'app-vehicle-form-reactive',
  templateUrl: './vehicle-form-reactive.component.html',
  styleUrls: ['./vehicle-form-reactive.component.css']
})
export class VehicleFormReactiveComponent implements OnInit {
  vehicleForm:FormGroup

  @Input()
  vehicle = new Vehicle(0,'', 0, '', '', 0, 0, false,0)

  @Output("on-submit")
  emitter = new EventEmitter

  @Output("on-cancel")
  emitt = new EventEmitter

  @Input("onCancel")
  cancel:boolean = false

  constructor() { }

  ngOnInit(): void {
    this.vehicleForm = new FormGroup({
      veh_vin: new FormControl(
        this.vehicle.VIN, [Validators.minLength(3), Validators.required, validate_VIN]),
      veh_year: new FormControl(this.vehicle.year, [Validators.required]),  
      veh_make: new FormControl(this.vehicle.make, [Validators.required]),  
      veh_model: new FormControl(this.vehicle.model, [Validators.required]),  
      veh_mileage: new FormControl(this.vehicle.mileage, [Validators.required]),  
      veh_price: new FormControl(this.vehicle.price, [Validators.required, Validators.min(100)]),  
      veh_featured: new FormControl(this.vehicle.featured),  
    })

  }

  handleSubmit(){
    const input = this.vehicleForm.value
    
    const v = new Vehicle(
      0,
      input.veh_vin,
      input.veh_year,
      input.veh_make,
      input.veh_model,
      input.veh_mileage,
      input.veh_price,
      input.veh_featured === "" ? false: input.veh_featured,
      0)

      this.emitter.emit(v)
  }

  handleCancel(){
    this.emitt.emit()
  }

}
