const heading = document.getElementById("font1");
const buttons = document.querySelectorAll(".fontButtons button");

buttons.forEach(btn => {
    btn.addEventListener("click", function () {
        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        switch (btn.id) {
            case "small":
                heading.style.fontSize = "12px";
                break;

            case "medium":
                heading.style.fontSize = "24px";
                break;
            case "large":
                heading.style.fontSize = "36px";
                break;
            case "huge":
                heading.style.fontSize = "80px"
                break;
        }
        heading.style.transition = "0.4s";
    });
});