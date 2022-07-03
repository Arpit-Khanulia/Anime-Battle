function click1(){



var a = Math.random() * 13;
a = Math.floor(a);
a = a+1;
var b = Math.random() * 13;
b = Math.floor(b);
b = b+1
console.log(a);
console.log(b);



images(a);
images2(b);

if(a>b)
document.querySelector("h1").innerHTML= "🚩 Player 1 won 🚩";
else if(b>a)
document.querySelector("h1").innerHTML= "🚩 Player 2 won 🚩";
else
document.querySelector("h1").innerHTML= "🚩 Its a Draw 🚩";


}


function images( a){

    switch(a){

        case 1:document.querySelector("#img1").setAttribute("src","images/1.png");
        break;
        case 2:document.querySelector("#img1").setAttribute("src","images/2.png");
        break;
        case 3:document.querySelector("#img1").setAttribute("src","images/3.png");
        break;
        case 4:document.querySelector("#img1").setAttribute("src","images/4.png");
        break;
        case 5:document.querySelector("#img1").setAttribute("src","images/5.png");
        break;
        case 6:document.querySelector("#img1").setAttribute("src","images/6.png");
        break;
        case 7:document.querySelector("#img1").setAttribute("src","images/7.png");
        break;
        case 8:document.querySelector("#img1").setAttribute("src","images/8.png");
        break;
        case 9:document.querySelector("#img1").setAttribute("src","images/9.png");
        break;
        case 10:document.querySelector("#img1").setAttribute("src","images/10.png");
        break;
        case 11:document.querySelector("#img1").setAttribute("src","images/11.png");
        break;
        case 12:document.querySelector("#img1").setAttribute("src","images/12.png");
        break;
        case 13:document.querySelector("#img1").setAttribute("src","images/13.png");
        break;
    }
}
function images2( a){

    switch(a){

        case 1:document.querySelector("#img2").setAttribute("src","images/1.png");
        break;
        case 2:document.querySelector("#img2").setAttribute("src","images/2.png");
        break;
        case 3:document.querySelector("#img2").setAttribute("src","images/3.png");
        break;
        case 4:document.querySelector("#img2").setAttribute("src","images/4.png");
        break;
        case 5:document.querySelector("#img2").setAttribute("src","images/5.png");
        break;
        case 6:document.querySelector("#img2").setAttribute("src","images/6.png");
        break;
        case 7:document.querySelector("#img2").setAttribute("src","images/7.png");
        break;
        case 8:document.querySelector("#img2").setAttribute("src","images/8.png");
        break;
        case 9:document.querySelector("#img2").setAttribute("src","images/9.png");
        break;
        case 10:document.querySelector("#img2").setAttribute("src","images/10.png");
        break;
        case 11:document.querySelector("#img2").setAttribute("src","images/11.png");
        break;
        case 12:document.querySelector("#img2").setAttribute("src","images/12.png");
        break;
        case 13:document.querySelector("#img2").setAttribute("src","images/13.png");
        break;
    }
}

