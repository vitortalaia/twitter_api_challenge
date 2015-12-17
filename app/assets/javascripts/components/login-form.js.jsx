var LoginForm = React.createClass({
  propTypes: {
    action: React.PropTypes.string.isRequired,
    children: React.PropTypes.object.isRequired
  },

  getDefaultProps: function () {
    return {
      method: 'post',
      utf8: '✓',
      csrf_token: $('head').find('meta[name=csrf-token]').attr('content')
    };
  },

  render: function () {
    var emailField = this.props.children.email,
        passwordField = this.props.children.password;

    return (
      <form method={this.props.method} action={this.props.action}>
        <HiddenInput name="utf8" value={this.props.utf8} />
        <HiddenInput name="authenticity_token" value={this.props.csrf_token} />

        <LabeledField text={emailField.label} htmlFor={emailField.id}>
          <Input
            id={emailField.id}
            type={emailField.type}
            name={emailField.name} />
        </LabeledField>

        <LabeledField text={passwordField.label} htmlFor={passwordField.id}>
          <Input
            id={passwordField.id}
            type={passwordField.type}
            name={passwordField.name} />
        </LabeledField>

        <Button text="Login" type="submit" />
      </form>
    );
  }
});
