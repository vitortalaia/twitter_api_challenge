var Input = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
  },

  getDefaultProps: function () {
    return { type: 'text' }
  },

  render: function () {
    return (
      <input
        className={this.props.className}
        id={this.props.id}
        type={this.props.type}
        name={this.props.name}
        defaultValue='' />
    );
  }
});
