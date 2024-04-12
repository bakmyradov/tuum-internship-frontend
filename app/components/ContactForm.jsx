"use client"
import { useState } from "react";
import BaseInput from "./base/BaseInput";
import BaseSelectCountry from "./base/BaseSelectCountry";
import BaseTextarea from "./base/BaseTextarea";
import BaseButton from "./base/BaseButton";
import countryList from "./countries.json";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    jobtitle: "",
    company: "",
    country: "country",
    message: "",
    agree: false,
    newsletter: false,
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (field) => (event) => {
    setFormData({
      ...formData,
      [field]: event.target.value
    });
    // Clear error when the user starts correcting the field
    if (errors[field]) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [field]: undefined
      }));
    }
  };

  const validateField = (field, value) => {
    // Handle string inputs
    if (typeof value === "string") {
      if (!value.trim() || (field === "country" && value === "country")) {
        return "This field is required.";
      }
    }
  
    // Handle boolean inputs (for checkboxes)
    if (typeof value === "boolean") {
      if (!value) {
        return "You must agree to the terms.";
      }
    }
  
    return "";
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};
    const requiredFields = ["firstname", "lastname", "email", "company", "country", "message", "agree"];
    
    requiredFields.forEach(field => {
      const error = validateField(field, formData[field]);
      if (error) {
        newErrors[field] = error;
      }
    });

    if (Object.keys(newErrors).length === 0) {
      console.log(formData);
      // Reset form if there are no errors
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        jobtitle: "",
        company: "",
        country: "country",
        message: "",
        agree: false,
        newsletter: false,
      });
    } else {
      setErrors(newErrors);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 font-denim">
      <div className="grid xs:grid-cols-2 grid-cols-1 gap-4">
        <BaseInput
          type="text"
          name="firstname"
          placeholder="First name"
          value={formData.firstname}
          onChange={handleInputChange('firstname')}
          errorMessage={errors.firstname}
          required
        />
        <BaseInput
          type="text"
          name="lastname"
          placeholder="Last name"
          value={formData.lastname}
          onChange={handleInputChange('lastname')}
          errorMessage={errors.lastname}
          required
        />
        <BaseInput 
          type="email" 
          name="email"
          placeholder="Email" 
          value={formData.email}
          onChange={handleInputChange('email')}
          errorMessage={errors.email}
          required 
        />
        <BaseInput 
          type="text" 
          name="jobtitle" 
          placeholder="Job Title"
          value={formData.jobtitle}
          onChange={handleInputChange('jobtitle')}
        />
        <BaseSelectCountry 
          list={countryList} 
          value={formData.country}
          onChange={handleInputChange('country')}
          errorMessage={errors.country}
        />
        <BaseInput
          type="text"
          name="company"
          placeholder="Company name"
          value={formData.company}
          onChange={handleInputChange('company')}
          errorMessage={errors.company}
          required
        />
        <BaseTextarea
          name="message"
          placeholder="What would you like to talk about?"
          value={formData.message}
          onChange={handleInputChange('message')}
          required
        />
      </div>
      <div className="formelement mt-6">
        {errors.agree && (
          <span className="text-xs text-red-500">{errors.agree}</span>
        )}
        <label className="flex items-center space-x-2">
          <input 
            type="checkbox" 
            name="agree"
            checked={formData.agree}
            onChange={(e) => handleInputChange('agree')({target: {value: e.target.checked}})}
          />
          <span className="sm:text-base text-sm">
            By submitting this form you agree to our{" "}
            <a href="#" className="underline text-[#219dfb] mr-1">
              privacy policy
            </a>
            and
            <a href="#" className="underline text-[#219dfb] mx-1">
              cookie policy
            </a>
            *
          </span>
        </label>
      </div>
      <div className="formelement mt-4">
        <label className="flex items-center space-x-2">
          <input 
            type="checkbox" 
            name="newsletter"
            checked={formData.newsletter}
            onChange={(e) => handleInputChange('newsletter')({target: {value: e.target.checked}})}
          />
          <span className="sm:text-base text-sm">
            I would like to receive your newsletter.
          </span>
        </label>
      </div>
      <div className="formelement mt-4">
        <BaseButton>Submit</BaseButton>
      </div>
    </form>
  );
}
