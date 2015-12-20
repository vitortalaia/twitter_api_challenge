require 'rails_helper'

describe "User sign in" do
  let (:user) { create :user }

  it "should allow registered user to log in" do
    visit root_path
    fill_in "Email", with: user.email
    fill_in "Password", with: user.password
    click_button "Log in"

    expect(page).to have_content "You are logged in"
  end

  it "shouldn't allow an unregistered user to log in" do
    visit root_path
    fill_in "Email", with: "unregistered@example.com"
    fill_in "Password", with: "password"
    click_button "Log in"

    expect(page).to have_content "Invalid email or password."
  end
end
