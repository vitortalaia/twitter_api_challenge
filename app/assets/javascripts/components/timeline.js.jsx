var Timeline = React.createClass({
  propTypes: {
    tweets: React.PropTypes.array.isRequired,
    username: React.PropTypes.string.isRequired
  },

  render: function () {
    return (
      <section className="timeline">
        <h3 className="timeline__title">@{this.props.username} timeline</h3>

        <ol className="timeline__tweets">
          {this.props.tweets.map(function (tweet) {
            return <Tweet content={tweet} key={tweet.id} />;
          })}
        </ol>
      </section>
    );
  }
});
