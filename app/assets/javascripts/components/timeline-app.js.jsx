var TimelineApp = React.createClass({
  getInitialState: function () {
    return {
      isSearching: false,
      firstPrint: true,
      content: []
    };
  },

  handleSearch: function (username) {
    console.log('TimelineApp: ' +username);
  },

  render: function () {
    if (!this.state.isLoading && this.state.content.length) {
      var userProfile = (
        <UserProfile
          name="Vitor Talaia"
          username="vitortalaia"
          description="Writing code at @Codeminer42; Formula One fan. Don't worry, I'm pushing like hell!"
          tweets={24809}
          following={1838}
          followers={737}
          image="https://pbs.twimg.com/profile_images/609558297537024000/wp8agzeN_200x200.jpg"
          banner="https://pbs.twimg.com/profile_banners/56174169/1428202948"
        />
      );
    }

    if (this.state.isLoading) {
      var loading = (
        <p className="notice notice--loading"> Loading timeline</p>
      );
    }

    if (this.state.searchFailed) {
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
      </div>
    );
  }
});
