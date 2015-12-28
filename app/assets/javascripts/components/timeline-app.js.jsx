var TimelineApp = React.createClass({
  getInitialState: function () {
    return {
      isSearching: false,
      content: []
    };
  },

  handleSearch: function (username) {
    var _this = this;

    var searchRequest = $.ajax({
      url: 'timeline/' +username,
      beforeSend: function () {
        _this.setState({
          isSearching: true,
          searchFailed: false
        });
      }
    });

    searchRequest.done(function (content) {
      _this.setState({
        content: content,
        isSearching: false,
      });
    });

    searchRequest.fail(function (jqXHR) {
      _this.setState({
        content: [],
        isSearching: false,
        searchFailed: true,
        failMessage: jqXHR.responseJSON.message
      });
    });
  },

  render: function () {
    if (!this.state.isSearching && this.state.content.length) {
      var user = this.state.content[0].user,
          userProfile = <UserProfile user={user} />,
          userTimeline = <Timeline
            tweets={this.state.content}
            username={user.screen_name} />;
    }

    if (this.state.isSearching) {
      var loading = (
        <p className="notice notice--loading">Loading timeline</p>
      );
    }

    if (!this.state.isSearching && this.state.searchFailed) {
      var notice = (
        <p className="notice">{this.state.failMessage}</p>
      );
    }

    return (
      <div className="container">
        <h3 className="container__title">
          {this.props.instructions}
        </h3>

        <Searchbar onSearch={this.handleSearch} />

        { loading }

        { notice }

        { userProfile }

        { userTimeline }
      </div>
    );
  }
});
