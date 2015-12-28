var Tweet = React.createClass({
  propTypes: {
    content: React.PropTypes.object.isRequired
  },

  render: function () {
    var formattedDate = moment(this.props.content.created_at)
                        .format('MMM D, YYYY - hh:mm A');

    return (
      <li className="tweet">
        <p className="tweet__text">{this.props.content.text}</p>

        <time className="tweet__date" dateTime={this.props.content.created_at}>
          {formattedDate}
        </time>
      </li>
    );
  }
});
