var UserProfile = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    username: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
    tweets: React.PropTypes.number.isRequired,
    following: React.PropTypes.number.isRequired,
    followers: React.PropTypes.number.isRequired,
    image: React.PropTypes.string,
    banner: React.PropTypes.string
  },

  render: function () {
    return (
      <section className="user-profile">
        <div
          className="user-profile__banner"
          style={{backgroundImage: 'url(' +this.props.banner+ ')'}} >
        </div>

        <div className="user-profile__info">
          <img className="user-profile__image" src={this.props.image} />
          <h2 className="user-profile__name">
            {this.props.name}

            <small className="user-profile__username">
              {this.props.username}
            </small>
          </h2>

          <p className="user-profile__description">{this.props.description}</p>

          <ul className="user-profile__stats">
            <li className="user-profile__stats__item">
              <span className="user-profile__stats__label">Tweets</span>
              
              <span className="user-profile__stats__value">
                {this.props.tweets}
              </span>
            </li>

            <li className="user-profile__stats__item">
              <span className="user-profile__stats__label">Following</span>
              
              <span className="user-profile__stats__value">
                {this.props.following}
              </span>
            </li>

            <li className="user-profile__stats__item">
              <span className="user-profile__stats__label">Followers</span>
              
              <span className="user-profile__stats__value">
                {this.props.followers}
              </span>
            </li>
          </ul>
        </div>        
      </section>
    );
  }
});
