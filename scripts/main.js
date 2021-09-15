function headside()
{
    var burger = document.querySelector(".barburger");
    var nav = document.getElementById("nav");
    var links = document.querySelectorAll("li.link");
    var line1 = document.getElementById("line1");
    var line2 = document.getElementById("line2");
    var line3 = document.getElementById("line3");
    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");
        line1.classList.toggle("activeline1");
        line2.classList.toggle("activeline2");
        line3.classList.toggle("activeline3");
        for(var i = 0; i<links.length;i++)
        {
            if(links[i].style.animation)
            {
                links[i].style.animation = ``;
            }
            else
            {
                links[i].style.animation = `navli 0.5s ease forwards ${i / 5 + 0.2}s`;
            }
        }
    });
}
headside();