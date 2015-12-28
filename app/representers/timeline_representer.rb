require 'representable/json'

class TimelineRepresenter < Representable::Decorator
  include Representable::JSON

  property :id
  property :created_at
  property :text
  property :hashtags
  
  collection :user_mentions do
    property :screen_name
    property :indices
  end

  property :user do
    property :name
    property :screen_name
    property :description
    property :friends_count
    property :followers_count
    property :statuses_count

    property :profile_image_url_https do
      property :host
      property :path
    end

    property :profile_banner_url do
      property :host
      property :path
    end
  end
end
