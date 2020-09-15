$(window).load(function() {
    $(".pre-loader").fadeOut("slow");
});

const recorder = document.getElementById('recorder');
const player = document.getElementById('player');

recorder.addEventListener('change', function(e) {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    // Do something with the audio file.
    player.src = url;
});

function aboutme() {
    window.alert('Name: Aman Jena\nDescription: Creator and Developer of the Page');
    document.getElementById("check").checked = false
}