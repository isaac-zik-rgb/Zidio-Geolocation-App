
// import linkedIn from "../../assets/linkedIn-icon.png";
// import x from "../../assets/x-icon.png";
// import facebook from "../../assets/facebook-icon.png";
// import instagram from "../../assets/instagram-icon.png";

export default function Footer() {
  const bgColor = "bg-blue-900";

  return (
    <footer className={`p-1 align-center text-white ${bgColor}`}>
      <div className="mx-7 sm:mx-12 my-[2rem] grid md:grid-cols-2 align-center font-poppins">
        <div className="sm:mx-auto md:mx-0">
          

          <div className="hidden md:block">
            <p className="mb-4 md:mb-5 md:mr-10 font-medium">
            +2349060569487
            </p>
            <a
              href="mailto:techhabor.co@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 font-medium font-montserrat"
            >
              techhabor.co@gmail.com
            </a>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-8 md:gap-[9rem] sm:align-center sm:mt-5">
          {/* Information */}
          <div className="text-left sm:text-center">
            <p className="mb-2 font-bold text-2xl sm:text-xl sm:text-mdblock">
              Information
            </p>
            <ul className="py-1 text-left inline-block text-xl sm:text-xs">
              <li className="py-[7px]">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  FAQ
                </a>
              </li>
              <li className="py-[7px]">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Blog
                </a>
              </li>
              <li className="py-[7px]">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="text-left sm:text-center">
            <p className="mb-2 font-bold text-2xl sm:text-xl sm:text-md">
              Company
            </p>
            <ul className="py-1 text-left inline-block text-xl sm:text-xs">
              <li className="py-[7px]">
                <a href="https://glittery-crumble-ae9c3b.netlify.app/about" target="_blank" rel="noopener noreferrer">
                  About us
                </a>
              </li>
              <li className="py-[7px]">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Services
                </a>
              </li>
              <li className="py-[7px]">
                <a href="https://glittery-crumble-ae9c3b.netlify.app/contact" target="_blank" rel="noopener noreferrer">
                  Contact us
                </a>
              </li>
              <li className="py-[7px]">
                <a href="https://glittery-crumble-ae9c3b.netlify.app/portfolio" target="_blank" rel="noopener noreferrer">
                  Portfolio
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="text-left sm:text-center">
            <p className="mb-2 font-bold text-2xl sm:text-xl sm:text-md">
              Legal
            </p>
            <ul className="py-1 text-left inline-block  text-xl sm:text-xs">
              <li className="py-[7px]">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Terms
                </a>
              </li>
              <li className="py-[7px]">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Privacy
                </a>
              </li>
              <li className="py-[7px]">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="my-4 mx-8 sm:mx-12 mb-4" />
     
    </footer>
  );
}

