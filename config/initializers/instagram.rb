Instagram.configure do |config|
	config.client_id = ENV["CONFIG.CLIENT_ID"]
	config.client_secret = ENV["CONFIG.CLIENT_SECRET"]
end

# initializer file:
# 1\ adjust behavior of rails app
# 2\ run additional code when app starts