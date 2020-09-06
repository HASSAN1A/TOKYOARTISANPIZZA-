$(document).ready(function () {
    function Pizza(type, size, topping, crust) {
        this.type = type;
        this.size = size;
        this.topping = topping;
        this.crust = crust;
    }

    Pizza.prototype.getPizzaPrice = function () {
        return this.getCrustPrice() + this.getToppingPrice() + this.getTypePrice();
    };

    Pizza.prototype.getToppingPrice = function () {
        if (this.size === "large") {
            if (this.topping === "pepperoni") {
                return 150;
            } else if (this.topping === "mushroom") {
                return 120;
            } else {
                return 180;
            }
        } else if (this.size === "medium") {
            if (this.topping === "pepperoni") {
                return 100;
            } else if (this.topping === "mushroom") {
                return 80;
            } else {
                return 140;
            }
        } else {
            if (this.topping === "pepperoni") {
                return 80;
            } else if (this.topping === "mushroom") {
                return 50;
            } else {
                return 100;
            }
        }
    };

    Pizza.prototype.getCrustPrice = function () {
        if (this.crust === "thick") {
            return 100;
        } else {
            return 0;
        }
    };

    Pizza.prototype.getTypePrice = function () {
        if (this.size === "large") {
            if (this.type === "chicken tikka") {
                return 1200;
            } else if (this.type === "peri peri") {
                return 1300;
            } else {
                return 1100;
            }
        } else if (this.size === "medium") {
            if (this.type === "chicken tikka") {
                return 850;
            } else if (this.type === "peri peri") {
                return 950;
            } else {
                return 750;
            }
        } else {
            if (this.type === "chicken tikka") {
                return 600;
            } else if (this.type === "peri peri") {
                return 650;
            } else {
                return 550;
            }
        }
    };

    var customerName = "";

    var totalCost = 0;

    var pizzasOrdered = [];

    var estate = "";
    var houseNumber = "";

    $("#pizza-form").submit(function (e) {
        e.preventDefault();
        var typeSelected = $("#type").val();
        var sizeSelected = $("#size").val();
        var toppingSelected = $("#topping").val();
        var crustSelected = $("#crust").val();

        var newPizza = new Pizza(
            typeSelected,
            sizeSelected,
            toppingSelected,
            crustSelected
        );

        pizzasOrdered.push(newPizza);
        $("#type").val("");
        $("#size").val("");
        $("#topping").val("");
        $("#crust").val("");

        totalCost = 0;

        for (let i = 0; i < pizzasOrdered.length; i++) {
            totalCost += pizzasOrdered[i].getPizzaPrice();
        }

        $("#order-summary").append(
            "<tr>" +
            '<th scope="row">' +
            newPizza.type +
            " (" +
            newPizza.size +
            ") - " +
            newPizza.getTypePrice() +
            "</th>" +
            "<td>" +
            newPizza.topping +
            " - " +
            newPizza.getToppingPrice() +
            "</td>" +
            "<td>" +
            newPizza.crust +
            " - " +
            newPizza.getCrustPrice() +
            "</td>" +
            "<td>" +
            newPizza.getPizzaPrice() +
            "</td>" +
            "</tr>"
        );

        if (pizzasOrdered.length > 0) {
            $("#form-title").empty();
            $("#form-title").append("Add Another Order");
        }

        $("#total-amount").fadeIn();
        $("#checkout").fadeIn();
        $("#orders-div").fadeIn();

        $("#total-amount").empty();
        $("#total-amount").append(totalCost);
        $(".total-amount").show();
    });

    $("#checkout").click(function () {
        $(".checkout-options").show();
    });

    $("#checkout-form").submit(function (e) {
        e.preventDefault();
        var name = $("#name").val();
        var deliveryOption = $("#delivery-option").val();
        customerName = name;
        console.log(name);
        console.log(deliveryOption);
        $("#name").val("");
        $("#delivery-option").val("");
        $(".checkout-options").hide();
        if (deliveryOption === "deliver") {
            $(".location").show();
            $(".delivery-cost").show();
            $("#delivery-amount").append(200);
            totalCost += 200;
            $("#total-amount").empty();
            $("#total-amount").append(totalCost);
        } else {
            alert(customerName + ": Your total bill is Ksh. " + totalCost + ". Your order will be ready for collection in the next 2 hours");
        }
    });

    $("#location-form").submit(function (e) {
        e.preventDefault();
        var estateEntered = $("#estate").val();
        var houseNumberEntered = $("#house-number").val();
        estate = estateEntered;
        houseNumber = houseNumberEntered;
        console.log(estate);
        console.log(houseNumber);
        $(".location").hide();
        alert(customerName + ": Your total bill is : Ksh. " + totalCost + ". Your order will be delivered to " + estate + " Estate, House Number : " + houseNumber + " in 30 minutes ime.Thanks for doing business.");
    });
});