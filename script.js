window.addEventListener("load", () => {
    const sounds = document.querySelectorAll('.sound')
    const pads = document.querySelectorAll('.pads div')
    const visual = document.querySelector('.visual');
    const colors = [
        "#63d3fe",
        "#3bc28a",
        "#b5d32e",
        "#1eaf4f",
        "#3f8bc9",
        "#932dc2",
    ]
    pads.forEach((pad, index) => {
        pad.addEventListener("click", function(){
            sounds[index].currentTime = 0;
            sounds[index].play();
            createBuble(index)
        });
    });

    const createBuble = (index) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index]
        bubble.style.animation = "jump 1s ease"
        bubble.addEventListener("animationend", function(){
            visual.removeChild(this)
        })
    }
});