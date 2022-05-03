const image = document.querySelectorAll(".image");

image.forEach((e, i) => {
    if(i > 0 && i < 9) {
        e.style.backgroundColor = e.dataset.backColor;
        e.innerHTML = "<span class='screenshot'>Project <br />Screenshot</span>";
    }
})