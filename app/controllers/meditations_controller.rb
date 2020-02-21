class MeditationsController < ApplicationController
  before_action :set_meditation, only: [:show, :update, :destroy]

  # GET /meditations
  def index
    @meditations = Meditation.all

    render json: @meditations
  end
