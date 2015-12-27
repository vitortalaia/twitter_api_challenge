require 'representable/json'

class TimelineRepresenter < Representable::Decorator
  include Representable::JSON

  property :id
  property :created_at
  property :text
  property :hashtags
  property :user_mentions
  property :retweeted_status?
  property :retweeted_status
  property :quoted_status?
  property :quoted_status

  property :user do
    property :id
    property :created_at
    property :verified?, as: :verified
    property :protected?, as: :protected
    property :name
    property :screen_name
    property :description
    property :friends_count
    property :followers_count
    property :statuses_count
    property :profile_image_url_https
  end
end
