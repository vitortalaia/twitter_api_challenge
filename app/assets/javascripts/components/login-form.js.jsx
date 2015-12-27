var LoginForm = React.createClass({
  propTypes: {
    action: React.PropTypes.string.isRequired,
    children: React.PropTypes.object.isRequired,
    csrf_token: React.PropTypes.string.isRequired
  },

  getDefaultProps: function () {
    return {
      utf8: '✓'
    };
  },

  render: function () {
    var emailField = this.props.children.email,
        passwordField = this.props.children.password;

    return (
      <form className="form" method="post" action={this.props.action}>
        <input type="hidden" name="utf8" value={this.props.utf8} />
        <input type="hidden" name="authenticity_token"
          value={this.props.csrf_token} />

        <LabeledField text={emailField.label} htmlFor="user_email">
          <Input
            className="form__control"
            id="user_email"
            type="email"
            name="user[email]" />
        </LabeledField>

        <LabeledField text={passwordField.label} htmlFor="user_password">
          <Input
            className="form__control"
            id="user_password"
            type="password"
            name="user[password]" />
        </LabeledField>

        <button className="button button--block button--large" type="submit">
          {this.props.submitText}
        </button>
      </form>
    );
  }
});
