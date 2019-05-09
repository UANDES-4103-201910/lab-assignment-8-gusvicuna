// Note: $(() => {}); is equivalent to $(document).ready(function(){})
$(() => {
    console.log('Document ready! [app/assets/javascripts/keyboard.js]');

    class KeyboardController {

        constructor(kcontainer){

            this.kcontainer = kcontainer;
        }

        KeyPressed(keydiv){
            var key=keydiv.text()
            console.log(key);
            var textInput = document.getElementById("textAreaInput")
            if (key.includes("Tab")){
                textInput.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;";
            }
            else if (key.includes("Accept")){
                textInput.innerHTML = "";
                alert("Accepted");
            }
            else if (key.includes("Cancel")){
                textInput.innerHTML = ""
            }
            else if (key.includes("Enter")){
                textInput.innerHTML += "<br>"
            }
            else if (key.includes("Bksp")){
                textInput.innerHTML = textInput.innerHTML.slice(0, -1);
            }
            else if (keydiv.hasClass("key-space")){
                textInput.innerHTML += "&nbsp;"
            }
            else{
                key = key.toLowerCase();
                textInput.innerHTML += key.slice(0, -1)
            }

        }

        ToggleVisibility(){

            var kbCont = document.getElementById("kcontainer");
            var vsButton = document.getElementById("kbVisibilityButton")

            if (kbCont.style.display === "none"){
                kbCont.style.display = "block";
                vsButton.innerHTML = "Hide Keyboard";
            }
            else{
                kbCont.style.display = "none";
                vsButton.innerHTML = "Show Keyboard";
            }

        }


    }


    var mykeyboard = new KeyboardController("kcontainer")

    $("#kbVisibilityButton").click(function () {
        mykeyboard.ToggleVisibility();
    })

    $(".key").click(function(){
        mykeyboard.KeyPressed($(this));
    });


});