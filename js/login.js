function handleSubmit() {
    console.log("Lab 04  ");
    let form = document.getElementById("loginForm");
    console.log("Email: " + form.elements['email'].value);
    console.log("Password: " + form.elements['password'].value);
    console.log("Website URL: " + form.elements['webUrl'].value);
    console.log("Check me out: " + document.getElementById("loginForm").elements['checkMeOut'].checked);

    
    
    console.log("\n\n\nLab 09 ");
    console.log("Email: " + $('#email').val());
    console.log("Password: " + $('#password').val());
    console.log("Website URL: " + $('#webUrl').val());
    console.log("Check me out: " + $('#checkMeOut').prop('checked'));

    return false;
}
