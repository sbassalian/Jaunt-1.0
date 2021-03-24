class CreateListings < ActiveRecord::Migration[5.2]
  def change
    create_table :listings do |t|
      t.string :title, null: false
      t.string :address, null: false
      t.string :city, null: false
      t.string :country, null:false
      t.integer :zip_code, null: false
      t.integer :price, null: false
      t.float :lat
      t.float :lng
      t.integer :num_guests_avail, null: false
      t.text :description, null: false
      t.string :picture_url_1, null: false
      t.string :picture_url_2
      t.string :picture_url_3
      t.string :picture_url_4
      t.string :picture_url_5
      t.string :picture_url_6
      t.timestamps
    end
  end
end
