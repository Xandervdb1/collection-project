for (let movie of collection) {
    let cardscontainer = document.querySelector(".cards");
    
    //make card div for each movie
    let moviecard = document.createElement("div");
    moviecard.classList.add("card");

        //make moviethumbnail div
        let moviethumbnail = document.createElement("div");
        moviethumbnail.classList.add("moviethumbnail");
        //place backgroundimage inside moviethumbnail
        let thumbnaildata = movie.thumbnail;
        moviethumbnail.style.backgroundImage = "url(" + thumbnaildata + ")";
    
        //make content div
        let contentdiv = document.createElement("div");
        contentdiv.classList.add("content");

            //make tags div
            let tagsdiv = document.createElement("div");
            tagsdiv.classList.add("tags");

                //add agerating to tagsdiv
                let ageratingdiv = document.createElement("div");
                ageratingdiv.classList.add("tag", "agerating");
                ageratingdiv.innerHTML = movie.agerating;
                
                //tags div appends agerating div
                tagsdiv.append(ageratingdiv);

                //add duration tag
                let durationdiv = document.createElement("div");
                durationdiv.classList.add("tag", "duration");
                durationdiv.innerHTML = movie.duration;

                //tags div append duration div
                tagsdiv.append(durationdiv);

                //add genre tags
                let genres = movie.genres
                for (let genre of genres) {
                    let genrediv = document.createElement("div");
                    genrediv.classList.add("tag", "genre");
                    genrediv.innerHTML = genre
                    genrediv.style.backgroundColor = checkGenre(genre);
                    //tags div append genre divs
                    tagsdiv.append(genrediv);
                }
                            
            //add heading div
            let headingdiv = document.createElement("div");
            headingdiv.classList.add("heading");

                //add flex div child
                let headingflexchilddiv = document.createElement("div");

                    //add movie title
                    let movietitle = document.createElement("h2");
                    movietitle.innerHTML = movie.title;

                    //add ratingdiv
                    let ratingdiv = document.createElement("div");

                        //add star icon 
                        let staricon = document.createElement("img");
                        staricon.setAttribute("src", "./assets/staricon.png");
                        staricon.setAttribute("alt", "star icon for movie rating");

                        //add movie rating
                        let movierating = document.createElement("p");
                        movierating.innerHTML = movie.imdbrating;

                    
                    //rating div appends all components
                    ratingdiv.append(staricon);
                    ratingdiv.append(movierating);
                
                //flexdivchild appends title and ratingdiv
                headingflexchilddiv.append(movietitle);
                headingflexchilddiv.append(ratingdiv);

                //add release date and country
                let releasedatecountry = document.createElement("p");
                releasedatecountry.innerHTML = movie.releasedate + " (" + movie.releasecountry + ")";
                
                //add director
                let director = document.createElement("p");
                director.innerHTML = movie.director;

                //heading div appends all components
                headingdiv.append(headingflexchilddiv);
                headingdiv.append(releasedatecountry);
                headingdiv.append(director);
            
            //add description div
            let descriptiondiv = document.createElement("div");
            descriptiondiv.classList.add("description");
                
                //add description
                let description = document.createElement("p");
                description.innerHTML = movie.description;

                //description div appends description
                descriptiondiv.append(description);
            
            //add cast div
            let castdiv = document.createElement("div");
            castdiv.classList.add("cast");

                //add cast title
                let casttitle = document.createElement("h3");
                casttitle.innerHTML = "Cast";

                //add cast ul
                let castul = document.createElement("ul");

                    //add li
                    let castmembers = movie.cast;
                    for (let castmember of castmembers) {
                        let castli = document.createElement("li");
                        castli.innerHTML = castmember;
                        castul.append(castli);
                    }
                
                //castdiv appends components
                castdiv.append(casttitle);
                castdiv.append(castul);
            
            //add hr
            let hr = document.createElement("hr");

            //add links div
            let linksdiv = document.createElement("div");
            linksdiv.classList.add("links");

                    //add imdb link
                    let imdblink = document.createElement("a");
                    imdblink.setAttribute("href", movie.imdb);
                    imdblink.setAttribute("target", "_blank");

                        //add icon for imdb
                        let imdbicon = document.createElement("img");
                        imdbicon.setAttribute("src", "./assets/imdbicon.png");
                        imdbicon.setAttribute("alt", "IMDB icon");

                        //imdb link appends icon
                        imdblink.append(imdbicon);
                    
                    //add trailer link
                    let trailerlink = document.createElement("a");
                    trailerlink.setAttribute("href", movie.trailer);
                    trailerlink.setAttribute("target", "_blank");    
                        
                        //add icon for imdb
                        let youtubeicon = document.createElement("img");
                        youtubeicon.setAttribute("src", "./assets/youtubeicon.png");
                        youtubeicon.setAttribute("alt", "Youtube icon");

                        //imdb link appends icon
                        trailerlink.append(youtubeicon);

                    //linksdiv appends links
                    linksdiv.append(imdblink);
                    linksdiv.append(trailerlink);
            
            //content appends all components made
            contentdiv.append(tagsdiv);
            contentdiv.append(headingdiv);
            contentdiv.append(descriptiondiv);
            contentdiv.append(castdiv);
            contentdiv.append(hr);
            contentdiv.append(linksdiv);

    //moviecard appends all components made
    moviecard.append(moviethumbnail);
    moviecard.append(contentdiv);


    console.log(moviecard);
    cardscontainer.append(moviecard);
}

function checkGenre(genre) {
    switch (genre) {
        case "Musical":
            return "#C79BB6";
        case "Family":
            return "#E87C58";
        case "Romance":
            return "#F5A9B2";
        case "Sci-fi":
            return "#6F7AAE";
        case "Drama":
            return "#84C9B2";
        case "Thriller":
            return "#9399B9";
        case "Crime":
            return "#3D8C92";
        case "Horror":
            return "#A488B4"
        case "Action":
            return "#D7C65C"
        case "Adventure":
            return "#57904F"
        case "Comedy":
            return "#A75788";
        case "Sitcom":
            return "#E8673C"
        case "Fantasy":
            return "#EF9CB9"
        case "Animation":
            return "#B3D493"
        default:
            return "#AB9685";
    }
}