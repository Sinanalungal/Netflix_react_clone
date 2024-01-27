import React from "react"
import "./Footer.css"
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
    return (
      <>
      <div className="outside w-full flex justify-center align-middle mt-14">
        <div className="inside w-[60%] text-zinc-500 h-[200px] font-semibold">
            <div className="icons flex p-3 text-white">
                <FaFacebookF size={22} className="ml-6"/>
                <FiInstagram size={23} className="ml-6"/>
                <FaTwitter size={23} className="ml-6"/>
                <FaYoutube size={24} className="ml-6"/>
            </div>
            <div className="allcolumns flex justify-between px-8 text-xs">
                <div className="columns">
                    <ul>
                        <li>Audio Description</li>
                        <li>Investor Relations</li>
                        <li>Legal Notices</li>
                    </ul>
                </div>
                <div className="columns">
                    <ul>
                        <li>Help Centre</li>
                        <li>Jobs</li>
                        <li>Cookie Preferences</li>
                    </ul>
                </div>
                <div className="columns">
                    <ul>
                        <li>Gift Cards</li>
                        <li>Terms of Use</li>
                        <li>Corporate Information</li>
                    </ul>
                </div>
                <div className="columns">
                    <ul>
                        <li>Media Centre</li>
                        <li>Privacy</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>
            <div className="endfoot p-7 text-xs">
                <div className=" servicecode border w-[90px] p-2">
                    Service Code
                </div>
                <div className="mt-4">&copy;1997-2024 Netflix, Inc.</div>
            </div>
            
        </div>
      </div>
      </>
     
    )
  }
  
  export default Footer