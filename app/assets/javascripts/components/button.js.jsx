var Button = React.createClass({
  propTypes: {
    text: React.PropTypes.string.isRequired
  },

  getDefaultProps: function () {
    return { type: 'button' };
  },

  render: function () {
    return (
      <button className={"button " +this.props.className}
        type={this.props.type}>
        {this.props.text}
      </button>
    );
  }
});
