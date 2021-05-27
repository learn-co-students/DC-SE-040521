class Car < ActiveRecord::Base
   has_many :leases 
   
   has_many :toys, through: :leases
end