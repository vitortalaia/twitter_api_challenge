class TimelineController < ApplicationController
  rescue_from Twitter::Error::NotFound, with: :handle_not_found
  rescue_from Twitter::Error::Unauthorized, with: :handle_unauthorized

  def index
    render component: 'TimelineApp',
      props: { instructions: t(:instructions) },
      tag: 'div'
  end

  def fetch
    render json: TimelineService.perform(params[:username])
  end

  private

  def handle_not_found(error)
    render json: {message: error.message}, status: :not_found
  end

  def handle_unauthorized(error)
    render json: {message: error.message}, status: :unprocessable_entity
  end
end
