class Listing < ApplicationRecord
    validates :title, :address, :city, :country, :zip_code, :price, :lat, :lng, :num_guests_avail, :description, :picture_url_1, presence: true


    has_many :reviews
    
    def average_rating
        reviews.average(:rating)
    end
end
