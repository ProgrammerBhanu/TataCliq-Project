document.getElementById("button").addEventListener("click", function() {
    document.querySelector(".bg-modal").style.display = "flex";
});

document.getElementById("close").addEventListener("click", function() {
    document.querySelector(".bg-modal").style.display = "none";
});

document.getElementById("pinCodeText").addEventListener("click", function(){
    document.querySelector(".bg-modal-2").style.display="flex";
});

document.getElementById("close2").addEventListener("click", function () {
        document.querySelector(".bg-modal-2").style.display = "none";
    });