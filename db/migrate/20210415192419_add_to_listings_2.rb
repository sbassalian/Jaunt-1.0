class AddToListings2 < ActiveRecord::Migration[5.2]
  def change
    add_column :listings, :type_of_place, :string
  end
end
