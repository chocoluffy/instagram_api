class PagesController < ApplicationController
  def home
  	access_token = ENV["CONFIG.ACCESS_TOKEN"]
  	client = Instagram.client(access_token: access_token)
  	default_search = client.tag_search("travel")
  	if params[:q]
  		search_queary = client.tag_search(params[:q])
  		@tag = search_queary.present? ? search_queary : default_search
  		@message = search_queary.present? ? "Success" : "Sorry, I can't find any image under this tag."
  	else
  		@tag = default_search
  	end
  	@tag = @tag.first.name
  	@search = client.tag_recent_media(@tag)
  end

  def about
  	
  end
end
