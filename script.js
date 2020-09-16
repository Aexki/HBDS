$(window).load(function() {
    $(".pre-loader").fadeOut("slow");
});

function aboutme() {
    window.alert('Name: Aman Jena\nDescription: Creator and Developer of the Page');
    document.getElementById("check").checked = false
}

function go() {
    document.getElementById("front").style.display = "none"
    document.getElementById("photo").style.display = "block"
    setTimeout(() => {
        document.getElementById("wish").play()
    }, 2000);
}

function contact() {
    document.body.style.backgroundImage = "url('images/contact_background.jpg')";
    document.getElementById("front").style.display = "none"
    document.getElementById("contact").style.display = "block"
    $("#check").prop("checked", false)
}

function sendEmail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var number = document.getElementById("number").value;
    var message = document.getElementById("message").value;
    //Regular Expression For Email
    var emailReg = "^[a-zA-Z0-9.!#$%&'*+\=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$";

    if (name != '' && email != '') {
        if (email.match(emailReg)) {
            if (number.length == 10 || number.length == 0) {
                Email.send({
                        Host: "smtp.gmail.com",
                        Username: "learningaexki@gmail.com",
                        Password: "aexki123",
                        To: 'autoaexki@gmail.com',
                        From: "learningaexki@gmail.com",
                        Subject: "Message from HBDS",
                        Body: "Name: " + name +
                            "Email: " + email +
                            "Number: " + number +
                            "Message: " + message,
                    })
                    .then(function(message) {
                        window.alert("Your Message has been Successfully Sent..")
                    });
            } else {
                window.alert("The Mobile No. must be at least 10 digit long!");
                return
            }
        } else {
            window.alert("Invalid Email Address...!!!");
            return
        }
    } else {
        window.alert("Fill the fields to submit..!!");
        return
    }
}