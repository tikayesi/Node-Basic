function Order(idOrder) {
    console.log("ID order" + idOrder );
    ProsesOrder(idOrder)
}
function ProsesOrder(idOrder) {
    setTimeout(function () {
        console.log("ID order"+ idOrder + "Processed");
    },3000);
}
Order(101);
Order(102);
Order(103);