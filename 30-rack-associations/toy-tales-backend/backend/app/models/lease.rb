class Lease < ActiveRecord::Base
    belongs_to :car
    belongs_to :toy
end