import ErrorPage from "./ErrorPage";

export default function Error400() {
    return (
        <ErrorPage 
            code="400" 
            message="OOops! The server couldn't understand your request. Please check the URL or try again later." 
            image="/img/e.jpg" 
        />
    );
}
