// backend/controllers/tripController.js
exports.getRecommendations = async (req, res) => {
  const user = await User.findById(req.user.id);
  const preferredCategories = user.pastBookings.map(b => b.category);
  
  const recommendations = await Trip.find({
    category: { $in: preferredCategories },
    _id: { $nin: user.pastBookings.map(b => b.tripId) }
  }).limit(4);
  
  res.json(recommendations);
};