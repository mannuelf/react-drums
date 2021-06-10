import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCode } from "@fortawesome/free-solid-svg-icons";

const SiteFooter = () => {
  return (
    <footer>
      <p>
        Built with <FontAwesomeIcon icon={faHeart} /> by{" "}
        <a
          href="https://mannuelferreira.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mannuel Ferreira
        </a>{" "}
        <a
          href="https://github.com/mannuelf/react-drums"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faCode} /> Fork it on github.
        </a>
      </p>
    </footer>
  );
};

export default SiteFooter;
