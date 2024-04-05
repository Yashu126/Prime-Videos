import './index.css'
import Slider from 'react-slick'
import MoviesSlider from '../MoviesSlider'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const settings = {
    infinite: true,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  const actionMovieList = moviesList.filter(
    eachac => eachac.categoryId === 'ACTION',
  )
  const comedyMovieList = moviesList.filter(
    eachco => eachco.categoryId === 'COMEDY',
  )

  return (
    <div className="background-con">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-img"
      />
      <div className="silder-con">
        <div>
          <h1>Action Movies</h1>
          <Slider {...settings}>
            {actionMovieList.map(eachAction => (
              <MoviesSlider key={eachAction.id} movies={eachAction} />
            ))}
          </Slider>
        </div>
        <div>
          <h1>Comedy Movies</h1>
          <Slider {...settings}>
            {comedyMovieList.map(eachComdey => (
              <MoviesSlider key={eachComdey.id} movies={eachComdey} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default PrimeVideo
