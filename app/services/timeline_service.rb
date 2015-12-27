class TimelineService
  def self.perform(username, count = 25)
    TimelineRepresenter.for_collection.new timeline(username, count)
  end

  protected

  def self.timeline(username, count)
    Rails.cache.fetch("#{username}/timeline/#{count}", expires_in: 5.minutes) do
      TwitterClient.user_timeline(username, count: count)
    end
  end
end
