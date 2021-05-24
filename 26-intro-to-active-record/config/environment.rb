# gem which bundles all the other gems for you
# gets your environment setup for ruby action
require 'bundler/setup'

# requires all our gems in the Gemfile into our project
Bundler.require

# setup connection to the database file
ActiveRecord::Base.establish_connection(
  adapter: 'sqlite3', # Postgres, MySQL, etc
  database: "db/development.sqlite"
)

# enables logging in console whenever ActiveRecord writes SQL for us
ActiveRecord::Base.logger = Logger.new(STDOUT)

# requiring all files in the app folder
require_all 'app'

# something like this:
# module ActiveRecord
#   class Base
#     def self.establish_connection(adapter:, database:)
#     end
#   end
# end