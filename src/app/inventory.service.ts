import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle } from './vehicle';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  private baseURL = "http://localhost:8081/inventory/vehicles"

  constructor(private httpClient:HttpClient) { }

  public getInventory(): Observable<Vehicle[]>{
    return this.httpClient.get<Vehicle[]>(`${this.baseURL}`)
  }
  public addVehicle(v:Vehicle): Observable<any>{
    return this.httpClient.post(`${this.baseURL}`,v)
  }
  public updateVehicle(Id:number, newVehicle:Vehicle): Observable<any>{
    return this.httpClient.put(`${this.baseURL}/${Id}`, newVehicle)
  }
  public deleteVehicle(vehicleToDelete:Vehicle): Observable<any>{
    console.log(`In inventory service: ${vehicleToDelete.id}`)
    return this.httpClient.delete(`${this.baseURL}/${vehicleToDelete.id}`)
  }
}
