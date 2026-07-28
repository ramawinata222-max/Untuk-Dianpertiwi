/* ==========================================
   ELEMENT
========================================== */
console.log("Script berhasil dibaca");
const loading = document.getElementById("loading");

const hero = document.querySelector(".hero");

const letter = document.getElementById("letter");

const gallery = document.getElementById("gallerypage");

const wish = document.getElementById("wish");

const question = document.getElementById("question");

const success = document.getElementById("success");

const openLetter = document.getElementById("openLetter");

const nextGallery = document.getElementById("nextGallery");

const nextWish = document.getElementById("timelineButton");

const lastPage = document.getElementById("lastPage");

const yesBtn = document.getElementById("yes");

const noBtn = document.getElementById("no");

const music = document.getElementById("music");

const hearts = document.getElementById("hearts");
 console.log(nextWish);


/* ==========================================
   LOADING
========================================== */

window.onload = function(){

    setTimeout(() => {

    setTimeout(()=>{

    loading.style.display="none";

    passwordPage.style.display="flex";

},3000);

    console.log("Loading disembunyikan");

}, 3000);
};


/* ==========================================
   BUKA SURAT
========================================== */

openLetter.onclick = () => {

    hero.classList.add("hide");

    letter.classList.remove("hide");

    music.play();

};



/* ==========================================
   GALLERY
========================================== */

nextGallery.onclick = () => {

    letter.classList.add("hide");

    gallery.classList.remove("hide");

};



/* ==========================================
   WISH
========================================== */

nextWish.onclick = () => {

    gallery.classList.add("hide");

    wish.classList.remove("hide");

};



/* ==========================================
   QUESTION
========================================== */

lastPage.onclick = () => {

    wish.classList.add("hide");

    question.classList.remove("hide");

};



/* ==========================================
   SUCCESS
========================================== */

yesBtn.onclick = () => {

    question.classList.add("hide");

    success.classList.remove("hide");

};



/* ==========================================
   FLOATING HEART
========================================== */

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "💖";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (18 + Math.random() * 25) + "px";

    heart.style.animationDuration = (4 + Math.random() * 5) + "s";

    hearts.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 9000);

}

setInterval(createHeart, 350);



/* ==========================================
   TULIP
========================================== */

for (let i = 0; i < 8; i++) {

    const tulip = document.createElement("div");

    tulip.className = "tulip";

    tulip.innerHTML=`

    <img
    src="assets/images/tulip.png">  
    `;

    tulip.style.left = (i * 12 + 2) + "%";

    tulip.style.animationDelay = (Math.random() * 2) + "s";

    document.body.appendChild(tulip);

}



/* ==========================================
   DUCK
========================================== */

function createDuck() {

    const duck = document.createElement("div");

    duck.className = "walkDuck";

    duck.innerHTML=`

    <img
    src="assets/images/duck1.png">

    `;

    duck.style.bottom = (10 + Math.random() * 40) + "px";

    duck.style.fontSize = (28 + Math.random() * 18) + "px";

    duck.style.animationDuration = (18 + Math.random() * 10) + "s";

    document.body.appendChild(duck);

    setTimeout(() => {

        duck.remove();

    }, 28000);

}

setInterval(createDuck, 5000);



/* ==========================================
   SPARKLE
========================================== */

function sparkle() {

    const s = document.createElement("div");

    s.className = "sparkle";

    s.innerHTML = "✨";

    s.style.left = Math.random() * 100 + "vw";

    s.style.top = Math.random() * 100 + "vh";

    s.style.fontSize = (10 + Math.random() * 20) + "px";

    s.style.animationDuration = (2 + Math.random() * 2) + "s";

    document.body.appendChild(s);

    setTimeout(() => {

        s.remove();

    }, 3500);

}

setInterval(sparkle, 700);
/* ==========================================
   NO BUTTON RUN AWAY
========================================== */

const questionBox = document.querySelector(".question-box");

function moveNoButton() {

    const box = questionBox.getBoundingClientRect();

    const maxX = box.width - noBtn.offsetWidth - 20;
    const maxY = box.height - noBtn.offsetHeight - 20;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.position = "absolute";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}

noBtn.addEventListener("mouseenter", moveNoButton);

noBtn.addEventListener("touchstart", function(e){

    e.preventDefault();

    moveNoButton();

});



/* ==========================================
   TYPEWRITER EFFECT
========================================== */

const letterText = document.querySelector(".letter-card p");

const originalText = letterText.innerHTML;

letterText.innerHTML = "";

function typeWriter(text, index = 0){

    if(index < text.length){

        letterText.innerHTML += text.charAt(index);

        setTimeout(() => {

            typeWriter(text,index+1);

        },25);

    }

}

openLetter.addEventListener("click",()=>{

    setTimeout(()=>{

        letterText.innerHTML="";

        typeWriter(originalText);

    },400);

});



/* ==========================================
   SIMPLE CONFETTI
========================================== */

function confetti(){

    for(let i=0;i<180;i++){

        const c=document.createElement("div");

        c.innerHTML=["🎉","🎊","💖","🌸","✨","🩷"][Math.floor(Math.random()*6)];

        c.style.position="fixed";

        c.style.left=Math.random()*100+"vw";

        c.style.top="-50px";

        c.style.fontSize=(15+Math.random()*18)+"px";

        c.style.transition="4s linear";

        c.style.zIndex="9999";

        document.body.appendChild(c);

        setTimeout(()=>{

            c.style.top="110vh";

            c.style.transform=`rotate(${Math.random()*720}deg)`;

        },50);

        setTimeout(()=>{

            c.remove();

        },4500);

    }

}



/* ==========================================
   YES BUTTON
========================================== */

yesBtn.addEventListener("click",()=>{

    confetti();

});



/* ==========================================
   AUTO GALLERY
========================================== */

const photos=document.querySelectorAll(".photo");

let current=0;

function autoGallery(){

    photos.forEach((p)=>{

        p.style.opacity=".45";

        p.style.transform="scale(.92)";

    });

    photos[current].style.opacity="1";

    photos[current].style.transform="scale(1.05)";

    current++;

    if(current>=photos.length){

        current=0;

    }

}

setInterval(autoGallery,2000);



/* ==========================================
   MUSIC CONTROL
========================================== */

document.addEventListener("keydown",(e)=>{

    if(e.code==="Space"){

        e.preventDefault();

        if(music.paused){

            music.play();

        }else{

            music.pause();

        }

    }

});



/* ==========================================
   SUCCESS ANIMATION
========================================== */

yesBtn.addEventListener("click",()=>{

    let count=0;

    const interval=setInterval(()=>{

        createHeart();

        createDuck();

        sparkle();

        count++;

        if(count>30){

            clearInterval(interval);

        }

    },200);

});



/* ==========================================
   RANDOM BACKGROUND STARS
========================================== */

for(let i=0;i<40;i++){

    const star=document.createElement("div");

    star.innerHTML="✨";

    star.style.position="fixed";

    star.style.left=Math.random()*100+"vw";

    star.style.top=Math.random()*100+"vh";

    star.style.opacity=".35";

    star.style.fontSize=(8+Math.random()*12)+"px";

    star.style.pointerEvents="none";

    star.style.animation=`twinkle ${2+Math.random()*3}s infinite`;

    document.body.appendChild(star);

}



/* ==========================================
   CSS KEYFRAME FOR TWINKLE
========================================== */

const style=document.createElement("style");

style.innerHTML=`

@keyframes twinkle{

0%{

opacity:.2;

transform:scale(.8);

}

50%{

opacity:1;

transform:scale(1.2);

}

100%{

opacity:.2;

transform:scale(.8);

}

}

`;

document.head.appendChild(style);



/* ==========================================
   HAPPY BIRTHDAY POPUP
========================================== */

setTimeout(()=>{

console.log("❤️ Happy Birthday Princess ❤️");

},2500);
/* ===========================================
PHOTO MODAL
=========================================== */
const modal=document.getElementById("photoModal");

const modalImage=document.getElementById("modalImage");

const closePhoto=document.getElementById("closePhoto");

document.querySelectorAll(".photo img").forEach(img=>{

    img.onclick=()=>{

        modal.classList.add("show");

        modalImage.src=img.src;

    }

});

closePhoto.onclick=()=>{

    modal.classList.remove("show");

}

modal.onclick=(e)=>{

    if(e.target===modal){

        modal.classList.remove("show");

    }

}
/*=========================================
PASSWORD
=========================================*/

const passwordPage = document.getElementById("passwordPage");
const passwordInput = document.querySelectorAll(".password-display input");
const heroPage = document.querySelector(".hero");

let password = "";

const passwordBenar = "110326";

function tekanAngka(angka){

    if(password.length >= 6) return;

    password += angka;

    updatePassword();

    if(password.length == 6){

        if(password === passwordBenar){

            document.getElementById("passwordStatus").innerHTML =
            "❤️ Password Benar";

            setTimeout(()=>{

                passwordPage.style.display="none";

                heroPage.style.display="flex";

            },800);

        }else{

            document.getElementById("passwordStatus").innerHTML =
            "❌ Password Salah";

            setTimeout(()=>{

                password="";

                updatePassword();

                document.getElementById("passwordStatus").innerHTML="";

            },800);

        }

    }

}

function updatePassword(){

    passwordInput.forEach((box,index)=>{

        box.value = password[index] ? "•" : "";

    });

}

function hapusPassword(){

    password=password.slice(0,-1);

    updatePassword();

}

function resetPassword(){

    password="";

    updatePassword();

}