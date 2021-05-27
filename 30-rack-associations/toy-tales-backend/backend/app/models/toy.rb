class Toy < ActiveRecord::Base
    has_many :leases 
   
    has_many :cars, through: :leases 

    def announce_name
        "Hey there! I'm #{name}"
    end

    def announce_likes
        "#{likes} people like me"
    end

    def display_data
        self.to_json({:include => { :leases => {
                         :include => { :car => {
                          :only => [:make, :model] } }
                      }, 
                    },
                    :methods => [:announce_name, :announce_likes]
        }) 
    end
end