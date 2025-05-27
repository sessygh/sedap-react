import ErrorPage from "../components/ErrorPage";

export default function Error403() {
  return (
    <ErrorPage
      code="403"
      desc="Bad Request"
      image="/src/assets/e.jpg"
    />
  );
}
