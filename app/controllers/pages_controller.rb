class PagesController < ApplicationController
  def home
  	access_token = "421573080bac4955ae864f56b974e1d1"
  	client = Instagram.client(access_token: access_token)
  	default_search = client.tag_search("Capital One")
  	if params[:q]
  		search_queary = client.tag_search(params[:q])
      # 这里使用来自form的parameter
  		@tag = search_queary.present? ? search_queary : default_search
  		@message = search_queary.present? ? "Success" : "Sorry, I can't find any image under this tag."
  	else
  		@tag = default_search
  	end
  	@tag = @tag.first.name
  	# @search = client.tag_recent_media(@tag)
    # @search = client.media_popular
    # @search = client.user_recent_media
    response = client.tag_recent_media(@tag)
    album = [].concat(response)
    max_id = response.pagination.next_max_id
    # token来表示总共需要展示的页数：
    token = 2
    while token>0 do 
      response = client.tag_recent_media(@tag, :max_id => max_id)
      max_id = response.pagination.next_max_id
      album.concat(response)
      token -= 1
    end
    @search = album
  end

  def about
  	
  end

  private

end
