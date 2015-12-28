var UserProfile = React.createClass({
  propTypes: {
    user: React.PropTypes.object.isRequired,
  },

  render: function () {
    var user = this.props.user,
        imageHost = 'http://' + user.profile_image_url_https.host,
        imagePath = user.profile_image_url_https.path.replace(/normal/, '200x200'),
        image = imageHost + imagePath;
    
    if (user.profile_banner_url) {
      var banner = imageHost + user.profile_banner_url.path.replace(/\/web/, '');
    }

    return (
      <section className="user-profile">
        <div
          className="user-profile__banner"
          style={{backgroundImage: 'url(' +banner+ ')'}} >
        </div>

        <div className="user-profile__info">
          <img className="user-profile__image" src={image} />
          <h2 className="user-profile__name">
            {user.name}

            <small className="user-profile__username">
              {user.screen_name}
            </small>
          </h2>

          <p className="user-profile__description">{user.description}</p>

          <ul className="user-profile__stats">
            <li className="user-profile__stats__item">
              <span className="user-profile__stats__label">Tweets</span>
              
              <span className="user-profile__stats__value">
                {user.statuses_count}
              </span>
            </li>

            <li className="user-profile__stats__item">
              <span className="user-profile__stats__label">Following</span>
              
              <span className="user-profile__stats__value">
                {user.friends_count}
              </span>
            </li>

            <li className="user-profile__stats__item">
              <span className="user-profile__stats__label">Followers</span>
              
              <span className="user-profile__stats__value">
                {user.followers_count}
              </span>
            </li>
          </ul>
        </div>        
      </section>
    );
  }
});
