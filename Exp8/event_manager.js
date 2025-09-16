document.addEventListener("mouseover", function() {
    const curColour = document.body.style.backgroundColor;

    document.body.style.backgroundColor = "#ADD7F6";
});

document.addEventListener("mouseleave", function() {
    const curColour = document.body.style.backgroundColor;

    document.body.style.backgroundColor = "#3F8EFC";
});

