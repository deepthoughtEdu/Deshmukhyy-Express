import React from "react";
import { useNavigate  } from "react-router-dom";
import swal from "sweetalert";
import { logoutUser } from "../utilities";

export default function NavBar(props) {
    const navigate = useNavigate ();

    const handleLogoout = async () => {
        await logoutUser();
        swal(
            'Success!',
            'Logged out successfully',
            'success'
        ).then(() => {
            navigate(0);
        });
    }

    return (
        <header className="page-header">
        <div className="d-flex justify-content-between w-100 align-items-center">
            <div className="d-flex">
            <img
                src="https://sdlms.deepthought.education/assets//uploads/files/images/dt_logo.png"
                className="rounded-circle dt-logo"
                alt="logo"
            />
            <div className="ml-2 my-auto">
                <span className="header-text1 mr-1 text-uppercase">Deshmukhyy</span>
                <span className="header-text2 text-uppercase">Express</span>
            </div>
            </div>
        </div>
        <button className="cursor-pointer btn bg-transparent border-0" onClick={handleLogoout}>
            <i className="fa fa-sign-out logout-icon" aria-hidden="true"></i>
        </button>
        </header>
    );
}
