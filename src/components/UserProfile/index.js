import React from "react";
import ProfileImg from "../../assets/images/profile.png";
import {
  BsInstagram,
  BsTwitter,
  BsYoutube,
  BsFacebook,
  BsSnapchat,
} from "react-icons/bs";
import { ProductData } from "../../assets/data/ProductData";

const UserProfile = () => {
  return (
    <div className="container">
      <div className="userProfileWrapper">
        <div className="profileContent">
          <img
            src={ProfileImg}
            alt="Profile Pic"
            className="profilePic"
            width={120}
            height={120}
          />
          <div className="userDetails">
            <h2>Lara</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi
              ornare tincidunt felis tortor.
            </p>
            <span>Fitness | Dance | Beauty</span>
            <br />
            <span>Sponsor(s): Nykaa, The Man Company, Sirona</span>
          </div>
        </div>
        <div className="mediaContent">
          <div className="socialIcons">
            <BsInstagram size={24} color="#82798B" className="icons" />
            <BsTwitter size={24} color="#82798B" className="icons" />
            <BsYoutube size={24} color="#82798B" className="icons" />
            <BsFacebook size={24} color="#82798B" className="icons" />
            <BsSnapchat size={24} color="#82798B" className="icons" />
          </div>
          <div className="productCount">
            <h2>{ProductData.length} Products</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
