const addressSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    address: String,
    doorNumber: String,
    landmark: String,
    location: {
      type: {
        type: String,
        enum: ["Point"], // 'location.type' must be 'Point'
        required: true,
      },
      coordinates: {
        type: [Number], // Array of numbers for longitude and latitude
        required: true,
      },
    },
    type: { type: String, enum: ["Home", "Work", "Other"] },
    // ... other address-related fields ...
  },
  { timestamps: true }
);

// Create a geospatial index on the 'location' field for efficient querying
addressSchema.index({ location: "2dsphere" });

const Address = mongoose.model("Address", addressSchema);

// {
//   "mapObj": {
//       "center": {
//           "lat": 12.9634,
//           "lng": 77.5855
//       },
//       "address": "40, JC Rd, Kumbaragundi, Nagarathpete, Bengaluru, Karnataka 560002, India"
//   },
//   "flatNo": "doorq",
//   "landMark": "mark",
//   "landMarkType": "Home"
// }
