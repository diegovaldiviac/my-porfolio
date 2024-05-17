import Link from "next/link";
import ContactSection from "../sections/Contact";
import { H1 } from "./Headings";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div>
        <H1>{"Diego Valdivia Cox"}</H1>
        <ContactSection />
      </div>
      <a href="https://docs.google.com/document/d/e/2PACX-1vS2lPVNRl-q-DlRJ8R3b1kgyPqOTeGbMIPaNP0XhJCtpml0fdkK2koMe3XZ88aSHw/pub" className="cta-btn">Resume</a>
    </div>
  )
}

export default Navbar;
