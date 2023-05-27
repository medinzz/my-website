import { Button } from "reactstrap"

import { socialLinks } from "../Portfolio"

const SocialLinks = () => {
  return (
    <div className="btn-wrapper text-lg">
      <Button
        className="twitter btn-icon text-info rounded-circle"
        color="light"
        href={socialLinks.twitter}
        target="_blank"
      >
        <span className="btn-inner--icon">
          <i className="fab fa-twitter"></i>
        </span>
      </Button>
      <Button
        className="facebook btn-icon text-info rounded-circle ml-1"
        color="light"
        href={socialLinks.facebook}
        target="_blank"
      >
        <span className="btn-inner--icon">
          <i className="fab fa-facebook"></i>
        </span>
      </Button>
      <Button
        className="github btn-icon text-info rounded-circle ml-1"
        color="light"
        href={socialLinks.github}
        target="_blank"
      >
        <span className="btn-inner--icon">
          <i className="fab fa-github"></i>
        </span>
      </Button>
      <Button
        className="twitter btn-icon text-info rounded-circle ml-1"
        color="light"
        href={socialLinks.linkedin}
        target="_blank"
      >
        <span className="btn-inner--icon">
          <i className="fab fa-linkedin-in"></i>
        </span>
      </Button>
    </div>
  )
}

export default SocialLinks