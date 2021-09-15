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
/********************************************************/
/* the fram */
var fram = document.getElementById("fram");
function setfram(){
    var framwidth = fram.clientWidth;
    var framheight = (9*framwidth)/16;
    fram.style.height =`${framheight}px`;
}
setfram();
window.onresize = setfram;
/* the fram */
var videos;
function check(){
    videos = document.querySelectorAll("aside ul li");
    for(var i =0; i< videos.length;i++)
    {
        videos[i].children[0].children[1].checked = false;
        videos[i].children[0].classList.remove("active");
    }
    if(!localStorage.getItem("currentv"))
    {
        localStorage.setItem("currentv","ashtqaq");
    }

    for(var i =0; i< videos.length;i++)
    {
        if(videos[i].getAttribute("name") === localStorage.getItem("currentv")){
            videos[i].children[0].children[1].checked = true;
            videos[i].children[0].classList.add("active");
        }
    }

    if(localStorage.getItem("currentv") === "ashtqaq")
    {
        fram.setAttribute("src","https://www.youtube.com/embed/0aacja5GqtA");
    }
    else if (localStorage.getItem("currentv") === "a7sa")
    {
        
        fram.setAttribute("src","https://www.youtube.com/embed/CDVi17htRoQ");
    }
    else if (localStorage.getItem("currentv") === "qdra")
    {
        
        fram.setAttribute("src","https://www.youtube.com/embed/kiveu-pITV8");
    }
}
check()
/* click function */
videos.forEach(li => {
    li.onclick = () =>{
        localStorage.setItem("currentv",li.getAttribute("name"));
        check();
    }
});