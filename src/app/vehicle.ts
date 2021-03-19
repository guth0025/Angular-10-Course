export class Vehicle{
    constructor(
        public Id : number,
        public vin: String,
        public year: number,
        public make: string,
        public model: string,
        public mileage: number,
        public price: number,
        public featured: boolean,
        public photos: number,
    ){}
}