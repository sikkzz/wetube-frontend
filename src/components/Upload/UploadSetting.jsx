import React from "react";
import "./UploadSetting.scss";
import Icons from "../../constants/icon";

import {UploadStepData} from '../../constants/data/UploadStepData'

const UploadSetting = () => {
  return (
    <>
      <div className="upload_setting">
        <div className="upload_setting_header">
          <div className="upload_setting_title_container">
            <div className="upload_setting_title_text">video</div>
            <div className="upload_setting_title_button_container">
              <div className="upload_setting_title_button_box">
                <Icons.AiOutlineInfoCircle size={24} color="#fff" />
              </div>
              <div className="upload_setting_title_button_box">
                <Icons.AiOutlineClose size={24} color="#fff" />
              </div>
            </div>
          </div>

          <div className="upload_setting_stepper_container">
            <div className="upload_setting_stepper_box">
                <div className="upload_setting_stepper_wrapper">
                    {UploadStepData.map((item, index) => (
                        <div className="upload_setting_step_container" key={index}>
                        <button className="upload_setting_step_button">
                            <div className="upload_setting_step_title">
                                {item.title}
                            </div>
                            <div className="upload_setting_step_icon" />
                        </button>
                        <div className="upload_setting_step_separator" />
                    </div>
                    ))}
                    
                    
                </div>
            </div>
          </div>
        </div>



      </div>
    </>
  );
};

export default UploadSetting;
