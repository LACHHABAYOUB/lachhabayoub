$(document).ready(function () {
  var i = 3; // Next Value Should Be on the Table

  $("#btnCreate").click(function () {
    var newID = i;
    i++;

    const account = document.getElementById("txtAccountNo");
    const name = document.getElementById("txtCustomerName");
    const supplier = document.getElementById("ddlAccountType");

    if (account.value && name.value && supplier.value) {
      $("#tblAccounts").append('<tr> <td>' + newID + '.</td>  <td>' + account.value + '</td>  <td>' + name.value + '</td>  <td>' + supplier.value + '</td> </tr>');
    }

    document.getElementById("txtAccountNo").value = "";
    document.getElementById("txtCustomerName").value = "";
    document.getElementById("ddlAccountType").value = "";

  });
});

