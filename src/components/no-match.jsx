import { Link } from "react-router-dom";
import CrossfadeContainer from "./CrossfadeContainer";

export default function NoMatch() {
    return (
      <CrossfadeContainer>
        <h2>About</h2>
        <h2>Nothing to see here!</h2>
        <p>
          <Link to="/">Go to the home page</Link>
        </p>
      </CrossfadeContainer>
    );
  }