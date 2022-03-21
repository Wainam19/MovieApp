export default function MovieList(props) {
  return (
    <div className='d-flex' style={{ gap: "5px" }}>
      {props.movies.map((movie, index) => (
        <div className='card' style={{ width: "18rem" }} key={movie.imdbID}>
          <img
            className='card-img-top'
            src={movie.Poster}
            alt='Card image cap'
          />
          <div className='card-body'>
            <h5 className='card-title'>
              {movie.Title} - ({movie.Year})
            </h5>
          </div>
        </div>
      ))}
    </div>
  );
}
