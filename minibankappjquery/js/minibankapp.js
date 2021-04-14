var tblAccounts = document.getElementById("tblAccounts").getElementsByTagName('tbody')[0];

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

  // saving 
const SavingBank = document.getElementById("SavingBank");
SavingBank.addEventListener('change', function (event) {
event.preventDefault();

const tr = tblAccounts.getElementsByTagName("tr");
for (let i = 0; i < tr.length; i++) {

  let td = tr[i].getElementsByTagName("td")[3];

    if (this.checked && td.textContent === "Checking" ) {
        tr[i].style.display = "none";

    } 
    else if (this.checked && td.textContent === "Loan" ){
      tr[i].style.display = "none";

    }
    else {
      
      tr[i].style.display = "";

    }
}

});

// checking 
  const CheckingBank = document.getElementById("CheckingBank");
  CheckingBank.addEventListener('change', function (event) {
  event.preventDefault();
  
  const tr = tblAccounts.getElementsByTagName("tr");
  
  for (let i = 0; i < tr.length; i++) {
  
    let td = tr[i].getElementsByTagName("td")[3];
    console.log(td.textContent)
  
      if (this.checked && td.textContent === "Savings") {
          tr[i].style.display = "none";
      }else if (this.checked && td.textContent === "Loan" ){
        tr[i].style.display = "none";
  
      }
       else {
          tr[i].style.display = "";
  
      }
  }
  
  });

// loan 

  const LoanBank = document.getElementById("LoanBank");
  LoanBank.addEventListener('change', function (event) {
  event.preventDefault();
  
  const tr = tblAccounts.getElementsByTagName("tr");
  
  for (let i = 0; i < tr.length; i++) {
  
    let td = tr[i].getElementsByTagName("td")[3];
    console.log(td.textContent)
  
      if (this.checked && td.textContent === "Savings") {
          tr[i].style.display = "none";
      }else if (this.checked && td.textContent === "Checking" ){
        tr[i].style.display = "none";
  
      } else {
          tr[i].style.display = "";
  
      }
  }
  
  });

});
