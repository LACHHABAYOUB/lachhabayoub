'use strict';

function handleAddProduct() {

    let form = document.getElementById("productForm");
    let productNumber = form.elements['productNumber'].value;
    let productName = form.elements['productName'].value;
    let quantity = form.elements['quantity'].value;
    let unitPrice = form.elements['unitPrice'].value;
    let supplier = form.elements['supplier'].value;
    let date = form.elements['date'].value;

    let data = "Form Data: \nProduct Number: " + productNumber 
        +"\nProduct Name: " + productName 
        + "\nQuantity: " + quantity 
        + "\nUnit Price: " + unitPrice 
        + "\nSupplier: " + supplier 
        + "\nDate: " + date;
    
    //alert(data)    

    let prodNumber = $('#productNumber').val();
    let prodName = $('#productName').val();
    let quan = $('#quantity').val();
    let unitP = $('#unitPrice').val();
    let sup = $('#supplier').val();
    let d = $('#date').val();

    let fData = "Form Data: <br>Product Number: " + prodNumber 
        +"<br>Product Name: " + prodName 
        + "<br>Quantity: " + quan 
        + "<br>Unit Price: " + unitP 
        + "<br>Supplier: " + sup 
        + "<br>Date: " + d;
    $('#submitedContent').html(fData);

    return false;
}