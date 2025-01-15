import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
  return (
    <footer className="relative overflow-hidden py-12 bg-gradient-to-r from-gray-700 to-gray-900 text-white border-t-2 border-gray-800">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap justify-center -m-6">
          {/* Company Links */}
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div>
              <h3 className="mb-6 text-xs font-semibold uppercase text-gray-400">
                Company
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium hover:text-indigo-400 transition-colors"
                    to="/"
                  >
                    Features
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium hover:text-indigo-400 transition-colors"
                    to="/"
                  >
                    Pricing
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium hover:text-indigo-400 transition-colors"
                    to="/"
                  >
                    Affiliate Program
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium hover:text-indigo-400 transition-colors"
                    to="/"
                  >
                    Press Kit
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Support Links */}
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div>
              <h3 className="mb-6 text-xs font-semibold uppercase text-gray-400">
                Support
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium hover:text-indigo-400 transition-colors"
                    to="/"
                  >
                    Account
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium hover:text-indigo-400 transition-colors"
                    to="/"
                  >
                    Help
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium hover:text-indigo-400 transition-colors"
                    to="/"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium hover:text-indigo-400 transition-colors"
                    to="/"
                  >
                    Customer Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Legal Links */}
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div>
              <h3 className="mb-6 text-xs font-semibold uppercase text-gray-400">
                Legals
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium hover:text-indigo-400 transition-colors"
                    to="/"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium hover:text-indigo-400 transition-colors"
                    to="/"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium hover:text-indigo-400 transition-colors"
                    to="/"
                  >
                    Licensing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Centered Copyright Text */}
      <div className="w-full py-4 text-center mt-6">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()}. All Rights Reserved by DevUI.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
