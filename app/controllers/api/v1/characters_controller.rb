class API::V1::CharactersController < ApplicationController

    def index 
        render :json => Character.all
    end
end
