const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  location: { type: String, required: true },
  price: { type: Number, required: true },
  images: [String],
  category: { type: String, enum: ['Adventure', 'Trekking', 'Beach', 'Cultural'] },
  startDate: Date,
  endDate: Date,
  itinerary: [{ day: Number, title: String, description: String }],
  maxSlots: Number,
  bookedSlots: { type: Number, default: 0 },
  organizer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  ratings: { type: Number, default: 4.5 },
  tags: [String]
}, { timestamps: true });

module.exports = mongoose.model('Trip', tripSchema);