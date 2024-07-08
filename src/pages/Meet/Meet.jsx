import React from 'react'
import './Meet.css'
import { Doctors } from '../../data/doctor/doctor'
import { useContext } from 'react'
import { AppContext } from '../../Context/Context'
import { FaAngleDown } from "react-icons/fa6";

const DocDes = ({item,mobile}) => {
  const context = useContext(AppContext)
  const doctor = context.doctor
  return (
    <>
      {mobile && <div className={`meet_us_des_main_title container
      ${item?.name === doctor?.name ? "active":""}`}
      onClick={() => context.handleClickDoctor(item)}>
        <span>{item?.name}</span>
        <span><FaAngleDown /></span>
        </div>}
      <div className={`meet_us_des_box ${mobile ? "container":""} 
      ${item?.name === doctor?.name ? "active":""}`}>
        <div className="meet_us_des_title">Meet Your {item?.profesional}, {item?.name}</div>
        <div className="meet_us_des_sub_title">{item?.subTitle}</div>
        <div className="meet_us_des_details">
          <div className={`meet_us_des_details_des ${item?.name === "Dr Satyajit" ? "satyajit" : ""}`}>
            {
              item?.des?.map((prodt, id) => {
                return (
                  <>
                    <li key={id} className="meet_us_des_details_box">
                      {prodt}
                    </li>

                  </>
                )
              })
            }
          </div>

          <div className="meet_us_des_details_box_img">
            <img src={item?.img} />
            <div className="doctor_name">
              <span>{item?.name}</span>
              <span>{item?.degree}</span>
              <span>{item?.subProfesional} {item?.profesional}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
const Meet = () => {
  const context = useContext(AppContext)
  const doctor = context.doctor

  
  return (
    <>
      <div className="meet_us">
        <div className="meet_us_content">
          <div className='bg_design'>hi</div>
          <div className={`meet_us_details`}>
            <div className="meet_us_list">
              <div className="meet_us_list_sticky">
                {
                  Doctors?.map((item, id) => {
                    return (
                      <div key={id} className="meet_us_list_box">
                        <div className={`meet_us_list_name ${context?.doctor?.name === item?.name ? "active" : ''}`}
                          onClick={() => context.handleClickDoctor(item)}>{item?.name}</div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
            <div className="meet_us_des">
              <div className="meet_desktop_mode">
                <DocDes item={doctor}/>
              </div>
              <div className="meet_mobile_mode">
                {
                  Doctors?.map((item,i)=>{
                    return(
                      <div key={i} className="meet_mobile_mode_box">
                        <DocDes item={item} mobile/>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Meet
