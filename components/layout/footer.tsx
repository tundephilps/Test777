import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/Logo.png";

import Signs from "../../public/Signs.png";

export default function Footer() {
  return (
    <footer className="bg-[#081826] text-gray-400 text-sm w-full">
      {/* Top Section */}
      <div className="lg:px-12 mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-gray-800 w-full">
        {/* Logo and Description */}
        <div className="space-y-4">
          <Image
            src={Logo}
            alt="Canada777 Logo"
            width={150}
            height={50}
            className="object-contain"
          />
          <p className="text-xs leading-relaxed text-gray-500">
            Canada777 operated by TriMat Gaming, licensed Curaçao, payments via
            TKD.
          </p>
        </div>

        {/* About Us */}
        <div>
          <h4 className="text-white font-semibold mb-4">About Us</h4>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Affiliates
              </Link>
            </li>
          </ul>
        </div>

        {/* Informations */}
        <div>
          <h4 className="text-white font-semibold mb-4">Informations</h4>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-white">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Bonus Terms
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Privacy and Security Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Responsible Gambling
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-white">
                Registration
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Deposit
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Withdraw
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Banking
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                AML & KYC Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between px-6 py-6 gap-4">
        <p className="text-xs text-gray-500">© 2025 Canada777 (Kinguin)</p>

        <div className="flex items-center gap-4">
          <Image src={Signs} alt="Curacao" />
        </div>
      </div>
    </footer>
  );
}
