
for(var i = 0; i < document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

        var buttonInnerHTML = this.innerHTML;

        var audioName = "";

        switch (buttonInnerHTML) {
            case "w":
                audioName = "crash";
                break;
            case "a":
                audioName = "kick-bass";
                break;
            case "s":
                audioName = "snare";
                break;
            case "d":
                audioName = "tom-1";
                break;
            case "j":
                audioName = "tom-2";
                break;
            case "k":
                audioName = "tom-3";
                break;
            case "l":
                audioName = "tom-4";
                break;
            default:
                console.log(buttonInnerHTML);
        }

        var audioPath = "sounds/" + audioName + ".mp3";

        var audio = new Audio(audioPath);
        audio.play();

    });
}

function handleClick() {
    alert("i got clicked!");
}