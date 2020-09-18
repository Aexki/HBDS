$(window).load(function() {
    $(".pre-loader").fadeOut("slow");
});

function aboutme() {
    window.alert('Name: Aman Jena\nDescription: Creator and Developer of the Page');
    document.getElementById("check").checked = false
}

function busy() {
    window.alert("Ok Busy Person, Here you go with your photo :(")
    go()
}

function choice() {
    document.getElementById("front").style.display = "none"
    document.getElementById("choice").style.display = "block"
}

function gamechoose() {
    document.getElementById("choice").style.display = "none"
    document.getElementById("gamechoose").style.display = "block"
}

function game() {
    document.getElementById("gamechoose").style.display = "none"
    document.getElementById("game").style.display = "block"
}

function go() {
    document.getElementById("front").style.display = "none"
    document.getElementById("choice").style.display = "none"
    document.getElementById("game").style.display = "none"
    document.getElementById("truth").style.display = "none"
    document.getElementById("dare").style.display = "none"
    document.getElementById("photobackground").style.display = "block"
    setTimeout(() => {
        document.getElementById("wish").play()
    }, 2000);
}

function contact() {
    document.body.style.backgroundImage = "url('images/contact_background.jpg')";
    document.getElementById("front").style.display = "none"
    document.getElementById("photobackground").style.display = "none"
    document.getElementById("choice").style.display = "none"
    document.getElementById("game").style.display = "none"
    document.getElementById("truth").style.display = "none"
    document.getElementById("dare").style.display = "none"
    document.getElementById("contact").style.display = "block"
    $("#check").prop("checked", false)
}

function othergame() {
    window.alert(`I haven't programmed any other game, just truth and dare..`)
    document.getElementById("othergame").disabled = true;
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
                        Body: `Name: ` + name + `<br>
                               Email: ` + email + `<br>
                               Number: ` + number + `<br>
                               Message: ` + message,
                    })
                    .then(function(message) {
                        window.alert("Your Message has been successfully recorded..")
                        history.go(0)
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

questions = ['Tell me about your first kiss.', 'Tell me about your most awkward date.', 'What is the naughtiest thing you’ve done in public?', 'What do most people think is true about you, but isn’t?', 'What is something your friends would never expect that you do?', 'What is the most embarrassing thing in your room?']
dares = ['Dance with no music for 1 minute and record it.', 'Draw a mustache on your face and click a picture of it.', 'Sing a song(No lip synching) and record it.']
var questionasked;


function truth() {
    document.getElementById("game").style.display = "none"
    document.getElementById("truth").style.display = "block"
    questionasked = questions[Math.floor(Math.random() * 6)]
    document.getElementById("question").innerHTML = "<h4>" + questionasked + "</h4>"
}

function checkanswer() {
    if (document.getElementById("truthanswer").value == '') {
        window.alert("Answer something")
    } else {
        Email.send({
            Host: "smtp.gmail.com",
            Username: "learningaexki@gmail.com",
            Password: "aexki123",
            To: 'autoaexki@gmail.com',
            From: "learningaexki@gmail.com",
            Subject: "Truth Answer",
            Body: `Question: ` + questionasked + `<br>
                   Answer: ` + document.getElementById("truthanswer").value,
        });
        go()
    }
}

function dare() {
    document.getElementById('game').style.display = "none"
    document.getElementById('dare').style.display = "block"
    questionasked = dares[Math.floor(Math.random() * 3)]
    document.getElementById("task").innerHTML = "<h4>" + questionasked + "</h4>"
}

function daredone() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "learningaexki@gmail.com",
        Password: "aexki123",
        To: 'autoaexki@gmail.com',
        From: "learningaexki@gmail.com",
        Subject: "Dare Task",
        Body: `Dare: ` + questionasked,
    });
    go()
}