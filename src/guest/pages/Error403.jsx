import ErrorPage from "./ErrorPage";

export default function Error403() {
    return (
        <ErrorPage 
            code="403" 
            message="You don’t have permission to access this page. Please contact the administrator if you think this is a mistake." 
            image="/img/403.png" 
        />
    );
}
  