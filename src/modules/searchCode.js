import ajaxService from "./ajaxService";

const movieTitle = document.getElementById("title")
const movieRunTime = document.getElementById("time")
const movieDirector = document.getElementById("director")
const movieActors = document.getElementById("actors")
const movieImdb = document.getElementById("imdb")
const movieImg = document.getElementById('poster')
const searchCode = ()=>{
    document.querySelector('form').addEventListener('submit',(e)=>{
        e.preventDefault()
        const searchTerm = document.querySelector('.term').value;
        let searchResponce;
        ajaxService(searchTerm)
            .then(result =>searchResponce = result)
            .then(data =>{
                if (data.Response == "False" ) {
                    movieTitle.innerHTML = `<h3>Klaida</h3>`
                    movieRunTime.innerHTML = ``
                    movieImg.innerHTML = ``
                    movieDirector.innerHTML = ``
                    movieActors.innerHTML = ``
                    movieImdb.innerHTML = ``

                }else {
                    if (data.Poster == "N/A"){
                        movieImg.innerHTML = `<img src="../src/img/movie.png">`
                    }else {
                        movieImg.innerHTML = `<img src="${data.Poster}">`
                    }

                    movieTitle.innerHTML = `<h3>${data.Title}</h3>`
                    movieRunTime.innerHTML = `<p><b>Trukmė:</b> ${data.Runtime}</p>`
                    movieDirector.innerHTML = `<p><b>Režisierius:</b> ${data.Director}</p>`
                    movieActors.innerHTML = `<p><b>Aktoriai:</b> ${data.Actors}</p>`
                    movieImdb.innerHTML = `<p><b>IMDB reitingas:</b> ${data.imdbRating}</p>`
                }
            })



    })

}

export default searchCode

/*
*
*       if (searchResponce === 1){
                        movieImg.innerHTML = `<img src="${data.Poster}">`
                        movieTitle.innerHTML = `<p>${data.Title}</p>`
                        movieRunTime.innerHTML = `<p>${data.Runtime}</p>`
                        movieDirector.innerHTML = `<p>${data.Director}</p>`
                        movieActors.innerHTML = `<p>${data.Actors}</p>`
                        movieImdb.innerHTML = `<p>${data.imdbRating}</p>`

                    }else {
                    document.querySelector('.main').innerHTML += "<span>Paieska negalima</span>"
                }
            })*/