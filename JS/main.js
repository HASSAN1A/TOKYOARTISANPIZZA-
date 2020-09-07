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
                return 155;
            } else if (this.topping === "mushroom") {
                return 135;
            } else {
                return 190;
            }
        } else if (this.size === "medium") {
            if (this.topping === "pepperoni") {
                return 100;
            } else if (this.topping === "mushroom") {
                return 90;
            } else {
                return 150;
            }
        } else {
            if (this.topping === "pepperoni") {
                return 80;
            } else if (this.topping === "mushroom") {
                return 60;
            } else {
                return 130;
            }
        }
    };

    Pizza.prototype.getCrustPrice = function () {
        if (this.crust === "crispy") {
            return 180;
        } else if (this.crust === "stuffed") {
            return 150;
        } else {
            return 100;
        }
    };

    Pizza.prototype.getTypePrice = function () {
        if (this.size === "large") {
            if (this.type === "steak diablo") {
                return 1200;
            } else if (this.type === "memphis") {
                return 1100;
            } else {
                return 1000;
            }
        } else if (this.size === "medium") {
            if (this.type === "steak diablo") {
                return 1050;
            } else if (this.type === "memphis") {
                return 950;
            } else {
                return 850;
            }
        } else {
            if (this.type === "steak diablo") {
                return 800;
            } else if (this.type === "memphis") {
                return 600;
            } else {
                return 500;
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
            alert(customerName + ": Your total bill is Ksh. " + totalCost + ". Your order will be ready for collection in the next 15 minutes.");
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
        alert(customerName + ": Your total bill is   Ksh. " + totalCost + ". Your order will be delivered to " + estate + " Estate, House Number   " + houseNumber + " in 30 minutes time.Thanks for doing business with us.");
    });
});
$(document).ready(function () {
    $('#submission').submit(function (event) {
        var display1 = $('input#first').val();
        var display2 = $('input#mail').val();
        if (display1 && display2 != '') {
            alert('Thank you ' + display1 + ' your subscription is well received');
        } else {
            alert('Invalid input');
        }
        event.preventDefault();
    })
});