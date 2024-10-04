enum Country {
   Egypt=1,
   KSA,
   USA

}

interface DiscountModel {
    x: number,
    y: number,
    country: Country
}

class Discount {
   model : DiscountModel = {
    x: 10,
    y: 20,
    country: Country.KSA
   }
   constructor(){
    console.log("I am the constracor")
   }

   calculateDiscount(){
    let sum : number = this.model.x + this.model.y;
    console.log(sum)
    
    let discoubt : number = this.model.country === Country.Egypt ? (sum * 0.1) : 0;
    console.log(discoubt)
   }
 
}

let discount : Discount = new Discount()
discount.calculateDiscount();