var LabeledField = React.createClass({
  propTypes: {
    text: React.PropTypes.string.isRequired
  },

  render: function () {
    return (
      <div className="form__field">
        <label className={this.props.className} htmlFor={this.props.htmlFor}>
          {this.props.text}:
        </label>

        {this.props.children}
      </div>
    );
  }
});
