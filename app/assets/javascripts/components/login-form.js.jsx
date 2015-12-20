var LoginForm = React.createClass({
  propTypes: {
    action: React.PropTypes.string.isRequired,
    children: React.PropTypes.object.isRequired,
    csrf_token: React.PropTypes.string.isRequired
  },

  getDefaultProps: function () {
    return {
      method: 'post',
      utf8: '✓'
    };
  },

  render: function () {
    var emailField = this.props.children.email,
        passwordField = this.props.children.password;

    return (
      <form className="form" method={this.props.method}
        action={this.props.action}>

        <HiddenInput name="utf8" value={this.props.utf8} />
        <HiddenInput name="authenticity_token" value={this.props.csrf_token} />

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

        <Button className="button--block button--large"
          text={this.props.submitText} type="submit" />
      </form>
    );
  }
});
