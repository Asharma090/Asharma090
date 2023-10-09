import React, { useState } from "react";
import { Modal, Upload, message } from "antd";
import { useDispatch } from "react-redux";
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Share } from "@/icons";
import Base from "@/template/base";

const ReferVendorModal = () => {
  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage();
  const [showReferVendorModal, setShowReferVendorModal] = useState(false);

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Referree details submitted successfully',
    });
    setShowReferVendorModal(false);
  };

  const handleShowReferVendorModal = () => {
    setShowReferVendorModal(true);
  };

  const handleOnCancelReferVendor = () => {
    setShowReferVendorModal(false);
  };

  const uploadButton = (
    <div>
      {<PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <>
      <a onClick={handleShowReferVendorModal}>
        <Share />
      </a>
        <Modal
          visible={showReferVendorModal}
          title={"Refer Dev Cleaner"}
          onCancel={() => handleOnCancelReferVendor()}
          footer={null} 
          centered
        >
        <div
            className="p-4"
            style={{ maxHeight: "90vh", overflowY: "auto" }}
        >
            <div className="container">
            <div className="wrap">
                <div className="forgot-content">
                <div className="form">
                    <div className="form-group mb-4">
                    <label>Referree Name</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter Referree name"
                    />
                    </div>
                    <div className="form-group mb-4">
                      <label>Phone Number</label>
                      <input
                        type="phone"
                        className="form-control"
                        placeholder="Enter Referree phone number"
                      />
                    </div>

                    <div className="form-group mb-4">
                      <label>How do you know referee</label>
                      <select className="form-control">
                        <option>Friend</option>
                        <option>Social media contact</option>
                        <option>Whatsapp shared</option>
                        <option>Others</option>
                      </select>
                    </div>

                    <div className="form-group mb-4">
                      <label>Attach screenshot (Screenshot of WhatsApp, Facebook, other media where you referred your friend)</label>
                      <Upload
                        name="avatar"
                        listType="picture-card"
                        className="avatar-uploader"
                        showUploadList={false}
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        // beforeUpload={beforeUpload}
                        // onChange={handleChange}
                    >
                        {uploadButton}
                    </Upload>
                    </div>
                    {contextHolder}
                    <button
                      onClick={success}
                      className="btn btn-primary px-5 w-100"
                    >
                      Send
                    </button>
                </div>
                </div>
            </div>
            </div>
        </div>
        </Modal>
    </>    
  );
};

export default ReferVendorModal;
