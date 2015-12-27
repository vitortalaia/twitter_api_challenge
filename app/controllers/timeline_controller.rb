class TimelineController < ApplicationController
  def index
    render component: 'TimelineApp',
      props: { instructions: t(:instructions) },
      tag: 'div'
  end
end
