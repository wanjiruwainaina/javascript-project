{  const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MDEzZTQ5ZjBkNmU3M2JlNTM5YWM5YjFiYzNmYWIxOSIsInN1YiI6IjY2NmFiNTRmNGUzOTM4NDU2YWVhNWY4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2LCRgdp9OXVpyzvrrjB3z9uHIc7iPJlWxoa5jr9SQys'
        }
      };
    async function getData(){
        const response =  await  fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=3&sort_by=popularity.desc&genre=animation', options)
        const data = await response.json()
        console.log(data)
        return data;
    }
     async function displayData(){
        container = document.getElementById("moviesContainer")
        container.innerHTML = ''
        content = ""
        data = await getData()
        movies = data.results
        console.log(movies)
        movies.forEach(movie => {
            content +=  `
                <div>
                    <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}"/>
                    <h1>${movie.title}</h1>
                </div>
            `
        });
        container.innerHTML = content
    }
    displayData()
}





















