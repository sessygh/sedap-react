import React from "react";

export default function ErrorPage({ code, message, image }) {
    return (
        <div className="min-h-screen flex flex-col items-center bg-green-500 p-4">
            <div className="bg-white rounded-2xl shadow-lg p-10 text-center max-w-xl w-full mt-20">
                <img src="/img/e.jpg" alt="Error Illustration" className="w-48 mx-auto mb-6" />
                <h1 className="text-4xl font-bold text-green-600 mb-4">{code} Error</h1>
                <p className="text-gray-600 text-lg mb-8">{message}</p>
                <button
                    onClick={() => window.location.href = "/"}
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-md transition"
                >
                    Back to Dashboard
                </button>
            </div>
        </div>
    );
}
