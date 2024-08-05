import Link from 'next/link'
import React from 'react'

import Image from 'next/image'
import Logo from "../../assets/images/logo.png"
import slide01 from "../../assets/images/slides/promo-a.png"
import slide02 from "../../assets/images/slides/promo-b.png"
import slide03 from "../../assets/images/slides/promo-c.png"
import Slider from "react-slick"


const Login = () => {


    var settings = {
        dots: true,
        infinite: false,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div className="nk-app-root">
                <div className="nk-main ">
                    <div className="nk-wrap nk-wrap-nosidebar">
                        <div className="nk-content ">
                            <div className="nk-split nk-split-page nk-split-lg">
                                <div className="nk-split-content nk-block-area nk-block-area-column nk-auth-container bg-white">
                                    <div className="absolute-top-right d-lg-none p-3 p-sm-5">
                                        <a href="#" className="toggle btn-white btn btn-icon btn-light" data-target="athPromo"><em className="icon ni ni-info"></em></a>
                                    </div>
                                    <div className="nk-block nk-block-middle nk-auth-body">
                                        <div className="brand-logo pb-5">
                                            <Link href="html/index.html" className="logo-link">
                                                <Image src={Logo} className="logo-light logo-img logo-img-lg" alt="logo" />
                                                <Image className="logo-dark logo-img logo-img-lg" src={Logo} alt="logo-dark" width={200} />
                                            </Link>
                                        </div>
                                        <div className="nk-block-head">
                                            <div className="nk-block-head-content">
                                                <h5 className="nk-block-title">Sign-In</h5>
                                                <div className="nk-block-des">
                                                    <p>Access the Rediger panel using your email and passcode.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <form action="#" className="form-validate is-alter" autoComplete="off">
                                            <div className="form-group">
                                                <div className="form-label-group">
                                                    <label className="form-label" htmlFor="email-address">Email or Username</label>
                                                    <a className="link link-primary link-sm" href="#">Need Help?</a>
                                                </div>
                                                <div className="form-control-wrap">
                                                    <input autoComplete="off" type="text" className="form-control form-control-lg" required id="email-address" placeholder="Enter your email address or username" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="form-label-group">
                                                    <label className="form-label" htmlFor="password">Passcode</label>
                                                    <a className="link link-primary link-sm" href="html/pages/auths/auth-reset.html">Forgot Code?</a>
                                                </div>
                                                <div className="form-control-wrap">
                                                    <a href="#" className="form-icon form-icon-right passcode-switch lg" data-target="password">
                                                        <em className="passcode-icon icon-show icon ni ni-eye"></em>
                                                        <em className="passcode-icon icon-hide icon ni ni-eye-off"></em>
                                                    </a>
                                                    <input autoComplete="new-password" type="password" className="form-control form-control-lg" required id="password" placeholder="Enter your passcode" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <button className="btn btn-lg btn-primary btn-block">Sign in</button>
                                            </div>
                                        </form>
                                        <div className="form-note-s2 pt-4"> New on our platform? <a href="html/pages/auths/auth-register.html">Create an account</a>
                                        </div>
                                        <div className="text-center pt-4 pb-3">
                                            <h6 className="overline-title overline-title-sap"><span>OR</span></h6>
                                        </div>
                                        <ul className="nav justify-center gx-4">
                                            <li className="nav-item"><a className="nav-link" href="#">Facebook</a></li>
                                            <li className="nav-item"><a className="nav-link" href="#">Google</a></li>
                                        </ul>
                                        <div className="text-center mt-5">
                                            <span className="fw-500">I don't have an account? <a href="#">Try 15 days free</a></span>
                                        </div>
                                    </div>
                                    <div className="nk-block nk-auth-footer">
                                        <div className="nk-block-between">
                                            <ul className="nav nav-sm">
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#">Terms & Condition</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#">Privacy Policy</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#">Help</a>
                                                </li>
                                                <li className="nav-item dropup">
                                                    <a className="dropdown-toggle dropdown-indicator has-indicator nav-link" data-bs-toggle="dropdown" data-offset="0,10"><small>English</small></a>
                                                    <div className="dropdown-menu dropdown-menu-sm dropdown-menu-end">
                                                        <ul className="language-list">
                                                            <li>
                                                                <a href="#" className="language-item">
                                                                    <img src="./images/flags/english.png" alt="" className="language-flag" />
                                                                    <span className="language-name">English</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="language-item">
                                                                    <img src="./images/flags/spanish.png" alt="" className="language-flag" />
                                                                    <span className="language-name">Español</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="language-item">
                                                                    <img src="./images/flags/french.png" alt="" className="language-flag" />
                                                                    <span className="language-name">Français</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="language-item">
                                                                    <img src="./images/flags/turkey.png" alt="" className="language-flag" />
                                                                    <span className="language-name">Türkçe</span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="mt-3">
                                            <p>&copy; 2023 Rediger. All Rights Reserved.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="nk-split-content nk-split-stretch bg-lighter d-flex toggle-break-lg toggle-slide toggle-slide-right" data-toggle-body="true" data-content="athPromo" data-toggle-screen="lg" data-toggle-overlay="true">
                                    <div className="slider-wrap w-100 w-max-550px p-3 p-sm-5 m-auto">
                                        <Slider {...settings}>
                                            <div className="slider-item">
                                                <div className="nk-feature nk-feature-center">
                                                    <div className="nk-feature-img">
                                                        <Image className="round" src={slide01} alt="" />
                                                    </div>
                                                    <div className="nk-feature-content py-4 p-sm-5">
                                                        <h4>Rediger</h4>
                                                        <p>You can start to create your products easily with its user-friendly design & most completed responsive layout.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slider-item">
                                                <div className="nk-feature nk-feature-center">
                                                    <div className="nk-feature-img">
                                                        <Image className="round" src={slide02} alt="" />
                                                    </div>
                                                    <div className="nk-feature-content py-4 p-sm-5">
                                                        <h4>Rediger</h4>
                                                        <p>You can start to create your products easily with its user-friendly design & most completed responsive layout.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slider-item">
                                                <div className="nk-feature nk-feature-center">
                                                    <div className="nk-feature-img">
                                                        <Image className="round" src={slide03} alt="" />
                                                    </div>
                                                    <div className="nk-feature-content py-4 p-sm-5">
                                                        <h4>Rediger</h4>
                                                        <p>You can start to create your products easily with its user-friendly design & most completed responsive layout.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slider>
                                        <div className="slider-dots"></div>
                                        <div className="slider-arrows"></div>
                                    </div>
                                </div>
                            </div></div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Login;