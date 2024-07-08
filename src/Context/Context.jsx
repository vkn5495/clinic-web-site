import React, { createContext, useEffect, useRef, useState } from 'react'
import { servicesDoc } from '../data/service/ServiceDetails';
import { useLocation, useNavigate } from 'react-router-dom';
import { Doctors } from '../data/doctor/doctor';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const location = useLocation()
    const navigator = useNavigate()
    const [serviceMainHead, setMainServiceHead] = useState(servicesDoc[0])
    const [servicePerDetail, setServicePerDeatil] = useState(null)
    const [doctor, setDoctor] = useState(Doctors[0])
    const [slider, setSlider] = useState(null)
    const [navbar, setNavbar] = useState(null)
    const [toggle, setToggle] = useState(false)
    const [social, setSocial] = useState(false)

    const divRef = useRef(null);
    const socialRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setToggle(false);
            setSocial(false)
        };

        const handleClickOutside = (event) => {
            if (divRef.current && !divRef.current.contains(event.target)) {
                setToggle(false);
            }
            if (socialRef.current && !socialRef.current.contains(event.target)) {
                setSocial(false);
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

    const toggleOnclick = () => {
        setToggle(!toggle)
    }

    const socialOnclick = () => {
        setSocial(!social)
    }

    const handleServiceDeatil = (main, product, i) => {
        if (location.pathname !== 'service') {
            navigator('service')
        }
        // if (i !== null || i !== undefined) {
        //     setSlider(i)
        // }
        setSlider(i)
        setNavbar(2)
        setToggle(false)
        if (product?.name === servicePerDetail?.name) {
            setServicePerDeatil(null)
        }
        if (product === null) {
            if (main === serviceMainHead) {
                setMainServiceHead(null)
            }
            else {
                setMainServiceHead(main)
            }
        }
        else if (main === null) {
            if (product === servicePerDetail) {
                setServicePerDeatil(null)
            }
            else {
                setServicePerDeatil(product)
            }
        }
        else {
            setMainServiceHead(main)
            setServicePerDeatil(product)
        }
    }

    const handleClickDoctor = (item) => {
        if (location.pathname !== 'meet') {
            navigator('meet')
        }
        setDoctor(item)
        setNavbar(3)
        setToggle(false)
    }

    const handleClickNavbar = (id) => {
        if (id === 2 || id === 3) {
            setNavbar(navbar)
        }
        else {
            if (id === 1) {
                navigator("/")
            }
            else {
                navigator("contact")
            }
            setToggle(false)
            setNavbar(id)
        }
    }

    const contextValue = {
        servicePerDetail,
        serviceMainHead,
        handleServiceDeatil,
        doctor,
        handleClickDoctor,
        slider,
        navbar,
        handleClickNavbar,
        toggle,
        divRef,
        toggleOnclick,
        social,
        socialRef,
        socialOnclick
    }

    console.log(serviceMainHead)
    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    )
}
