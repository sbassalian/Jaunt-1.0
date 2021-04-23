class AddSubjectsToBook < ActiveRecord::Migration[5.2]
  def change
    add_column :listings, :reserved_dates, :text, array: true, default: []
  end
end
