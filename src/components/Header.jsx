import React, { useContext, useState } from 'react'
import './header.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';
import Logo from '../images/53f86fd3-d9f2-44d6-8f6b-3b4679ad0d00.jpg'
import vedio from '../images/videoplayback.mp4_1719339727358 (online-video-cutter.com).mp4'
import image from '../images/53f86fd3-d9f2-44d6-8f6b-3b4679ad0d00-removebg.png'
import { useEffect } from 'react';
import { useRef } from 'react';
import india from '../images/flag/in.png'
import russia from '../images/flag/ru.png'
import france from '../images/flag/fr.png'
import china from '../images/flag/cn.png'
import garmany from '../images/flag/de (1).png'
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube, FaWhatsappSquare } from 'react-icons/fa';
import { IoIosMail, IoLogoWhatsapp } from "react-icons/io";
import { servicesDoc } from '../data/service/ServiceDetails';
import { AppContext } from '../Context/Context';
import { FaCog } from 'react-icons/fa'
import { Doctors } from '../data/doctor/doctor';
import { GrLanguage } from "react-icons/gr";
import { MdOutlineMenu } from "react-icons/md";
import { BsMenuButtonWideFill } from "react-icons/bs";
import LogoTwo from '../images/WhatsApp Image 2024-07-06 at 3.31.09 PM-Photoroom(1).png'
import { MdEmail } from "react-icons/md";
import LogoThree from '../images/53f86fd3-d9f2-44d6-8f6b-3b4679ad0d00-removebg.png'
import { IoIosCall } from "react-icons/io";
import { IoClose } from "react-icons/io5";


const ThemeColor = () => {
    const themes = [
        {
            id: 1,
            color: '#6856ae',
            secondColor: '#a69acf'
        },

        {
            id: 2,
            color: '#f72b1d',
            secondColor: '#ea6866'
        },

        {
            id: 3,
            color: '#8a2ce2',
            secondColor: '#af75ed'
        },

        {
            id: 4,
            color: '#4169e1',
            secondColor: '#98a8ed'
        },

        {
            id: 5,
            color: '#d9a520',
            secondColor: '#debc36'
        },

        {
            id: 6,
            color: '#ef6293',
            secondColor: '#F38FB2'
        },

        {
            id: 7,
            color: '#99cd32',
            secondColor: '#badd76'
        },

        {
            id: 8,
            color: '#fa5a0f',
            secondColor: '#fc8a5d'
        },

        {
            id: 9,
            color: '#72b526',
            secondColor: '#96ce51'
        },

        {
            id: 10,
            color: '#ffb300',
            secondColor: '#ffc928'
        },
        {
            color: "#F44336",
            secondColor: "#E57373"
        },
        {
            color: "#673AB7",
            secondColor: "#9575CD"
        },
        {
            color: "#4CAF50",
            secondColor: "#81C784"
        },
        {
            color: "#FF5722",
            secondColor: "#FF8A65"
        },
        {
            color: "#E91E63",
            secondColor: "#F06292"
        },
        {
            color: "#3F51B5",
            secondColor: "#7986CB"
        },
        {
            color: "#00ACC1",
            secondColor: "#00BCD4"
        },

        {
            color: "#9C27B0",
            secondColor: "#BA68C8"
        },
        {
            color: "#2196F3",
            secondColor: "#64B5F6"
        },
        {
            color: "#26A69A",
            secondColor: "#80CBC4"
        },
        {
            color: "#FF4081",
            secondColor: "#F48FB1"
        },
        {
            color: "#FF9800",
            secondColor: "#FFB74D"
        },
        {
            color: "#D500F9",
            secondColor: "#EA80FC"
        },
        {
            color: "#651FFF",
            secondColor: "#B388FF"
        },
        {
            color: "#3D5AFE",
            secondColor: "#8C9EFF"
        },
        {
            color: "#2979FF",
            secondColor: "#82B1FF"
        },

        {
            color: "#FF6E40",
            secondColor: "#FF9E80"
        },

    ]

    // const getStorageColor = () => {
    //     let color = '#4169e1';
    //     if (localStorage.getItem('color')) {
    //         color = localStorage.getItem('color')
    //     }
    //     return color
    // }

    const [showSwitch, seyShowSwitch] = useState(false)
    const [color, setColor] = useState('#4169e1')
    const [secondColor, setSecondColor] = useState('#98a8ed')

    const changeColor = (color) => {
        setColor(color.color)
        setSecondColor(color.secondColor)
    }

    useEffect(() => {
        document.documentElement.style.setProperty('--main-color', color);
        document.documentElement.style.setProperty('--secondary-color', secondColor);
        // localStorage.setItem('color', color)
    }, [color, secondColor]);

    return (
        <>
            <div>
                <div className={showSwitch ? 'style_switcher show_switcher' : "style_switcher"}>
                    <div className="style_switcher_toggler" onClick={() => seyShowSwitch(!showSwitch)}>
                        <FaCog />
                    </div>

                    <h3 className="style_switcher_title">style switcher</h3>
                    <div className="style_switcher_item">
                        {
                            themes.map((theme, ix) => {
                                return (
                                    <div key={ix} onClick={() => changeColor(theme)}
                                        className="color_box"
                                        style={{
                                            background: theme.color,
                                            width: '2rem',
                                            height: '2rem',
                                            borderRadius: "50%",
                                            cursor: "pointer"
                                        }}>

                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="style_switcher_close"
                        onClick={() => seyShowSwitch(!showSwitch)}>&times;</div>
                </div>
            </div>
        </>
    )
}

const SocialIcon = () => {
    const socialMedia = [

        {
            name: "FaceBook",
            link: "https://www.facebook.com/facemultispecialtyclinic",
            target: '_blank',
            icon: <FaFacebook />
        },
        {
            name: "whatApp",
            link: 'https://api.whatsapp.com/send?phone=9021594170',
            target: '_blank',
            icon: <IoLogoWhatsapp />,
        },
        {
            name: "Gmail",
            link: 'mailto:facemultispecialtyclinic@gmail.com',
            target: '_blank',
            icon: <MdEmail />
        },
        {
            name: "Instagram",
            link: 'https://www.instagram.com/facemultispecialtyclinic',
            target: '_blank',
            icon: <RiInstagramFill />
        },
        {
            name: "LinkedIn",
            link: 'https://www.linkedin.com/in/dr-sthita-gurrala',
            target: '_blank',
            icon: <FaLinkedin />
        },

    ]

    const handleClick = (url, target) => {
        if (target === '_blank') {
            window.open(url, target);
        } else {
            window.location.href = url;
        }
    };
    return (
        <div className="social_icon">
            <div className="social_icon_content">
                <div className="box">
                    {
                        socialMedia.map((item, idx) => {
                            return (
                                <div key={idx} className="social_media_icon_box"
                                    onClick={() => handleClick(item?.link, item?.target)}
                                >{item?.icon}</div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
const Branding = () => {
    const navigate = useNavigate()
    const doctorName = [`${i18n.t("dr")} ${i18n.t("Sthita Gurrala")}`, 'dr Satyajit']

    return (
        <>
            <div className="branding">
                <div className="branding_content container">
                    <div className="branding_left"
                        style={{
                            cursor: "pointer"
                        }}
                        onClick={() => navigate('/')
                        }
                    >
                        <div className="logo_img">
                            <img src={LogoTwo} alt="" />
                        </div>
                        <div className="logo_img_two">
                            <img src={LogoThree} alt="" />
                        </div>
                    </div>
                    <div className="branding_right">
                        <div className="branding_right_box">
                            {
                                doctorName.slice(0, 1).map((doc, id) => {
                                    return (
                                        <React.Fragment key={id}>
                                            <div className="branding_doc_name">{doc}</div>
                                        </React.Fragment>
                                    )
                                })
                            }
                            <div className="branding_doc_call_now">
                                <span><IoIosCall />:</span>
                                <span>call now :</span>
                                <span> +91 9021594170</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
const HeroBanner = () => {
    const location = useLocation()
    return (
        <>
            <div className={`hero_banner ${location.pathname !== '/' ? "not_homa_page" : ''}`}>
                <video width="100%" autoPlay muted loop className={`dark-video ${location.pathname === "/" ? "" : "new_design"}`}>
                    <source src={vedio} type="video/mp4" />
                </video>
            </div>
            <div
                // className="hero_banner_content"
                className={`hero_banner_content ${location.pathname === "/" ? "" : "new_design"}`}>
                <img src={image} alt=""
                    className={`color-filter ${location.pathname === "/" ? "" : "new_design"}`} />
                {
                    location.pathname === "/" &&
                    <>
                        <div className="hero_banner_hospital_name">face</div>
                        <div className="hero_banner_des">{i18n.t("hospital_type")}</div>
                    </>
                }

            </div>
        </>
    )
}
const Navbar = () => {

    const language = [
        {
            name: "english",
            code: "en",
            img: india
        },
        {
            name: "russian",
            code: "ru",
            img: russia
        },
        {
            name: "german",
            code: "de",
            img: garmany
        }
    ]
    const context = useContext(AppContext)
    const stickyDivRef = useRef(null);
    const [stickyHeader, setStickyHeader] = useState(false)
    const navigator = useNavigate()
    const location = useLocation()
    const [hoverLanguage, setHoverLanguage] = useState(false)
    const [toggle, setToggle] = useState(false)

    const divRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setToggle(false);
        };

        const handleClickOutside = (event) => {
            if (divRef.current && !divRef.current.contains(event.target)) {
                setToggle(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        document.addEventListener('mousedown', handleClickOutside);

        // Cleanup the event listeners on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    useEffect(() => {
        const handleScroll = () => {
            const stickyDiv = stickyDivRef.current;
            if (window.scrollY > 125) {
                setStickyHeader(true)
            } else {
                setStickyHeader(false)
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleOnclick = () => {
        setToggle(!toggle)
    }

    const { t } = useTranslation();

    const handleChangeLanguage = (e) => {
        i18n.changeLanguage(e)
    }

    const Language = () => {
        return (
            <div className={`lang ${stickyHeader ? "item_gap" : ""}`}>
                <li
                    className={`${stickyHeader ? "sticky" : ""} lang_content`}>
                    <span
                        className='lang_content_icon'
                        onMouseOver={() => setHoverLanguage(true)}
                        onMouseOut={() => setHoverLanguage(false)}><GrLanguage /></span>
                    <div className={`lang_content_details ${hoverLanguage ? "active" : ""}`}>
                        <div className="lang_content_details_des">
                            <ul>
                                {
                                    language?.map((item, id) => {
                                        return (
                                            <>
                                                <li key={id} onClick={() => handleChangeLanguage(item?.code)}>
                                                    <img src={item?.img} alt="" />
                                                    <span>{item?.name}</span>
                                                </li>
                                            </>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </li>

            </div>
        )
    }
    console.log(toggle)
    return (
        <div className={`navabar ${stickyHeader ? "active" : ""}`} ref={stickyDivRef}>
            <div className={`nav-links container ${stickyHeader ? "p-0" : "margin_bottom"}`}>
                {
                    stickyHeader && <div className="navbar_logo"
                        onClick={() => navigator('/')}>
                        <div className="logo_img">
                            <img src={LogoTwo} className='color-filter' alt="" />
                        </div>
                        <div className="logo_img_two">
                            <img src={LogoThree} className='color-filter' alt="" />
                        </div>
                    </div>
                }

                <nav ref={divRef} className={`nav main-menu ${stickyHeader ? "need_gap" : ""} ${toggle ? "open" : "close"}`}>
                    <div className="close_button"
                        onClick={toggleOnclick}><IoClose /></div>
                    <div className={`navigation ${stickyHeader ? "item_gap" : "width_small"}`} id="navbar">
                        <li
                            className={`${stickyHeader ? "sticky" : ""} ${context.navbar === 1 ? "current" : ""} 
                                dropdown`}>
                            <span onClick={() => context.handleClickNavbar(1)}
                                style={{
                                    color: '#fff',
                                    textDecoration: 'none'
                                }}>{i18n.t("Home")}</span>
                        </li>
                        <li
                            className={`${stickyHeader ? "sticky" : ""} ${context.navbar === 2 ? "current" : ""} dropdown`}
                            id="mega-menu">
                            <span onClick={() => context.handleClickNavbar(2)}>{i18n.t("Service")}</span>
                            <div className={`mega-menu service`}>
                                <div className="mega-menu-bar row">
                                    <ul>
                                        {
                                            servicesDoc?.map((item, id) => {
                                                const setUp = () => id === 1 ? item?.subHead[0]?.subTitle[0] : item?.subTitle[0]
                                                return (
                                                    <>
                                                        <li key={id}
                                                            onClick={() => context.handleServiceDeatil(item, null)}>{item?.title}</li>
                                                    </>
                                                )
                                            })
                                        }

                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li
                            className={`${stickyHeader ? "sticky" : ""} ${context.navbar === 3 ? "current" : ""} dropdown`}>
                            <span onClick={() => context.handleClickNavbar(3)}>{i18n.t("MeetUs")}</span>
                            <div className="mega-menu meet">
                                <div className="mega-menu-bar row">
                                    <ul>
                                        {
                                            Doctors?.map((item, id) => {
                                                return (
                                                    <li key={id}
                                                        onClick={() => context.handleClickDoctor(item)}>{item?.name}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li
                            className={`${stickyHeader ? "sticky" : ""} ${context.navbar === 4 ? "current" : ""} dropdown`}>
                            <span onClick={() => context.handleClickNavbar(4)}>{i18n.t("ContactUs")}</span>
                            {/* <div className="mega-menu">
                                <div className="mega-menu-bar row">
                                    <ul>
                                        <li style={{ color: "#000" }}>contact information</li>
                                    </ul>
                                </div>
                            </div> */}
                        </li>
                    </div>
                </nav>

                {/* <Language /> */}
                <div className="navbar_toggle"
                    onClick={toggleOnclick}>
                    <MdOutlineMenu />
                    {/* <BsMenuButtonWideFill /> */}
                </div>
            </div>
        </div>
    )
}

const Header = () => {
    const { t } = useTranslation();

    return (
        <>
            {/* <ThemeColor /> */}
            <SocialIcon />
            <Branding />
            <Navbar />
            <HeroBanner />
        </>
    )
}

export default Header
