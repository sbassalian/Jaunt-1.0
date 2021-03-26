class Api::ListingsController < ApplicationController
  before_action :require_logged_in, only: [:create]

  def index
   
    @listings = Listing.all
    
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



  def listing_params
    params.require(:listing).permit(:title, :address, :city, :country, :zip_code, :price, :lat, :lng, :num_guests_avail, :description, :picture_url_1, :picture_url_2, :picture_url_3, :picture_url_4, :picture_url_5, :picture_url_6)
  end

  def guests_allowed
    [guests]
  end 

  def bounds
    params[:bounds]
  end

end
