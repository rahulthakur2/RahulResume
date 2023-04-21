// For HamBurger Icon

let v1 = document.getElementsByClassName("ham");
let v2 = document.getElementsByClassName("vertical-list2");

v1[0].addEventListener('click',f1);

function f1(event){
    v2[0].style.display = "block";
    v1[0].removeEventListener('click',f1);
    v1[0].addEventListener('click',f2);
}

function f2(event){
    v2[0].style.display = "none";
    v1[0].removeEventListener('click',f2);
    v1[0].addEventListener('click',f1);
}

v2[0].addEventListener('click',function (event){
    v2[0].style.display = "none";
})


// for smooth scroll

// var navMenuAnchor = document.querySelectorAll('.horizontal-list ul li a');
// or i add a class to all due to two list


// 1 st method
// var navMenuAnchor = document.querySelectorAll('.forScroll ul li a');
// for(var i = 0;i<navMenuAnchor.length;++i){
//     navMenuAnchor[i].addEventListener('click',function (event){
//         event.preventDefault();
//         var targetSectionId = this.textContent.trim().toLowerCase();
//         var targetSection = document.getElementById(targetSectionId);
//
//
//         var interval = setInterval(function () {
//             var targetSectionCoordinates =targetSection.getBoundingClientRect();
//             if(targetSectionCoordinates.top <=0){
//                 clearInterval(interval);
//                 return;
//             }
//             window.scrollBy(0, 50);
//
//         },50);
//
//         console.log(targetSectionId);
//         console.log(targetSection);
//
//         //you can fetch from content or href
//     });
// }

//2 nd method because if we want to set scroll as a function

var interval;
var navMenuAnchor = document.querySelectorAll('.forScroll ul li a');
for(var i = 0;i<navMenuAnchor.length;++i){
    navMenuAnchor[i].addEventListener('click',function (event){
        event.preventDefault();
        var targetSectionId = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionId);

        //W R O N G : : :
        // var interval = setInterval(scrollVertically(targetSection),50); we have to pass function not call the function


        //1 ST WAY
         // we can pass argument as 3 argument of setInterval
        // var interval = setInterval(scrollVertically,50,targetSection);

        //2 ND WAY
        interval = setInterval(function (){
            scrollVertically(targetSection)},50);
        });



        // console.log(targetSectionId);
        // console.log(targetSection);

        //you can fetch from content or href

}

function scrollVertically(targetSection) {
    var targetSectionCoordinates =targetSection.getBoundingClientRect();
    if(targetSectionCoordinates.top <=0){
        clearInterval(interval);
        return;
    }
    window.scrollBy(0, 50);

}







//skill section
var progressBars = document. querySelectorAll('.skills-progress > div');
var skillContainer = document.getElementById("skill-container");
window.addEventListener('scroll',checkScroll2);
var animationDone = false;



function intializeBars(){
    for(var bars of progressBars){
        bars.style.width = 0 + "%";
    }
}

intializeBars();


function fillBars(){
    for(let bars of progressBars){
        let targetWidth = bars.getAttribute("data-bar-width");
        let currentWidth = 0;
        let interval = setInterval(function (){
            if(currentWidth > targetWidth){
                clearInterval(interval);
                return;
            }
            currentWidth++;
            bars.style.width = currentWidth + '%';
        },15);
    }

}




function checkScroll(){
    //check either skill container is visible
    var coordinates = skillContainer.getBoundingClientRect();
    if(!animationDone &&   coordinates.top <= window.innerHeight){       //window.innerHeigth get viewPort Height
        animationDone = true;
        fillBars();
    }else if(coordinates.top > window.innerHeight) {
        animationDone = false;
        intializeBars();
    }
}
function intializeBar(i){
    progressBars[i].style.width = 0 + "%";
} 
function fillBar(i){
    let targetWidth = progressBars[i].getAttribute("data-bar-width");
    let currentWidth = 0;
    let interval = setInterval(function (){
        if(currentWidth > targetWidth){
            clearInterval(interval);
            return;
        }
        currentWidth++;
        progressBars[i].style.width = currentWidth + '%';
    },15);
}

var singleBarAnimationDone = [];
for(let i = 0; i<progressBars[i].length;++i){
    singleBarAnimationDone.push(false);
}

function checkScroll2(){
    for(var i = 0;i<progressBars.length;++i){
        var coordinates = progressBars[i].getBoundingClientRect()
        if( !singleBarAnimationDone[i] && coordinates.top <= window.innerHeight){
            fillBar(i);
            singleBarAnimationDone[i] = true;
        }
        else if(coordinates.top > window.innerHeight){
            intializeBar(i);
            singleBarAnimationDone[i] = false;
        }
    }

}
