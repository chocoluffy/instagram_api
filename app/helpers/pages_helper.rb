module PagesHelper
	def filter_excessive_tags(media_array, limit)
		media_array.select {|media| media.tags.size <= limit}.sort_by {|item| item.likes[:count]}.reverse
	end

	def instagram_tag_stat(hashtag)
		tag_stats = HTTParty.get("https://api.instagram.com/v1/tags/search?q=#{hashtag}&client_id=#{ENV["CONFIG.CLIENT_ID"]}")
		return tag_stats["data"][0]["media_count"]
	end

end
