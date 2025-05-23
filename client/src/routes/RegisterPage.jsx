import { SignUp } from "@clerk/clerk-react";

const RegisterPage = () => {
    return (
        <div className="w-full h-[calc(100vh-80px)] flex justify-center items-center">
            <SignUp signInUrl="/login" />
        </div>
    );
};

export default RegisterPage;
