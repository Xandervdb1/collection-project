const collection = [
    {
        title: "Lion King",
        director: "Rob Minkoff",
        releasedate: "June 24, 1994",
        releasecountry: "USA",
        duration: "1h 27m",
        agerating: "PG",
        genres: ["Musical", "Family"],
        cast: ["Jeremy Irons", "James Earl Jones", "Matthew Broderick", "Rowan Atkinson", "Robert Guillaume"],
        thumbnail: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTzK5hNoRPkiTZdYpWMCiD5J5pwMnLVxnMCKftPXcOj5i0gouCb",
        trailer: "https://www.youtube.com/watch?v=lFzVJEksoDY",
        imdb: "https://www.imdb.com/title/tt0110357/?ref_=nv_sr_srsg_0",
        imdbrating: "8.5/10",
        description: "Disney's The Lion King is about a young lion named Simba, who is the crown prince of an African Savanna. When his father dies in an accident staged by his uncle, Simba is made to feel responsible for his father's death and must overcome his fear of taking responsibility as the rightful heir to the throne."
    },
    {
        title: "Her",
        director: "Spike Jonze",
        releasedate: "October 12, 2013",
        releasecountry: "USA",
        duration: "2h 6m",
        agerating: "R",
        genres: ["Romance", "Sci-fi"],
        cast: ["Joaquin Phoenix", "Spike Jonze", "Scarlett Johansson", "Rooney Mara", "Olivia Wilde"],
        thumbnail: "https://m.media-amazon.com/images/M/MV5BMjA1Nzk0OTM2OF5BMl5BanBnXkFtZTgwNjU2NjEwMDE@._V1_.jpg",
        trailer: "https://www.youtube.com/watch?v=dJTU48_yghs",
        imdb: "https://www.imdb.com/title/tt1798709/?ref_=ttmi_tt",
        imdbrating: "8.0/10",
        description: "In a near future, a lonely writer develops an unlikely relationship with an operating system designed to meet his every need. Theodore is a lonely man in the final stages of his divorce. When he's not working as a letter writer, his down time is spent playing video games and occasionally hanging out with friends."
    },
    {
        title: "Fight Club",
        director: "David Fincher",
        releasedate: "September 10, 1999",
        releasecountry: "Venice",
        duration: "2h 19m",
        agerating: "R",
        genres: ["Drama", "Thriller"],
        cast: ["Brad Pitt", "Helena Bonham Carter", "Jared Leto", "Meat Loaf", "Holt McCallany"],
        thumbnail: "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
        trailer: "https://www.youtube.com/watch?v=qtRKdVHc-cE",
        imdb: "https://www.imdb.com/title/tt0137523/?ref_=fn_al_tt_1",
        imdbrating: "8.8/10",
        description: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more. A nameless first person narrator (Edward Norton) attends support groups in attempt to subdue his emotional state and relieve his insomniac state."
    },
    {
        title: "Peaky Blinders",
        director: "Otto Bathurst",
        releasedate: "September 12, 2013",
        releasecountry: "USA",
        duration: "6 seasons",
        agerating: "PG-18",
        genres: ["Drama", "Crime"],
        cast: ["Cillian Murphy", "Paul Anderson", "Tom Hardy", "Helen McCrory", "Sophie Rundle"],
        thumbnail: "https://m.media-amazon.com/images/M/MV5BZjYzZDgzMmYtYjY5Zi00YTk1LThhMDYtNjFlNzM4MTZhYzgyXkEyXkFqcGdeQXVyMTE5NDQ1MzQ3._V1_.jpg",
        trailer: "https://www.youtube.com/watch?v=oVzVdvGIC7U",
        imdb: "https://www.imdb.com/title/tt2442560/?ref_=nv_sr_srsg_0",
        imdbrating: "8.8/10",
        description: "A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby. Thomas Shelby and his brothers return to Birmingham after serving in the British Army during WWI."
    },
    {
        title: "Black Mirror",
        director: "James Hawes",
        releasedate: "December 4, 2011",
        releasecountry: "UK",
        duration: "5 seasons",
        agerating: "PG-17",
        genres: ["Sci-fi", "Drama"],
        cast: ["Bryce Dallas Howard", "Hayley Atwell", "Michaela Coel", "Jon Hamm", "Anthony Mackie"],
        thumbnail: "https://m.media-amazon.com/images/M/MV5BYTM3YWVhMDMtNjczMy00NGEyLWJhZDctYjNhMTRkNDE0ZTI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
        trailer: "https://www.youtube.com/watch?v=V0XOApF5nLU",
        imdb: "https://www.imdb.com/title/tt2085059/?ref_=nv_sr_srsg_0",
        imdbrating: "8.8/10",
        description: "Set in a world only minutes from our own, 'Black Mirror', a UK and USA non-hosted anthology series; unveils how modern technologies can backfire and be used against their makers, every episode set in a slightly different reality with different characters combating different types of technologies."
    },
    {
        title: "The Platform",
        director: "Galder Gaztelu-Urrutia",
        releasedate: "November 8, 2019",
        releasecountry: "Spain",
        duration: "1h 34m",
        agerating: "TV-MA",
        genres: ["Thriller", "Horror"],
        cast: ["Alexandra Masangkay", "Iván Massagué", "Zorion Eguileor", "Antonia San Juan", "Zihara Llana"],
        thumbnail: "https://m.media-amazon.com/images/M/MV5BOTMyYTIyM2MtNjQ2ZC00MWFkLThhYjQtMjhjMGZiMjgwYjM2XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
        trailer: "https://www.youtube.com/watch?v=RlfooqeZcdY",
        imdb: "https://www.imdb.com/title/tt8228288/?ref_=nv_sr_srsg_0",
        imdbrating: "7.0/10",
        description: "In a dystopian near future with absence of resources, people can freely to go into The Hole, a vertical underground jail where after an interview to check the possible admission, the volunteer passes a determined time in exchange to acquire more social status."
    },
    {
        title: "Doctor Strange",
        director: "Scott Derrickson",
        releasedate: "May 2, 2022",
        releasecountry: "USA",
        duration: "1h 55m",
        agerating: "PG-13",
        genres: ["Action", "Adventure"],
        cast: ["Benedict Cumberbatch", "Benedict Wong", "Rachel McAdams", "Chiwetel Ejiofor", "Tilda Swinton"],
        thumbnail: "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_.jpg",
        trailer: "https://www.youtube.com/watch?v=h7gvFravm4A",
        imdb: "https://www.imdb.com/title/tt1211837/?ref_=nv_sr_srsg_0",
        imdbrating: "7.5/10",
        description: "Marvel's 'Doctor Strange' follows the story of the talented neurosurgeon Doctor Stephen Strange who, after a tragic car accident, must put ego aside and learn the secrets of a hidden world of mysticism and alternate dimensions."
    }, 
    {
        title: "Thor: Ragnarok",
        director: "Taika Waititi",
        releasedate: "October 10, 2017",
        releasecountry: "USA",
        duration: "2h 10m",
        agerating: "PG-13",
        genres: ["Action", "Sci-fi"],
        cast: ["Cate Blanchett", "Chris Hemsworth", "Jeff Goldblum", "Taika Waititi", "Tessa Thompson"],
        thumbnail: "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg",
        trailer: "https://www.youtube.com/watch?v=ue80QwXMRHg",
        imdb: "https://www.imdb.com/title/tt3501632/?ref_=nv_sr_srsg_0",
        imdbrating: "7.9/10",
        description: "Away from his hometown of Asgard, Thor falls into the clutches of the fire demon Surtur, from which he finds it difficult to free himself without his hammer Mjölnir. A fight for time begins for Thor, because Hela has been released from prison after thousands of years."
    }, 
    {
        title: "Breaking Bad",
        director: "Vince Gilligan",
        releasedate: "January 20, 2008",
        releasecountry: "USA",
        duration: "5 seasons",
        agerating: "PG-17",
        genres: ["Drama", "Crime"],
        cast: ["Bryan Cranston", "Aaron Paul", "Anna Gun", "Dean Norris", "RJ Mitte"],
        thumbnail: "https://m.media-amazon.com/images/M/MV5BYTU3NWI5OGMtZmZhNy00MjVmLTk1YzAtZjA3ZDA3NzcyNDUxXkEyXkFqcGdeQXVyODY5Njk4Njc@._V1_.jpg",
        trailer: "https://www.youtube.com/watch?v=HhesaQXLuRY",
        imdb: "https://www.imdb.com/title/tt0903747/?ref_=nv_sr_srsg_0",
        imdbrating: "9.5/10",
        description: "Created by Vince Gilligan, the series follows the exploits of Walter White, a modest high school chemistry teacher, who discovers a new purpose in life when he learns he has terminal cancer and turns to a life of crime to provide for his family."
    }, 
    {
        title: "The Office",
        director: "Randall Einhorn",
        releasedate: "March 24, 2005",
        releasecountry: "USA",
        duration: "9 seasons",
        agerating: "PG-14",
        genres: ["Comedy", "Sitcom"],
        cast: ["Steve Carell", "John Krasinksi", "Jenna Fischer", "Rainn Wilson", "Ellie Kemper"],
        thumbnail: "https://m.media-amazon.com/images/M/MV5BMDNkOTE4NDQtMTNmYi00MWE0LWE4ZTktYTc0NzhhNWIzNzJiXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_.jpg",
        trailer: "https://www.youtube.com/watch?v=tNcDHWpselE",
        imdb: "https://www.imdb.com/title/tt0386676/?ref_=fn_al_tt_1",
        imdbrating: "9.0/10",
        description: "This mockumentary follows the everyday lives of the manager and the employees he 'manages.' The crew follows the employees around 24/7 and captures their quite humorous and bizarre encounters as they will do what it takes to keep the company thriving. This U.S. adaptation -- set at a paper company in Scranton, Pa."
    },
    {
        title: "Shameless",
        director: "John Wells",
        releasedate: "January 9, 2011",
        releasecountry: "USA",
        duration: "11 seasons",
        agerating: "PG-18",
        genres: ["Comedy", "Drama"],
        cast: ["Emmy Rossum", "William H. Macy", "Jeremy Allen White", "Cameron Monaghan", "Ethan Cutkosky"],
        thumbnail: "https://m.media-amazon.com/images/M/MV5BZDgxNjQ2MjMtMjk2Yi00M2Q2LWI0ZDktOGM1NWI5YWUzMjk4XkEyXkFqcGdeQXVyOTA3MTMyOTk@._V1_.jpg",
        trailer: "https://www.youtube.com/watch?v=9tvkYS5cA58",
        imdb: "https://www.imdb.com/title/tt1586680/?ref_=nv_sr_srsg_0",
        imdbrating: "8.6/10",
        description: "Shameless is the story of a family of six kids and their drunk and selfish father. The eldest daughter Fiona has to raise the rest of the family on her own. They need to steal food and steal money to live while their father takes everything and offers nothing."
    }, 
    {
        title: "Howl's Moving Castle",
        director: "Hayao Miyazaki",
        releasedate: "5 September 2004",
        releasecountry: "Venice",
        duration: "1h 59m",
        agerating: "PG-12",
        genres: ["Fantasy", "Adventure"],
        cast: ["Christian Bale", "Takuya Kimura", "Chieko Baisho", "Tatsuya Gashuin", "Emily Mortimer"],
        thumbnail: "https://m.media-amazon.com/images/M/MV5BMTY1OTg0MjE3MV5BMl5BanBnXkFtZTcwNTUxMTkyMQ@@._V1_.jpg",
        trailer: "https://www.youtube.com/watch?v=iwROgK94zcM",
        imdb: "https://www.imdb.com/title/tt0347149/?ref_=tt_mv_close",
        imdbrating: "8.2/10",
        description: "A love story between an 18-year-old girl named Sophie, cursed by a witch into an old woman's body, and a magician named Howl. Under the curse, Sophie sets out to seek her fortune, which takes her to Howl's strange moving castle. In the castle, Sophie meets Howl's fire demon, named Karishifâ."
    },
    {
        title: "Chainsaw Man",
        director: "Ryū Nakayama",
        releasedate: "October 12, 2022",
        releasecountry: "Japan",
        duration: "1 season",
        agerating: "PG-18",
        genres: ["Animation", "Action"],
        cast: ["Kikunosuke Toya", "Tomori Kusunoki", "Fairouz Ai", "Shogo Sakata", "Kenjiro Tsuda"],
        thumbnail: "https://m.media-amazon.com/images/M/MV5BNGFkZDRlNWEtMDdlMy00MGUyLWJhOGMtOTU0MTA2YTM1M2QwXkEyXkFqcGdeQXVyMTUzNjM4ODE1._V1_.jpg",
        trailer: "https://www.youtube.com/watch?v=l96zmDlWCBk",
        imdb: "https://www.imdb.com/title/tt13616990/?ref_=nv_sr_srsg_0",
        imdbrating: "8.6/10",
        description: "Chainsaw Man follows the story of Denji, an impoverished young man who makes a contract that fuses his body with that of a dog-like devil named Pochita, granting him the ability to transform parts of his body into chainsaws."
    },
    {
        title: "WALL-E",
        director: "Andrew Stanton",
        releasedate: "June 23, 2008",
        releasecountry: "USA",
        duration: "1h 43m",
        agerating: "G",
        genres: ["Family", "Adventure"],
        cast: ["Andrew Stanton", "Ben Burtt", "Elissa Knight", "John Ratzenberger", "Jeff Garlin"],
        thumbnail: "https://m.media-amazon.com/images/M/MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@._V1_.jpg",
        trailer: "https://www.youtube.com/watch?v=3Mi62VKDhm0",
        imdb: "https://www.imdb.com/title/tt0910970/?ref_=fn_al_tt_3",
        imdbrating: "8.4/10",
        description: "WALL•E (Waste Allocation Load Lifter Earth-Class) is the last robot left on Earth, programmed to clean up the planet, one trash cube at a time. However, after 700 years, he's developed one little glitch—a personality. He's extremely curious, highly inquisitive, and a little lonely."
    }, 
    {
        title: "Big Hero 6",
        director: "Chris Williams",
        releasedate: "October 23, 2014",
        releasecountry: "Japan",
        duration: "1h 42m",
        agerating: "PG",
        genres: ["Family", "Adventure"],
        cast: ["Ryan Potter", "Scott Adsit", "Maya Rudolph", "T.J. Miller", "Jamie Chung"],
        thumbnail: "https://m.media-amazon.com/images/M/MV5BMDliOTIzNmUtOTllOC00NDU3LWFiNjYtMGM0NDc1YTMxNjYxXkEyXkFqcGdeQXVyNTM3NzExMDQ@._V1_.jpg",
        trailer: "https://www.youtube.com/watch?v=z3biFxZIJOQ",
        imdb: "https://www.imdb.com/title/tt2245084/?ref_=nv_sr_srsg_0",
        imdbrating: "7.8/10",
        description: "Big Hero 6 tells the story of Hiro Hamada, a young robotics prodigy, and Baymax, his late-brother Tadashi's healthcare-provider robot, who form a superhero team to combat a masked villain who is responsible for Tadashi's death."
    }, 
    {
        title: "Ozark",
        director: "Jason Bateman",
        releasedate: "July 21, 2017",
        releasecountry: "USA",
        duration: "4 seasons",
        agerating: "PG-16",
        genres: ["Crime", "Drama"],
        cast: ["Jason Bateman", "Laura Linney", "Julia Garner", "Sofia Hublitz", "Skylar Gaertner"],
        thumbnail: "https://m.media-amazon.com/images/M/MV5BZDUxMWNlMTUtYTljZS00MTE0LTlkYjktOTU1ODZjYzBhMTk0XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
        trailer: "https://www.youtube.com/watch?v=5hAXVqrljbs",
        imdb: "https://www.imdb.com/title/tt5071412/?ref_=fn_al_tt_1",
        imdbrating: "8.5/10",
        description: "A financial advisor drags his family from Chicago to the Missouri Ozarks, where he must launder money to appease a drug boss. The Byrdes and their teenage kids Charlotte and Jonah look like, and mostly are, an ordinary family with ordinary lives."
    }
];

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

                //add genre tags
                let genres = movie.genres
                for (let genre of genres) {
                    let genrediv = document.createElement("div");
                    genrediv.classList.add("tag", "genre");
                    genrediv.innerHTML = genre
                    //tags div append genre divs
                    tagsdiv.append(genrediv);
                }
                
                //add duration tag
                let durationdiv = document.createElement("div");
                durationdiv.classList.add("tag", "duration");
                durationdiv.innerHTML = movie.duration;

                //tags div append duration div
                tagsdiv.append(durationdiv);
            
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
                        imdblink.append(youtubeicon);

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