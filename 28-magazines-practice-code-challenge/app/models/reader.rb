class Reader < ActiveRecord::Base
    has_many :subscriptions
    has_many :magazines, through: :subscriptions

    def subscribe(magazine_instance, price_integer)
        # takes a magazine (an instance of the Magazine class) and a price (integer)
        # as arguments, and creates a new subscription in the database associated
        # with the magazine and the reader
        Subscription.create(reader_id: self.id, magazine_id: magazine_instance.id, price: price_integer)
    end

    def total_subscription_price
        # returns the total price for all the reader's subscriptions 
        prices = self.subscriptions.map { |subscription| subscription.price}
        prices.sum
    end

    def cancel_subscription(magazine_instance)
        # takes a magazine instance and removes the subscription for this reader
        # you will have to delete a row from the subscriptions table to get this to work!
        found_subscription = self.subscriptions.find_by(magazine_id: magazine_instance.id)
        found_subscription.destroy
    end
end