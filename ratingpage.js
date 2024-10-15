let ratingsBox=document.getElementsByClassName("rating-div");
let submitBtn=document.getElementById("submit");
let NoOfrating=document.getElementsByClassName("no-of-rating")[0];

var valueofRating;


let Ratings=Array.from(ratingsBox);

console.log(Ratings);

Ratings.forEach((rating,index)=>{


rating.addEventListener("click",function(){
   rating.style.backgroundColor=" hsl(25, 97%, 53%)";
   rating.style.color="black";
valueofRating=rating.textContent;
    console.log(valueofRating);
});
});


let sectionOFratings=document.getElementsByClassName("section-1")[0];
let sectionOFfeedback=document.getElementsByClassName("feedback")[0];


submitBtn.addEventListener("click",function(){

sectionOFfeedback.style.display="block";
sectionOFratings.style.display="none";
NoOfrating.textContent=valueofRating;

});
