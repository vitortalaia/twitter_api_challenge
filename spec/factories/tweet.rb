require 'yaml'

tweet_attrs = YAML.load_file(Rails.root.join 'spec', 'factories', 'tweet.yml')

FactoryGirl.define do
  factory :tweet, class: Twitter::Tweet do
    initialize_with { new(tweet_attrs) }
  end
end
