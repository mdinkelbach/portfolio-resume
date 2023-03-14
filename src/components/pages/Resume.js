function Resume() {
  return (
    <div className="resume">
        <h1>Resume</h1>
        <p className="resume-text">Download a copy of my resume <a className="resume-link" href="https://drive.google.com/uc?export=download&id=1RnB-lg-8Vs7Dmf8hqx88G2hv-8wRYU0T">here</a></p>
        <div className="proficiencies">
          <div className="proficiencies-front">
          <h3>Front-End Proficiencies</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>JQuery</li>
              <li>React</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          <div className="proficiencies-back">
            <h3>Back-End Proficiencies</h3>
            <ul>
              <li>APIs</li>
              <li>Node</li>
              <li>Express</li>
              <li>MySQL, Sequalize</li>
              <li>MongoDB, Mongoose</li>
              <li>GraphQL</li>
            </ul>
          </div>
        </div>
    </div>
  );
}

export default Resume;