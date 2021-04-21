class Api::ListingsController < ApplicationController
  before_action :require_logged_in, only: [:create]

  def index

    # listings = bounds ? Listing.in_bounds(bounds) : Listing.all
    listings = Listing.all
    
    if params[:destination]
      listings = listings.where(city: "#{params[:destination]}") 
    end
    # listings = listings.where("10 <= num_guests_avail") 
    
    if params[:minGuests]
      listings = listings.where("#{params[:minGuests]} <= num_guests_avail") 
    end
   
    @listings = listings
    
    render :index
  end

  def show
    @listing = Listing.find(params[:id])
  end

  def create
    @listing = Listing.create!(listing_params)
    render :show
  end

  private

  def range
    params[:minGuests]
  end



  def listing_params
    params.require(:listing).permit(:title, :address, :city, :country, :zip_code, :price, :lat, :lng, :num_guests_avail, :description, :picture_url_1, :picture_url_2, :picture_url_3, :picture_url_4, :picture_url_5, :picture_url_6, :num_bedrooms,:num_beds, :num_baths, :amenities, :type_of_place )
  end


  def bounds
    params[:bounds]
  end

end
