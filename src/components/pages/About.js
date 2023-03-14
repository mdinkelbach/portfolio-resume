import profile from '../../assets/images/profile-pic.jpg'

function About() {
  return (
    <div className='about'>
        <h1>About</h1>
        <div className='profile'>
          <img className="profile-pic" src={profile} />
          <p className="profile-text">Hello, my name is Michael, a student of UTSA's full stack web development bootcamp. Throughout the course I have become familiar with a multitude of front-end and back-end development aspects, my strengths lie in back-end. In the process, I have found that my best strengths lie in back-end, particularly SQL databases. Previous to this, I worked for 7 years in help desk, and have been building my own PCs since high school.</p>
        </div>
    </div>
  );
}

export default About;