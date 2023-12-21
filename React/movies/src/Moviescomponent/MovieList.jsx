import React from 'react';
//1.  go to this websitehttps://www.themoviedb.org/
// signup to tmdb 
// verify your emailId
// go to account page -> settings-> api
// create -> developer-> request api -> form fill-> you will get an api key
//2. go to this website https://developers.themoviedb.org/3/getting-started/introduction
// search for -> trending-> tryout-> 
// put your api key, media -> movies, time_window:week 
// then you will get the link to get trending  movies -> copy and use it in useEffect
//movieList
function MovieList(props) {
    let [movies, setMovie] = React.useState("");
    // State for input text
    let [value, setValue] = React.useState("");
    // State for favourite movies
    let [favourites, setFavourite] = React.useState([]);
    function setText(e) {
        let newValue = e.target.value;
        setValue(newValue);
    }
    
    // check favourite movies h ya nhi
    function checkContainFavHandlers(movieId) {
        for (let i = 0; i < favourites.length; i++) {
            if (favourites[i].id === movieId) {
                return true
            }
        }
        return false;

    }
    
    
    // delete movie from favourite list
    function deleteFavoriteHandlers(movieId) {
        let filteredFavorite =
            favourites.filter((movieObj) => {

                // 
                return movieObj.id != movieId;
            })

        let prevStrArray = localStorage.getItem("favourites") || "[]";
        let prevArray = JSON.parse(prevStrArray);
        prevArray = prevArray.filter((movieObj) => {
            return movieObj.id != movieId;
        })
        prevArray = JSON.stringify(prevArray);
        localStorage.setItem("favourites", prevArray);
        // remove 
        setFavourite(filteredFavorite);
    }

// add in favourite movie arr
    function setToFavouriteHandlers(movieId) {
        console.log("add", movieId);
        for (let i = 0; i < movies.length; i++) {
            let movieObj = movies[i];
            if (movieObj.id === movieId) {
                // [..favorites,movieobj]
                let newfavourites = [...favourites];
                newfavourites.push(movieObj);
                
                
                // localstorage add
                let prevStrArray = localStorage.getItem("favourites") || "[]";
                let prevArray = JSON.parse(prevStrArray);
                prevArray.push(movieObj);
                prevArray = JSON.stringify(prevArray);
                localStorage.setItem("favourites", prevArray);
                setFavourite(newfavourites);
                break;
            }
        }
    }


    
// use effect for fetch data
    React.useEffect(function fn() {
        async function fetchData() {
            // it is used to make request
            let response = await fetch
                ("https://api.themoviedb.org/3/trending/movie/week?api_key=15f09b70803ac78ccd0acdeaa38ade30&page=" + props.pageNo);
            // response -> you will get in buffer -> convert it into json
            let data = await response.json();
            let movies = data.results;
            setMovie(movies);
        }
        fetchData();
    }, [props.pageNo]);


    // useEffect for local storage
    React.useEffect(function () {
        let prevStrArray = localStorage.getItem("favourites") || "[]";
        let prevArray = JSON.parse(prevStrArray);
        setFavourite(prevArray)
    },[])

    // plain js
    let searchedMovies = filterLogic(value, movies);
    console.log("gdc"+searchedMovies);
    // {console.log("dsghfbhdjkfg")}
    // console.log("fav", favourites);


     // serch a movie, if perticular movie is find then it return other wise return all movies on page one 1
    function filterLogic(searchText, movieArray) {
    let filteredMovieArray = [];
    for (let i = 0; i < movieArray.length; i++) {
        let upperSearchText = searchText.toUpperCase();
        let movieName = movieArray[i].original_title;
        let upperText = movieName.toUpperCase();
        let ans = upperText.includes(upperSearchText);
        if (ans === true) {
            filteredMovieArray.push(movieArray[i]);
        }
    }
    return filteredMovieArray;
   }

    return (
        // you can recieve themovies array and filter it accoring to you search text 
        // and show only filterd movies 
        <>
        <div className='flexSerchBox'> 
            <h2>Trending Movies</h2>
            <input className='SearchBox' onChange={setText} value={value}></input>
            </div>
           
            <hr />
            {
                movies === "" ? <h2>Loading Movies</h2 > :
                    <div className="trending_box">

                        {/* ask why travse on serch Movies */}
                        {searchedMovies.map(function (movieObj, idx) {
                            return (
                                <div key={idx} className="poster_box">
                                    <h2>{movieObj.original_title}</h2>
                                    <img src={"https://image.tmdb.org/t/p/w500/" + movieObj.poster_path} className="poster_img"></img>
                                    {
                                        checkContainFavHandlers(movieObj.id) == true ?
                                        // agar true aye to x ka mork show hoga.
                                            <i className="fa-solid fa-xmark"
                                            // 
                                                onClick={() => { deleteFavoriteHandlers(movieObj.id) }}
                                            ></i> :
                                            <i className="fa-solid fa-face-grin-hearts"
                                                onClick={() => { setToFavouriteHandlers(movieObj.id) }}
                                            ></i>
                                    }
                                    <></>
                                </div>
                            )
                        })}
                    </div>
            }
        </>
    )
}

export default MovieList;