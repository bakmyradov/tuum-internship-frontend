import React from "react";
import BaseInput from "./base/BaseInput";
import BaseSelectCountry from "./base/BaseSelectCountry";
import BaseTextarea from "./base/BaseTextarea";
import BaseButton from "./base/BaseButton";
import countryList from "./countries.json";

export default function ContactForm() {
  return (
    <form action="#" className=" mt-8 font-denim">
      <div className="grid xs:grid-cols-2 grid-cols-1 gap-4">
        <BaseInput
          type="text"
          name="firstname"
          placeholder="First name"
          required
        />
        <BaseInput
          type="text"
          name="lastname"
          placeholder="Last name"
          required
        />
        <BaseInput type="email" name="email" placeholder="Email" required />
        <BaseInput type="text" name="jobtitle" placeholder="Job Title" />
        <BaseSelectCountry list={countryList} />
        <BaseInput
          type="text"
          name="company"
          placeholder="Company name"
          required
        />
        <BaseTextarea />
      </div>
      <div className="formelement mt-6">
        <label className="flex items-center space-x-2">
          <input type="checkbox" name="agree" />
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
          <input type="checkbox" name="newsletter" />
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
