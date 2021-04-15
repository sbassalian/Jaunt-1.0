# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_04_15_192419) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "listings", force: :cascade do |t|
    t.string "title", null: false
    t.string "address", null: false
    t.string "city", null: false
    t.string "country", null: false
    t.integer "zip_code", null: false
    t.integer "price", null: false
    t.float "lat"
    t.float "lng"
    t.integer "num_guests_avail", null: false
    t.text "description", null: false
    t.string "picture_url_1", null: false
    t.string "picture_url_2"
    t.string "picture_url_3"
    t.string "picture_url_4"
    t.string "picture_url_5"
    t.string "picture_url_6"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "num_bedrooms"
    t.integer "num_beds"
    t.integer "num_baths"
    t.text "amenities"
    t.string "type_of_place"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "img_url"
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

end
