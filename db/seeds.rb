# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(email: 'solomonbassalian@gmail.com', first_name: 'Solomon', last_name: 'Bassalian', password: '1234567')

Listing.create!(
  title: 'Murray Hill Tower 2 Bedroom 1 Bath',
  address: '245 E 40th St',
  city: 'New York',
  country: 'United States',
  zip_code: 10016,
  price: 130,
  lat: 40.748986754013075,
  lng: -73.97292771017617,
  num_guests_avail: 2,
  description: 'Murray Hill Tower Apartments is located in midtown Manhattan, near Park Avenue and the East River. The stunning interiors interiors feature parquet floors, granite countertops, stylish white-on-white cabinetry, energy-efficient stainless steel appliances and environmentally friendly finishes. Enjoy incredible river and Manhattan views from your private balcony.',
  picture_url_1: 'hello',
  picture_url_2: '',
  picture_url_3: '',
  picture_url_4: '',
  picture_url_5: ''
)

Listing.create!(
  title: 'Circus',
  address: '300 E 40th St',
  city: 'New York',
  country: 'United States',
  zip_code: 10016,
  price: 130,
  lat: 42.748986754013075,
  lng: -73.97292771017617,
  num_guests_avail: 2,
  description: 'clowns.',
  picture_url_1: 'hello',
  picture_url_2: '',
  picture_url_3: '',
  picture_url_4: '',
  picture_url_5: ''
)

