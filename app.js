function showHidden() {
        let hidden = document.getElementById('hidden')
        let question = document.getElementById('question')
    if (hidden.style.display === "none" , question.style.border === ""  || hidden.style.display === "") {
        hidden.style.display = "inline-block";
        question.style.border = "none"
        mobile_gallery.style.zIndex = '-1';
    } else {
        hidden.style.display = "none";
        question.style.border = "";
        mobile_gallery.style.zIndex = '1';
    }
}