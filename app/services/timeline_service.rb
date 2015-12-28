class TimelineService
  def self.perform(username)
    TimelineRepresenter.for_collection.new timeline(username)
  end

  protected

  def self.timeline(username)
    Rails.cache.fetch("#{username}/timeline", expires_in: 5.minutes) do
      TwitterClient.user_timeline(username, count: 25)
    end
  end
end
