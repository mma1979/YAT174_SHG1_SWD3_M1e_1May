var Country;
(function (Country) {
    Country[Country["Egypt"] = 1] = "Egypt";
    Country[Country["KSA"] = 2] = "KSA";
    Country[Country["USA"] = 3] = "USA";
})(Country || (Country = {}));
var Discount = /** @class */ (function () {
    function Discount() {
        this.model = {
            x: 10,
            y: 20,
            country: Country.KSA
        };
        console.log("I am the constracor");
    }
    Discount.prototype.calculateDiscount = function () {
        var sum = this.model.x + this.model.y;
        console.log(sum);
        var discoubt = this.model.country === Country.Egypt ? (sum * 0.1) : 0;
        console.log(discoubt);
    };
    return Discount;
}());
var discount = new Discount();
discount.calculateDiscount();
