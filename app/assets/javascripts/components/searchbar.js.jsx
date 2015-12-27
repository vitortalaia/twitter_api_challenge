var Searchbar = React.createClass({
  propTypes: {
    onSearch: React.PropTypes.func.isRequired
  },

  handleKeyUp: function (event) {
    if (event.keyCode === 13 && event.target.value.length) {
      var username = event.target.value;

      this.props.onSearch(username);
    }
  },

  render: function () {
    return (
      <section className="searchbar">
        <span className="searchbar__addon">@</span>
        <input
          className="searchbar__input"
          onKeyUp={this.handleKeyUp} />
      </section>
    );
  }
});
