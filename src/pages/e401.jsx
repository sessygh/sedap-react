import ErrorPage from "../components/ErrorPage";

export default function e401() {
  return (
    <ErrorPage
      code="401"
      desc="Bad Request"
      image="/src/assets/e.jpg"
    />
  );
}
