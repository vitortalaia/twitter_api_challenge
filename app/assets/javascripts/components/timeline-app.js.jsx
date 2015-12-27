var TimelineApp = React.createClass({
  handleSearch: function (username) {
    console.log('TimelineApp: ' +username);
  },

  render: function () {
    return (
      <div className="container">
        <h3 className="container__title">
          {this.props.instructions}
        </h3>

        <Searchbar onSearch={this.handleSearch} />
      </div>
    );
  }
});
