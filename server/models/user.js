const mongoose = require("mongoose");
const schema = mongoose.Schema;

const documentSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["DL", "PR"],
  },
  document: {
    type: String,
  },
});

const businessDetailsSchema = new mongoose.Schema({
  businessEmail: {
    type: String,
  },
  businessName: {
    type: String,
  },
  mobileNumber: {
    type: String,
  },
  businessWebsite: {
    type: String,
  },
  operatingYear: {
    type: String,
  },
  licensedCertified: {
    type: String,
  },
  startTime: {
    type: String,
  },
  endTime: {
    type: String,
  },
  locallyOwned: {
    type: String,
  },
  businessDescription: {
    type: String,
  },
  city: {
    type: String,
  },
  category: {
    type: String,
  },
  subCategories: [
    {
      type: String,
    },
  ],
});

const vendorSchema = new mongoose.Schema({
  businessDetails: businessDetailsSchema,
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  logo: {
    type: String,
  },
  documents: {
    type: [documentSchema],
  },
  location: {},
  areaServed: {},
  services: {},
});

const userModel = new schema(
  {
    email: {
      type: String,
    },
    otp: {
      type: Number,
    },
    otpExpiry: {
      type: Date,
    },
    otpVerified: {
      type: Boolean,
      enum: [true, false],
    },
    userType: {
      type: String,
      enum: ["Vendor", "User"],
    },
    vendor: vendorSchema,
    auth0ID: {
      type: String,
    },
    lastLoginAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("user", userModel);
