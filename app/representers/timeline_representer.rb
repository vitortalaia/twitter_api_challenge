require 'representable/json'

class TimelineRepresenter < Representable::Decorator
  include Representable::JSON

  property :id
  property :created_at
  property :text
  property :hashtags
  property :user_mentions

  property :user do
    property :name
    property :screen_name
    property :description
    property :friends_count
    property :followers_count
    property :statuses_count
    property :profile_image_url_https
    property :profile_banner_url
  end
end
