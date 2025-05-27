import ErrorPage from "./ErrorPage";

export default function Error401() {
    return (
        <ErrorPage 
            code="401" 
            message="You’re not authorized to access this page. Please login and try again." 
            image="/img/401.png" 
        />
    );
}
  