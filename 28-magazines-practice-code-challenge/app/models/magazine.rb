class Magazine < ActiveRecord::Base
  has_many :subscriptions
  has_many :readers, through: :subscriptions

  def email_list
    # returns a String of a semi-colon separated list of emails for all the readers subscribed to this magazine
    # the string should be formatted like this: email1@example.com;email2@example.com;email3@example.com
    emails = self.readers.map {|reader| reader.email}
    emails.join(";")
  end

  def self.most_popular
    # returns the Magazine instance with the most subscribers
    Magazine.all.each { |magazine| magazine.subscriptions.count}.sort.last
  end
end