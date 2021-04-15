# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
ApplicationRecord.connection.reset_pk_sequence!('users')
Listing.destroy_all
ApplicationRecord.connection.reset_pk_sequence!('listings')

User.create(email: 'solomonbassalian@gmail.com', first_name: 'Solomon', last_name: 'Bassalian', password: '1234567')

Listing.create!(
  title: 'W Hotel South Beach 3B Ocean Front Condo',
  address: '2201 Collins Ave',
  city: 'Miami Beach',
  country: 'United States',
  zip_code: 33139,
  price: 2777,
  lat: 25.797607904527283,
  lng: -80.126748525684017,
  num_guests_avail: 6,
  description: "If you are looking for the ultimate location for that perfect Miami Beach getaway, look no further. This oceanfront private residence located within the W South Beach Hotel blends luxury and technology to create an atmosphere of amplified elegance and sleek sophistication. Centrally located within walking distance to clubs, lively dining, premier shopping and all that is iconically Miami, this luxurious hotel also has plenty to do on-site so you’ll never lack options.

The space
The unique ability to partition and secure this unit into three mini-units with separate outdoor access allows you to create privacy when desired, and makes this unit the perfect retreat for family vacations and couple getaways alike.

Savor your full oceanfront view from any one of the three balconies while sipping on your morning espresso. Take a moment to breathe in the energy of South Beach as you contemplate your day. Will today be a beach day, spent frolicking in the surf, or are mojitos poolside more your speed? Pedal your way to South Pointe Park or head over to “see and be seen” on Ocean Drive. Maybe retail therapy is on the agenda. Head over to Lincoln Road Mall or to the premier shoppes along Collins. Wherever your day adventures take you, retreat to this oasis to prepare yourself for the evening, while streaming your favorite music to the Bang & Olufsen speakers throughout the unit. Whether you are planning an intimate celebrity-chef dining experience or you’re looking to hit the clubs and turn things up a notch, the comfort of this home will be waiting for you, to envelope you as you rest and re-charge for tomorrow’s adventures.

Room Description:

– Separate 3 bedrooms, 3 bathrooms, full kitchen, living room, washer/dryer, and balconies.
– Spacious 1936 ft² (180 m²) of living space.
– Oceanfront & City view with Northeastern exposure.
– Bathrooms are fully stocked with premium amenities for your personal needs- to start you off (just as a hotel would).
– Entertainment amenities include LCD TVs, DVD players, cable television, and free high-speed wireless Internet.

Guest access
When you stay in our private residence you can pamper yourself in the wonderful hotel amenities which include a luxurious pool, white sand beaches, 5-star Spa, Gym, and Valet service.

Other things to note
– Parking is Valet at regular hotel valet rate.
– Pets: We follow the hotel's rules regarding pets. If a pet is permitted, there will be a non-refundable $150 fee per pet, per stay and an additional refundable pet deposit required.
– Licensee acknowledges that although this rental unit may be located in or physically connected to W Hotel South Beach, Licensee is renting a privately-owned residence which is not owned, operated, or otherwise endorsed, sponsored, or affiliated with the prime hotel operator.
– Bookings over 6 days will require one mid-week clean of $275 plus tax. every 6 days to maintain the quality of the unit. Additional funds will be requested after the booking has been made.
- The Management Company will require you to sign the terms & conditions within 48 hours of booking. The reservation will be considered pending until the contract is returned along with a copy of your identification and the CC used to book the unit. The agreement will be sent to the email address under which the reservation was made.
- Room service not available.",
  picture_url_1: 'w1',
  picture_url_2: 'w2',
  picture_url_3: 'w3',
  picture_url_4: 'w4',
  picture_url_5: 'w5',
  num_bedrooms: 3,
  num_beds: 3,
  num_baths: 3,
  amenities: "Kitchen, WIFI, TV, Iron, Pool, Basketball Court",
  type_of_place: "Entire guest suite"
)

Listing.create!(
  title: 'Luxurious 2/2 located at 1 Hotel & Homes',
  address: '2341 Collins Ave',
  city: 'Miami Beach',
  country: 'United States',
  zip_code: 33139,
  price: 1696,
  lat: 25.797590328146846,
  lng: -80.12681756510017,
  num_guests_avail: 4,
  description: "Make yourself at home in this luxury Private Residence, available for short-term rental and located within Miami’s first eco-friendly 1 Hotel & Homes. Overlooking beautiful Downtown Miami, this unit has the conveniences of home in addition to all the amenities of a 5-star resort. With two bedrooms and a pull out sofa in the living area, this unit is the perfect home base for a family vacation, that long-overdue boys trip or that relaxing girls getaway.

The space
Start your day with a cup of coffee or a freshly squeezed Florida orange juice from Neighbors, then head to Anatomy Gym to sweat out last night’s fun. Schedule some spa time at Bamford or throw on your swimsuit and enjoy a day at any of the 4 on-site pools. Walk the beach, frolic in the surf, indulge in some retail therapy or enjoy the decadence of Miami’s fine dining. Your Miami adventure is waiting for you, and it’s all within walking distance!

Room description:
– Separate 2 bedrooms, 2 bathrooms, full kitchen, living room, washer & dryer, and balcony.
– Spacious 1104 ft² (103 m²) of living space.
– City view with Western exposure.
– Bathrooms are fully stocked with premium amenities for your personal needs (just like a hotel would).
– Entertainment amenities include LCD TVs, DVD players, cable television, and free high-speed wireless Internet.

Guest access
When you stay in our private residence you can pamper yourself in the wonderful hotel amenities which include:
– Several luxurious pools
– White sand beaches
– 5-star Bamford Haybarn Spa
– Valet service
– The Anatomy Gym
– A wide variety of dining options to refuel for breakfast, lunch, dinner and drinks
– Access to the 1 Beach Club featuring Wave Coastal Cuisine
– The brand new Audi E-tron which could be used as a house car and can be scheduled for a test drive through our concierge.

Other things to note
– Valet parking is available at regular hotel valet rate.
– Daily resort fee charged by the hotel of $45/day plus tax for rentals less than 30 days.
– Rentals over 30 days have access to room service, complimentary valet for one car, and waived resort fees.
– Pets: We follow the hotel's rules regarding pets. If a pet is permitted, there will be a non-refundable $150 fee per pet, per stay and an additional refundable pet deposit required.
– Licensee acknowledges that although this rental unit may be located in or physically connected to 1 Hotel & Homes, Licensee is renting a privately-owned residence which is not owned, operated, or otherwise endorsed, sponsored, or affiliated with the prime hotel operator.
– Bookings over 6 days will require one mid-week clean of $200 plus tax, every 6 days to maintain the quality of the unit. Additional funds will be requested after the booking has been made.
– The Management Company will require you to sign the terms & conditions within 48 hours of booking. The reservation will be considered pending until the contract is returned along with a copy of your identification and the CC used to book the unit. The agreement will be sent to the email address under which the reservation was made.
– Room service not available.",
  picture_url_1: 'hotel11',
  picture_url_2: 'hotel12',
  picture_url_3: 'hotel13',
  picture_url_4: 'hotel14',
  picture_url_5: 'hotel15',
  num_bedrooms: 3,
  num_beds: 4,
  num_baths: 2,
  amenities: "Kitchen, WIFI, TV, Iron, Pool, Basketball Court",
  type_of_place: "Entire apartment"
)

