$(document).ready(function () {
    $("#order1").submit(function (event) {
        var typeInput = $("input#type").val();
        var sizeInput = $("input#size").val();
        var numberInput = $("input#number").val();
        var crustInput = $("input#crust").val();
        var toppingsInput = $("input#toppings").val();
        var ordertypeInput = $("input#ordertype").val();
        $(".type").text(person1Input);
        $(".size").text(person2Input);
        $(".number").text(animalInput);
        $(".crust").text(exclamationInput);
        $(".toppings").text(verbInput);
        $(".ordertype").text(nounInput);

        $("#outcome").show();

        event.preventDefault();
    });
});
$(document).ready(function () {
            $(".btn").click(function () {
                $("#outcome").show(1000);
            })
            $(document).ready(function () {
                let all0rders = []

                $("#order1").submit(function (event) {
                    var location = prompt("Where do you like yor order to be delivered?")
                    var order = ["type", "size", "number", "crust", "toppings", "ordertype"];

                    // let location = $("location").val()
                    let type = $("#type").val()
                    let size = $("#size").val()
                    let number = $("#number").val()
                    let crust = $("#crust").val()
                    let toppings = $("#toppings").val()
                    let ordertype = $("#ordertype").val()

                    let newOrder = new Order(type, size, number, crust, toppings, ordertype);
                    allOrders.push(newOrder);



                    blanks.forEach(function (blank) {
                        var userInput = $("input." + blank).val();
                        $("." + blank).text(userInput).val();
                    });

                    $("#outcome").show();

                    event.preventDefault();
                });
            });

            function Order(type, size, number, crust, toppings, ordertype) {
                this.type = type
                this.size = size
                this.number = number
                this.crust = crust
                this.toppings = toppings
                this.ordertype = ordertype

                //     order.prototype.size() {
                //         return size
                //     }
                //     order.prototype.size() {
                //         return size
                //     }
                //     order.prototype.size() {
                //         return size
                //     }
                //     order.prototype.topping() {
                //         return topping
                //     }
                //     order.prototype.topping() {
                //         return topping
                //     }
                //     order.prototype.topping() {
                //         return topping
                //     }
                //     order.prototype.crust() {
                //         return crust
                //     }
                //     order.prototype.crust() {
                //         return crust
                //     }
                //     order.prototype.crust() {
                //         return crust
                //     }
                //     order.prototype.ordertype() {
                //         return ordertype
                //     }
                //     order.prototype.ordertype() {
                //         return ordertype
                //     }
                //     order.prototype.number() {
                //         return number
                //     }
                //     let newOrder = new Order(type, size, number, crust, toppings, ordertype);
                //     allOrders.push(newOrder);
                //     newOrder.size()



                // }