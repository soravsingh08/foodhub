import React from "react";
import ShimmerAbout from "./ShimmerAbout";


class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      founder: null,
      team: [],
    };
  }

  async componentDidMount() {
    // ===== FOUNDER =====
    const founderRes = await fetch("https://api.github.com/users/soravsingh08");
    const founderData = await founderRes.json();

    this.setState({ founder: founderData });

    // ===== TEAM  =====
    const teamUsernames = [ 
      "tanvi96",
      "shubheksha",
      "priyanshisingh",
      "akshaymarch7",
      "anuraghazra",
      "riteshbanerjee",
    ];

    for (let i = 0; i < teamUsernames.length; i++) {
      const res = await fetch(
        `https://api.github.com/users/${teamUsernames[i]}`
      );

      const data = await res.json();

      this.setState({
        team: [...this.state.team, data],
      });
    }
  }


  render() {
    const { founder, team } = this.state;
    
    if(!founder || team.length === 0){
      return <ShimmerAbout/>
    }
    return (
      <div className="about-page">
        {/* ABOUT FOODHUB */}
        <h1 className="about-title">About FoodHub</h1>

        <p className="about-text">
          FoodHub is a developer-led Indian startup built by passionate
          engineers. The platform is designed to explore restaurants, view
          menus, and understand how a real-world React application works.
        </p>

        <p className="about-text">
          This project focuses on clean UI, scalable structure, and practical
          frontend development using React.
        </p>

        {/* FOUNDER SECTION */}
        <h2 className="section-title">Founder</h2>

        {founder && (
          <div className="founder-card">
            <img src={founder.avatar_url} alt={founder.name} />

            <div className="founder-info">
              <h3>{founder.name}</h3>
              <p>{founder.location || "India"}</p>
              <p className="bio">{founder.bio}</p>

              <a href={founder.html_url} target="_blank" rel="noreferrer">
                View GitHub
              </a>
            </div>
          </div>
        )}

        {/* TEAM SECTION */}
        <h2 className="section-title">Meet Our Team</h2>

        <div className="team-grid">
          {team.map((user) => (
            <div key={user.id} className="team-card">
              <img src={user.avatar_url} alt={user.name} />

              <div>
                <h4>{user.name || user.login}</h4>
                <p>{user.location || "India"}</p>

                <a href={user.html_url} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default About;
