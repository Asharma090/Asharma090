import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import Upload from "../../public/images/upload.png";
import { useDispatch, useSelector } from "react-redux";
import { vendorBusinessDetails } from "../../store/actions/user";
import { Select } from "antd";
const { Option } = Select;
const cities = [
  "Toronto",
  "Milton",
  "Brampton",
  // Add more dummy cities as needed
];

const categories = [
  { name: "Select Category", subCategories: [] }, // Disabled option
  { name: "Basement Renovation", subCategories: ["Flooring", "Painting"] },
  { name: "Kitchen Remodeling", subCategories: ["Cabinets", "Countertops"] },
  { name: "Bathroom Renovation", subCategories: ["Tiling", "Fixtures"] },
  // Add more categories and sub-categories here as needed
];

const SecondStep = ({ style = {} }: any) => {
  const { user } = useSelector((state) => state.user);
  const fileInputRef = useRef(null);
  const dispatch = useDispatch();
  const [operatingYear, setOperatingYear] = useState("");
  const [businessEmail, setBusinessEmail] = useState("");
  const [businessEmailError, setBusinessEmailError] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [mobileNumberError, setMobileNumberError] = useState("");
  const [licensedCertified, setLicensedCertified] = useState("");
  const [locallyOwned, setLocallyOwned] = useState("");
  const [businessDescription, setBusinessDescription] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [validateMandatoryField, setvalidateMandatoryField] = useState(false);
  const [businessName, setBusinessName] = useState("");
  const [startTime, setStartTime] = useState("09:00");
  const [endTime, setEndTime] = useState("18:00");
  const [businessWebsite, setbusinessWebsite] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [filteredCities, setFilteredCities] = useState([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [subCategories, setSubCategories] = useState([]);

  useEffect(() => {
    if (
      user.email &&
      user.otpVerified &&
      user.vendor &&
      user.vendor.businessDetails
    ) {
      debugger;
      const {
        businessEmail,
        businessName,
        mobileNumber,
        businessWebsite,
        operatingYear,
        licensedCertified,
        startTime,
        endTime,
        locallyOwned,
        businessDescription,
        city,
        category,
        subCategory,
      } = user && user.vendor && user.vendor.businessDetails;
      setBusinessEmail(businessEmail);
      setBusinessName(businessName);
      setMobileNumber(mobileNumber);
      setbusinessWebsite(businessWebsite);
      setOperatingYear(operatingYear);
      setLicensedCertified(licensedCertified);
      setStartTime(startTime);
      setEndTime(endTime);
      setLocallyOwned(locallyOwned);
      setBusinessDescription(businessDescription);
      setSearchTerm(city || "");
      setSelectedCity(city || '');
      setSelectedCategory(category || "");
      setSubCategories(subCategory || []);
    }
  }, [user.vendor && user.vendor.businessDetails]);

  const generateYearOptions = () => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let i = currentYear; i >= 1980; i--) {
      years.push(i);
    }
    return years.map((year) => (
      <option key={year} value={year}>
        {year}
      </option>
    ));
  };

  const handleBusinessNameChange = (value: String) => {
    setBusinessName(value);
  };
  const validateBusinessEmail = (email: String) => {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    return isValid;
  };

  const validatePhoneNumber = (number: Number) => {
    const isValid = /^\d{10}$/.test(number);
    return isValid;
  };

  const handleMobileNumberChange = (value) => {
    setMobileNumber(value);
    setMobileNumberError("");
  };

  const handleMobileNumberBlur = () => {
    if (mobileNumber !== "" && !validatePhoneNumber(mobileNumber)) {
      setMobileNumberError("Please enter a valid 10-digit mobile number.");
    }
  };

  const handleBusinessEmailBlur = () => {
    if (businessEmail !== "" && !validateBusinessEmail(businessEmail)) {
      setBusinessEmailError("Please enter a valid email address.");
    } else {
      setBusinessEmailError("");
    }
  };

  const handleLicensedCertifiedChange = (value) => {
    setLicensedCertified(value);
  };

  const handleLocallyOwnedChange = (value) => {
    console.log(value);
    setLocallyOwned(value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFormSubmit = () => {
    debugger;
    //Check phone number
    if (!validatePhoneNumber(mobileNumber)) {
      setMobileNumberError("Please enter a valid 10-digit phone number.");
      setvalidateMandatoryField(true);
      return;
    }

    //Check Business Email
    if (!validateBusinessEmail(businessEmail)) {
      setBusinessEmailError("Please enter a valid email address.");
      setvalidateMandatoryField(true);
      return;
    }

    //Check Others Field
    if (
      !businessName ||
      !locallyOwned ||
      !businessDescription ||
      !licensedCertified ||
      !operatingYear ||
      !selectedCity ||
      !selectedCategory ||
      !subCategories
      // ||
      // !selectedImage
    ) {
      setvalidateMandatoryField(true);
      return;
    }
    const businessDetails = {
      email: user.email,
      otpVerified: user.otpVerified,
      businessEmail,
      businessName,
      mobileNumber,
      businessWebsite,
      operatingYear,
      licensedCertified,
      startTime,
      endTime,
      locallyOwned,
      businessDescription,
      selectedImage: "http://uploadpic.png", //need to integrate with aws s3
      selectedCity,
      category : selectedCategory,
      subCategories
    };
    console.log(businessDetails);

    dispatch(vendorBusinessDetails(businessDetails));
  };

  // // Function to handle changes in the search input
  // const handleSearchChange = (value) => {
  //   setSearchTerm(value);
  // };

  // // Function to handle city selection
  // const handleCitySelect = (value) => {
  //   setSelectedCity(value);
  // };

  // Function to filter cities based on user input
  function filterCities(input) {
    return cities.filter((city) =>
      city.toLowerCase().includes(input.toLowerCase())
    );
  }

  // Function to handle changes in the search input
  function handleSearchChange(event) {
    const inputText = event.target.value;
    setSearchTerm(inputText);
    const filtered = filterCities(inputText);
    setFilteredCities(filtered);
    setIsDropdownVisible(true);
  }

  // Function to handle city selection
  function handleCitySelect(city) {
    setSelectedCity(city);
    setSearchTerm(city);
    setFilteredCities([]);
    setIsDropdownVisible(false);
  }

  const handleCategoryChange = (event) => {
    const selectedCategoryName = event.target.value;
    const selectedCategory = categories.find(
      (category) => category.name === selectedCategoryName
    );
    if (selectedCategory) {
      setSelectedCategory(selectedCategoryName);
      setSubCategories(selectedCategory.subCategories);
    } else {
      setSelectedCategory("");
    }
  };

  const handleSubCategoryChange = (event) => {
    debugger;
    const category = categories.find(
      (category) => category.name === selectedCategory
    );
  const selectedSubCategory = category && category.subCategories.filter(s => s == event.target.value)
    if (selectedSubCategory) {      
      setSubCategories([...selectedSubCategory]);
    } else {  
      setSubCategories([]);
    }
  };

  return (
    <div className={style["right-side"]}>
      <h3>Business Details</h3>
      <div className={`${style["form-group"]} mb-4`}>
        <label>Business Email *</label>
        <input
          type="email"
          className={style["form-control"]}
          placeholder="Enter Business Email"
          value={businessEmail}
          onChange={(e) => setBusinessEmail(e.target.value)}
          onBlur={handleBusinessEmailBlur}
        />
        {businessEmailError && (
          <small style={{ color: "#F67832", fontSize: "13px" }}>
            {businessEmailError}
          </small>
        )}
        <small style={{ color: "#F67832", fontSize: "13px" }}>
          {validateMandatoryField &&
            businessEmail == "" &&
            "Please enter Business Email. This field is mandatory."}
        </small>
      </div>
      <div className={"row"}>
        <div className={"col-md-6"}>
          <div className={`${style["form-group"]} mb-4`}>
            <label>Business Name *</label>
            <input
              type="text"
              className={style["form-control"]}
              placeholder="Enter Business Name"
              required
              value={businessName}
              onChange={(e) => handleBusinessNameChange(e.target.value)}
            />
            <small style={{ color: "#F67832", fontSize: "13px" }}>
              {validateMandatoryField &&
                businessName == "" &&
                "Please enter Business Name. This field is mandatory."}
            </small>
          </div>
        </div>
        <div className={"col-md-6"}>
          <div className={`${style["form-group"]} mb-4`}>
            <label>Phone Number *</label>
            <input
              type="text"
              className={style["form-control"]}
              placeholder="Enter Mobile Number"
              value={mobileNumber}
              onChange={(e) => handleMobileNumberChange(e.target.value)}
              onBlur={handleMobileNumberBlur}
              required
            />
            {mobileNumberError && (
              <small style={{ color: "#F67832", fontSize: "13px" }}>
                {mobileNumberError}
              </small>
            )}
            <small style={{ color: "#F67832", fontSize: "13px" }}>
              {validateMandatoryField &&
                mobileNumber == "" &&
                "Please enter a valid 10-digit mobile number. This field is mandatory."}
            </small>
          </div>
        </div>
      </div>
      <div className={"row"}>
        <div className={`${style["form-group"]} mb-4`}>
          <label>Business Website</label>
          <input
            type="text"
            className={style["form-control"]}
            placeholder="Enter Business Website"
            value={businessWebsite}
            onChange={(e) => setbusinessWebsite(e.target.value)}
          />
        </div>
      </div>
      <div className={"row"}>
        <div className={"col-md-6"}>
          <div className={`${style["form-group"]} mb-4`}>
            <label htmlFor="operatingYear">Operating Since *</label>
            <select
              id="operatingYear"
              className={`${style["form-control"]} `}
              value={operatingYear}
              style={{ padding: "10px" }}
              onChange={(e) => setOperatingYear(e.target.value)}
              required
            >
              <option value="">Select Operating Year</option>
              {generateYearOptions()}
            </select>
            <small style={{ color: "#F67832", fontSize: "13px" }}>
              {validateMandatoryField &&
                operatingYear == "" &&
                "Please Select Operating year. This field is mandatory."}
            </small>
          </div>
        </div>
        <div className={"col-md-6"}>
          <div className={`${style["form-group"]} mb-4`}>
            <label>Licensed / Certified *</label>
            <div style={{ display: "flex", alignItems: "center" }}>
              <button
                className={`${style["form-button"]}`}
                style={{
                  backgroundColor: "#B8BECE",
                  borderRadius: "1.25rem",
                  color: "#513980",
                  background: "#F7F2FF",
                  fontSize: "0.76rem",
                  lineHeight: "0.9rem",
                  padding: "0.45rem 1.25rem",
                  border:
                    licensedCertified === "yes" ? "1px solid #513980" : "",
                }}
                onClick={() => handleLicensedCertifiedChange("yes")}
              >
                Yes
              </button>
              <button
                className={`${style["form-button"]}`}
                style={{
                  backgroundColor: "#B8BECE",
                  borderRadius: "1.25rem",
                  color: "#513980",
                  background: "#F7F2FF",
                  fontSize: "0.76rem",
                  lineHeight: "0.9rem",
                  padding: "0.45rem 1.25rem",
                  border: licensedCertified === "no" ? "1px solid #513980" : "",
                }}
                onClick={() => handleLicensedCertifiedChange("no")}
              >
                No
              </button>
            </div>
            <small style={{ color: "#F67832", fontSize: "13px" }}>
              {validateMandatoryField &&
                licensedCertified === "" &&
                "Please Select. This field is mandatory."}
            </small>
          </div>
        </div>
      </div>
      <div className={"row"}>
        <div className={"col-md-6"}>
          <div className={`${style["form-group"]} mb-4 `}>
            <label>Operating Hours From *</label>
            <input
              type="time"
              className={style["form-control"]}
              placeholder="Enter Start Time"
              style={{ padding: "10px" }}
              required
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
            />
          </div>
        </div>
        <div className={"col-md-6"}>
          <div className={`${style["form-group"]} mb-4`}>
            <label>Operating Hours To *</label>
            <input
              type="time"
              className={style["form-control"]}
              placeholder="Enter End Time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              style={{ padding: "10px" }}
              required
            />
          </div>
        </div>
      </div>
      {/* <div className={`${style["form-group"]} mb-4`}>
        <label>Locally Owned *</label>
        <div style={{ display: "flex", alignItems: "center" }}>
          <label style={{ margin: "5px" }}>
            <select
              className={style["form-select"]}
              value={locallyOwned}
              onChange={(e) => handleLocallyOwnedChange(e.target.value)}
              required
            >
              <option value="" disabled >
                Select Is your Business Locally Owned or not
              </option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </label>
        </div>
        <small style={{ color: "#F67832", fontSize: "13px" }}>
          {validateMandatoryField &&
            locallyOwned == "" &&
            "Please Select. This field is mandatory."}
        </small>
      </div> */}
      <div className={`${style["form-group"]} mb-4`}>
        <label>Locally Owned *</label>
        <div style={{ display: "flex", alignItems: "center" }}>
          <button
            className={`${style["form-button"]} ${
              locallyOwned === "yes" ? style["active-button"] : ""
            }`}
            style={{
              backgroundColor: "#B8BECE",
              borderRadius: "1.25rem",
              color: "#513980",
              background: "#F7F2FF",
              fontSize: "0.76rem",
              lineHeight: "0.9rem",
              padding: "0.45rem 1.25rem",
              border: locallyOwned === "yes" ? "1px solid #513980" : "",
            }}
            onClick={() => handleLocallyOwnedChange("yes")}
          >
            Yes
          </button>
          <button
            className={`${style["form-button"]}`}
            style={{
              backgroundColor: "#B8BECE",
              borderRadius: "1.25rem",
              color: "#513980",
              background: "#F7F2FF",
              fontSize: "0.76rem",
              lineHeight: "0.9rem",
              padding: "0.45rem 1.25rem",
              border: locallyOwned === "no" ? "1px solid #513980" : "",
            }}
            onClick={() => handleLocallyOwnedChange("no")}
          >
            No
          </button>
        </div>
        <small style={{ color: "#F67832", fontSize: "13px" }}>
          {validateMandatoryField &&
            locallyOwned === "" &&
            "Please Select. This field is mandatory."}
        </small>
      </div>

      <div className={`${style["form-group"]} mb-4`}>
        <label>About Business *</label>
        <textarea
          className={style["form-control"]}
          rows={3}
          value={businessDescription}
          onChange={(e) => setBusinessDescription(e.target.value)}
          maxLength={300}
          placeholder="Describe about your Business"
          required
        ></textarea>
        <small style={{ color: "#F67832", fontSize: "13px" }}>
          {validateMandatoryField &&
            businessDescription == "" &&
            "Please Select. This field is mandatory."}
        </small>
      </div>
      <div className={`${style["form-group"]} mb-4`}>
        <label>Upload Logo *</label>
        <div className={style["upload-images"]}>
          {selectedImage ? (
            <Image
              alt=""
              src={selectedImage}
              width={200} // Specify the width as needed
              height={200} // Specify the height as needed
            />
          ) : (
            <a onClick={handleUploadClick}>
              <div>
                <h1>
                  <Image alt="" src={Upload} /> Upload Logo
                </h1>
                <p>Image can be JPEG, JPG, PNG and cannot exceed 5MB.</p>
              </div>
            </a>
          )}
        </div>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: "none" }}
          required
        />
      </div>
      {/* <div className={`${style["form-group"]} mb-4`}>
        <label>Areas / City</label>
        <select className={style["form-select"]}>
          <option value="">Select your Area or City Covered</option>
        </select>
      </div> */}
      <div className={`${style["form-group"]} mb-4`}>
        <label>Areas / City</label>
        <input
          type="text"
          className={style["form-select"]}
          placeholder="Type to search your Area or City Covered"
          value={searchTerm}
          onChange={handleSearchChange}
          style={{ border: "1px solid" }}
        />
        {searchTerm && isDropdownVisible && (
          <ul
            className="custom-select-list"
            style={{
              position: "relative",
              zIndex: "2000",
              left: 0,
              padding: "2px",
              border: "1px solid #ccc",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            {filteredCities.map((city) => (
              <li
                style={{
                  padding: "5px",
                  margin: "1px",
                  // background: "rgb(250, 250, 250)"
                }}
                key={city}
                onClick={() => handleCitySelect(city)}
                className={`custom-select-item ${
                  selectedCity === city ? "selected" : ""
                }`}
              >
                {city}
              </li>
            ))}
          </ul>
        )}
        <small style={{ color: "#F67832", fontSize: "13px" }}>
          {validateMandatoryField &&
            selectedCity == "" &&
            searchTerm == "" &&
            "Please enter a valid city. This field is mandatory."}
        </small>
      </div>
      {/* <div className={`${style["form-group"]} mb-4`}>
        <Select
          showSearch
          style={{
            width: "50%",
            height: "2.6rem", // Adjust height
            borderRadius: "4px", // Add border-radius
            fontSize: "16px", // Increase font size
            fontWeight: "600", // Increase font weight
          }}
          placeholder="Type to search for a city"
          optionFilterProp="children"
          filterOption={(input, option) =>
            option.children.toLowerCase().includes(input.toLowerCase())
          }
          onChange={handleCitySelect}
          onSearch={handleSearchChange}
          value={selectedCity || undefined}
        >
          {cities.map((city) => (
            <Option key={city} value={city}>
              {city}
            </Option>
          ))}
        </Select>
      </div> */}
      {/* <div className={"row"}>
        <div className={"col-md-6"}>
          <div className={`${style["form-group"]} mb-4`}>
            <label>Service Offered / Category</label>
            <select className={style["form-select"]}>
              <option value="">Select Category</option>
            </select>
          </div>
        </div>
        <div className={"col-md-6"}>
          <div className={`${style["form-group"]} mb-4`}>
            <label>Sub-Service / Sub-Category</label>
            <select className={style["form-select"]}>
              <option value="">Select Sub-Category</option>
            </select>
          </div>
        </div>
      </div> */}
      <div className="row">
        <div className="col-md-6">
          <div className="form-group mb-4">
            <label>Service Offered / Category</label>
            <select
              className="form-select"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              {categories.map((category) => (
                <option
                  key={category.name}
                  value={category.name}
                  disabled={category.name === "Select Category"}
                >
                  {category.name}
                </option>
              ))}
            </select>
            <small style={{ color: "#F67832", fontSize: "13px" }}>
              {validateMandatoryField &&
                selectedCategory == "" &&
                "Please enter a valid Business Category. This field is mandatory."}
            </small>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group mb-4">
            <label>Sub-Service / Sub-Category</label>
            <select className="form-select" onChange={handleSubCategoryChange}>
              <option value="">Select Sub-Category</option>
              {subCategories.map((subCategory) => (
                <option key={subCategory} value={subCategory}>
                  {subCategory}
                </option>
              ))}
            </select>
            <small style={{ color: "#F67832", fontSize: "13px" }}>
              {validateMandatoryField &&
                subCategories.length == [] &&
                "Please enter a valid Business Category. This field is mandatory."}
            </small>
          </div>
        </div>
      </div>
      <div className={style["form-group"]}>
        <button
          type="submit"
          className={style["login-btn"]}
          onClick={handleFormSubmit}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default SecondStep;
