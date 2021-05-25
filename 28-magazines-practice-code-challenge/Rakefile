require_relative 'config/environment'
require 'sinatra/activerecord/rake'

desc 'starts a Pry console'
task :console do
  # Comment out the line below if you don't want to see the SQL logs in your terminal
  ActiveRecord::Base.logger = Logger.new(STDOUT)
  # Start a Pry session
  Pry.start
end
