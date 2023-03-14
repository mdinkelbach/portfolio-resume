import profile from '../../assets/images/profile-pic.png'

function About() {
  return (
    <div className='about'>
        <h1>About</h1>
        <div className='profile'>
          <img className="profile-pic" src={profile} />
          <p className="profile-text">Hello, my name is Michael, a student of UTSA's full stack web development bootcamp. While I am familiar with front-end and back-end development, my strengths lie in back-end, particularly SQL databases. Previous to this I worked for 7 years in help desk, and have been building my own PCs since high school.</p>
        </div>
    </div>
  );
}

export default About;