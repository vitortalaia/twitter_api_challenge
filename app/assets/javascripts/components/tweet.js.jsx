var Tweet = React.createClass({
  propTypes: {
    content: React.PropTypes.object.isRequired
  },

  render: function () {
    var _this = this;
        userMentions = this.props.content.user_mentions,
        parsedText = this.props.content.text,
        formattedDate = moment(this.props.content.created_at)
                        .format('MMM D, YYYY - hh:mm A');


    userMentions.forEach(function (mention) {
      var username = mention.screen_name,
          pattern = new RegExp("@" +username),
          link = '<a href="https://twitter.com/' +username+ '">@'
                 +username+ '</a>';

      parsedText = parsedText.replace(pattern, link);
    });

    return (
      <li className="tweet">
        <p
          className="tweet__text"
          dangerouslySetInnerHTML={{__html: parsedText}} />

        <time className="tweet__date" dateTime={this.props.content.created_at}>
          {formattedDate}
        </time>
      </li>
    );
  }
});
