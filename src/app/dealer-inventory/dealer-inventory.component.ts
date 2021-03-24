import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../inventory.service';
import {Vehicle} from '../vehicle'

@Component({
  selector: 'app-dealer-inventory',
  templateUrl: './dealer-inventory.component.html',
  styleUrls: ['./dealer-inventory.component.css']
})
export class DealerInventoryComponent implements OnInit {
  vehicleToEdit:Vehicle = undefined
  inventory:Vehicle[] = []
    // {
    //   "Id": 41,
    //  vin": "Y123",
    //   "year": 2012,
    //   "make": "HONDA",
    //   "model": "Civic",
    //   "mileage": 70000,
    //   "price": 5900.00,
    //   "featured": false,
    //   photos: []
    // },
    // {
    //   "Id": 4  2,
    //  vin": "P1023",
    //   "year": 2019,
    //   "make": "BMW",
    //   "model": "328i",
    //   "mileage": 42000,
    //   "price": 12000.00,
    //   "featured": true,
    //   "photos": ["/assets/b-1.png", "/assets/b-2.png", "/assets/b-3.png", "/assets/b-4.png"]
    // },
    // {
    //   "Id": 3,
    //  vin": "NM182",
    //   "year": 2018,
    //   "make": "KIA",
    //   "model": "Niro",
    //   "mileage": 31000,
    //   "price": 7900.00,
    //   "featured": false,
    //   "photos": ["/assets/k-1.png", "/assets/k-2.png", "/assets/k-3.png"]

    // },
    // {
    //   "Id": 4  ,
    //  vin": "Y187",
    //   "year": 2014,
    //   "make": "HONDA",
    //   "model": "Accord",
    //   "mileage": 40000,
    //   "price": 8900.00,
    //   "featured": false,
    //   "photos": []
    // },
  // ]

  constructor(private inventorySvc:InventoryService) { }

  ngOnInit(): void {
    this.inventorySvc.getInventory().subscribe(list => this.inventory = list)
    console.log(`On load: ${this.inventory}`)
  }

  trackvin(index:number, car:Vehicle) : number {
    return car.id
  }

  deleteVehicle(car:Vehicle){
    // this.inventory = this.inventory.filter(c => vin != cavin)
    //Changed to use the service instead of handling delete here.
    console.log(car)
    this.inventorySvc.deleteVehicle(car).subscribe(() => {
      //Update local copy of the list
      this.inventory = this.inventory.filter(v => v.id !== car.id)
    })
    
  }

  // handlePhotoNavigation(photoIndex:number, car:Vehicle){
  //   if(photoIndex == car.photos.length-1){
  //     alert('Come visit us in the showroom!')
  //   }
  // }

  addVehicle(v:Vehicle){
    // this.inventory.push(v)
    this.inventorySvc.addVehicle(v).subscribe(() => {
      this.inventory.push(v)
    })
    
  }

  beginEditing(v:Vehicle){
    this.vehicleToEdit = v
  }

  commitEdit(v:Vehicle){
    //Copy the edited data
    // Object.assign(this.vehicleToEdit, v)
    this.inventorySvc.updateVehicle(this.vehicleToEdit.id,v).subscribe(() => {
      Object.assign(this.vehicleToEdit, v)
      this.vehicleToEdit = undefined
    })

  }

  cancelEdit(){
    this.vehicleToEdit = undefined
  }

}
