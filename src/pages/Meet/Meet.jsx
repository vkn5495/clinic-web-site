import React from 'react'
import './Meet.css'
import { Doctors } from '../../data/doctor/doctor'
import { useContext } from 'react'
import { AppContext } from '../../Context/Context'

const Meet = () => {
  const context = useContext(AppContext)
  const doctor = context.doctor

  const DocDes = () => {
    return (
      <>
        {/* {mobile && <div className="meet_us_des_main_title">{doctor?.name}</div>} */}
        <div className="meet_us_des_box">
          <div className="meet_us_des_title">Meet Your {doctor?.profesional}, {doctor?.name}</div>
          <div className="meet_us_des_sub_title">{doctor?.subTitle}</div>
          <div className="meet_us_des_details">
            <div className={`meet_us_des_details_des ${doctor?.name === "Dr Satyajit" ? "satyajit" : ""}`}>
              {
                doctor?.des?.map((item, id) => {
                  return (
                    <>
                      <li key={id} className="meet_us_des_details_box">
                        {item}
                      </li>

                    </>
                  )
                })
              }
            </div>

            <div className="meet_us_des_details_box_img">
              <img src={doctor?.img} />
              <div className="doctor_name">
                <span>{doctor?.name}</span>
                <span>{doctor?.degree}</span>
                <span>{doctor?.subProfesional} {doctor?.profesional}</span>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
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
              <div className="desktop_mode">
                <DocDes />
              </div>
              <div className="mobile_mode">
                <DocDes mobile />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Meet
