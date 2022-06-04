class LevelsController < ApplicationController
  before_action :set_level, only: %i[ show edit update destroy ]

  # GET /levels or /levels.json
  def index
    @levels = Level.all
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_level
      @level = Level.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def level_params
      params.fetch(:level, {})
    end
end
