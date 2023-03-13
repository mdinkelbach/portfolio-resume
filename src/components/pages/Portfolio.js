import password from '../../assets/images/password.png'
import workDay from '../../assets/images/work-day.png'
import weather from '../../assets/images/weather.png'
import conversion from '../../assets/images/gw2.png'
import techBlog from '../../assets/images/tech-blog.png'
import daze from '../../assets/images/doggy-daze.png'

function Portfolio() {
  return (
    <div className="portfolio">
        <h1>Portfolio</h1>
        <p>Here you will find links to what I believe to be my top 6 works, in the order they were created.</p>
        <div className="portfolio-list">
          <div className="portfolio-item">
            <a href="https://mdinkelbach.github.io/password-generator/">
            Password Generator
              <img src={password} className="portfolio-image img-thumbnail"></img>
            </a>
            <a href="https://github.com/mdinkelbach/password-generator">
              GitHub Repo
            </a>
          </div>
          <div className="portfolio-item">
            <a href="https://mdinkelbach.github.io/work-day-scheduler/">
            Work Day Scheduler
            <img src={workDay} className="portfolio-image img-thumbnail"></img>
            </a>
            <a href="https://github.com/mdinkelbach/work-day-scheduler">
              GitHub Repo
            </a>
          </div>
          <div className="portfolio-item">
            <a href="https://mdinkelbach.github.io/weather-forecast/">
            Weather Forcaster
            <img src={weather} className="portfolio-image img-thumbnail"></img>
            </a>
            <a href="https://github.com/mdinkelbach/weather-forecast">
              GitHub Repo
            </a>
          </div>
          <div className="portfolio-item">
            <a href="https://mdinkelbach.github.io/gw2-gold-conversion/">
            Guild Wars 2 Gold Conversion
            <img src={conversion} className="portfolio-image img-thumbnail"></img>
            </a>
            <a href="https://github.com/mdinkelbach/gw2-gold-conversion">
              GitHub Repo
            </a>
          </div>
          <div className="portfolio-item">
            <a href="https://tech-blog-mdinkelbach.herokuapp.com/">
            Tech Blog
            <img src={techBlog} className="portfolio-image img-thumbnail"></img>
            </a>
            <a href="https://github.com/mdinkelbach/tech-blog">
              GitHub Repo
            </a>
          </div>
          <div className="portfolio-item">
            <a href="https://ancient-plains-63296.herokuapp.com/">
            Doggy Daze
            <img src={daze} className="portfolio-image img-thumbnail"></img>
            </a>
            <a href="https://github.com/RosalvaMartinez/project">
              GitHub Repo
            </a>
          </div>
        </div>
    </div>
  );
}

export default Portfolio;