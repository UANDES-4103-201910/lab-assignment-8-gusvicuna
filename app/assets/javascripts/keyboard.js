// Note: $(() => {}); is equivalent to $(document).ready(function(){})
$(() => {
    console.log('Document ready! [app/assets/javascripts/keyboard.js]');

    class KeyboardController {

        constructor(kcontainer,textAreaInput){

            this.kcontainer = kcontainer;
            this.textAreaInput = textAreaInput;
        }

        KeyPressed(key){

            console.log(key);
            var textInput = document.getElementById("textAreaInput")
            if (key.includes("Tab")){
                textInput.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;";
            }
            else if (key.includes("Accept")){
                alert("Accepted");
                textInput.innerHTML = ""
            }
            else if (key.includes("Cancel")){
                alert("Canceled");
                textInput.innerHTML = ""
            }
            else if (key.includes("Enter")){
                textInput.innerHTML += "<br>"
            }
            else if (key.includes("Bksp")){
                textInput.innerHTML = textInput.innerHTML.slice(0, textInput.innerHTML.length-1);
            }
            else{
                key = key.toLowerCase();
                textInput.innerHTML += key
            }

        }

        ToggleVisibility(){

            var kbCont = document.getElementById("kcontainer");

            if (kbCont.style.display === "block"){
                kbCont.style.display = "none";
            }
            else{
                kbCont.style.display = "block";
            }

        }


    }


    var mykeyboard = new KeyboardController("kcontainer","textAreaInput")
    var kbVisibilityButton = document.getElementById("kbVisibilityButton")

    kbVisibilityButton.addEventListener('click',function(){
        mykeyboard.ToggleVisibility();
    },false);

    $(".key").click(function(){
        mykeyboard.KeyPressed($(this).text());
    });


});