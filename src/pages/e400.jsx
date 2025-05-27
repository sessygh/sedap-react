import ErrorPage from "../components/ErrorPage";
import img from "/img/e.jpg";

export default function E400() {
  return (
    <ErrorPage
      code="400"
      desc="Bad Request"
      image={img}
    />
  );
}
