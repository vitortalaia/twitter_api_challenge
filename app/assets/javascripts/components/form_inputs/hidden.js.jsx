var HiddenInput = React.createClass({
  render: function () {
    return (
      <input type="hidden" name={this.props.name} value={this.props.value} />
    );
  }
});
