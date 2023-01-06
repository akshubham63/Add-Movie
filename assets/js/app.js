const cl = console.log;

// declarations
const backDrop = document.getElementById('backDrop');
const movieModel = document.getElementById("movieModel");
const addMovie = document.getElementById("addMovie");
const myClose = [...document.querySelectorAll(".myClose")];
const movieCardContainer = document.getElementById("movieCardContainer");
const title = document.getElementById("title");
const imgUrl = document.getElementById("imgUrl");
const rating = document.getElementById("rating");

let moviesArr = [];// store the object of movies

function templating(arr){
    let result = ``;
    arr.forEach(ele => {
    result += `
        <div class="col-sm-3 mb-3">
            <div class="card myMovieCard">
                <div class="card-header">
                    <h3 class="text-capitalize">${ele.title}</h3>
                </div>
                <div class="card-body">
                    <img src="${ele.imgUrl}" alt="${ele.title} Image" title="${ele.title}" class="img-fluid movieImg">
                </div>
                <div class="card-footer">
                    <h3 class="d-inline-block">
                        Ratings
                    </h3>
                    <h5 class="d-inline-block float-right p-1">
                        ${ele.rating}/10
                    </h5>
                </div>
            </div>
        </div>
    `;
    });

movieCardContainer.innerHTML = result;
};

// callback functions
const onToggleCloseHandler = (eve) =>{
    backDrop.classList.toggle("d-none");
    movieModel.classList.toggle("d-none");
};// function for the dropdown and movieModel to show and hide

const movieAddHandler = (e) =>{
    let obj = {
        title : title.value,
        imgUrl : imgUrl.value,
        rating : rating.value,
    };
    title.value = ``,
    imgUrl.value = ``,
    rating.value = ``,
    moviesArr.unshift(obj);
    templating(moviesArr);
};// function for to create the object after fill up the form and store in movieArr array.

// events
myClose.forEach(ele => ele.addEventListener("click",onToggleCloseHandler));
// close the movieModel after click on the cancel and add movie ,etc.
backDrop.addEventListener("click", onToggleCloseHandler);
addMovie.addEventListener("click",movieAddHandler);