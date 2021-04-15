class AddToListings < ActiveRecord::Migration[5.2]
  def change
    add_column :listings, :num_bedrooms, :integer
    add_column :listings, :num_beds, :integer
    add_column :listings, :num_baths, :integer
    add_column :listings, :amenities, :text
  end
end
