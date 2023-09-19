const text = document.querySelector(".second-text");
 

const textLoad =() =>{
  setTimeout(() =>{
    text.textContent ="Freelancer";
    text.classList.remove("hide");
  },0);

  setTimeout(() =>{
    text.textContent ="Web Developer";
  },4000);

  setTimeout(() =>{
    text.textContent ="Youtuber";
  },8000);
}
textLoad()
setInterval(textLoad,12000);





/*const observer = new IntersectionObserver((entries) =>{
entries.forEach((entry) => {
  if(entry.isIntersecting){
entry.classList.add("show");
  }else{
    entry.classList.remove("show");
  }
});
});

const hiddenElement = document.querySelectorAll(".hidden")
hiddenElement.forEach((el)=> observer.observe(el));


const anime = document.querySelector("#skills");
anime.addEventListener("scroll",)*/





var toTopButton = document.querySelector(".arrowup");
toTopButton.style.display="none";//by default should be hidden
document.querySelector('body').onscroll = function(){//whenever they scroll
  if (window.scrollY > 500)//if scroll is 150px from top
    toTopButton.style.display = "block";//if they scroll down, show
  else
    toTopButton.style.display = "none";//if they scroll up, hide
};
function top1(){
  scrollTo(0,10);
  console.log("hello")
  }

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
        
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();




/*const hide2 = document.querySelector(".nav-name");

hide2.addEventListener("mouseover",(event)=>{
 
if(event.target.classList.contains("nav-name")){
  event.target.classList.add("hide1");
}else{
  event.target.classList.add("show1");
}
});

const logo = document.querySelector("#active");
const  show = document.getElementById("#hide1");

logo.addEventListener("mouseover", function mouseOver(){
hide1.style.display="inline-block";
});

logo.addEventListener("mouseout",function mouseOut(){
  hide1.style.display = "none";
  console.log("food")
  });
*/
function closeNav() {
  document.getElementById("phonenav").style.width = "0";
  document.getElementById("home").style.marginLeft= "0";
  document.getElementById("about").style.marginLeft= "0";
  document.getElementById("resume").style.marginLeft= "0";
  document.getElementById("contact").style.marginLeft= "0";
  document.getElementById("skills").style.marginLeft= "0";
}
function openNav() {
  document.getElementById("phonenav").style.width = "250px";
  document.getElementById("home").style.marginLeft = "250px";
  document.getElementById("about").style.marginLeft= "250px";
  document.getElementById("resume").style.marginLeft= "250px";
  document.getElementById("contact").style.marginLeft= "250px";
  document.getElementById("skills").style.marginLeft= "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}









