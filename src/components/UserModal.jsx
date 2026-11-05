import React, { useEffect, useState } from "react";
import { Button, Modal, Form, Input, Select, notification, Upload } from "antd";
import { getBranchIdAndName } from "../services/BranchsService";
import { getAllRole } from "../services/RoleService";
import { createStaff } from "../services/StaffService";
import { useForm } from "antd/es/form/Form";
import { UploadOutlined } from "@ant-design/icons";
const { Option } = Select;

export default function UserModal({ open, close, resetData }) {
  const [confirmLoading, setConfirmLoading] = useState(false);

  const [brachData, setBranchData] = useState([]);

  const [roleData, setRoleData] = useState([]);

  const [file, setFile] = useState(null);

  const [form] = useForm();

  const [api, contextHolder] = notification.useNotification();

  const openNotificationWithIcon = (type, message) => {
    api[type]({
      title: "Notification",
      description: message,
    });
  };

  const handleOk = async () => {
    try {
      setConfirmLoading(true);
      await form.validateFields();
      const data = new FormData();
      data.append("Name", form.getFieldValue("name"));
      data.append("Tel", form.getFieldValue("tel"));
      data.append("Role", form.getFieldValue("role"));
      data.append("Branch", form.getFieldValue("branche"));
      data.append("Username", form.getFieldValue("username"));
      data.append("Password", form.getFieldValue("password"));
      data.append("Image", null);
      if (file != null) {
        data.append("Image", file);
      }
      const response = await createStaff(data);
      if (response.success) {
        setTimeout(() => {
          setConfirmLoading(false);
          handleCancel();
          openNotificationWithIcon("success", response.message);
          resetData();
        }, 2000);
      } else {
        setTimeout(() => {
          setConfirmLoading(false);
          openNotificationWithIcon("error", response.message);
        }, 2000);
      }
    } catch (error) {
      setConfirmLoading(false);
    }
  };

  const props = {
    action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
    listType: "picture",
    beforeUpload(file) {
      handleFileChange(file);
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          const img = document.createElement("img");
          img.src = reader.result;
          img.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = img.naturalWidth;
            canvas.height = img.naturalHeight;
            const ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0);
            ctx.fillStyle = "red";
            ctx.textBaseline = "middle";
            ctx.font = "33px Arial";
            ctx.fillText("Ant Design", 20, 20);
            canvas.toBlob((result) => resolve(result));
          };
        };
      });
    },
  };

  function handleFileChange(e) {
    if (e) {
      setFile(e);
    }
  }

  const handleCancel = () => {
    close();
    form.resetFields();
  };

  async function getBranchData() {
    const response = await getBranchIdAndName(
      localStorage.getItem("token-user"),
    );
    if (response.success) {
      setBranchData(response.data);
      return;
    }
  }

  async function getRoleData() {
    const response = await getAllRole(localStorage.getItem("token-user"));
    if (response.success) {
      setRoleData(response.data);
      return;
    }
  }

  // const handleFileChange = (e) => {
  //   // Get the first file selected
  //   const selectedFile = e.target.files[0];
  //   if (selectedFile) {
  //     setFile(selectedFile);
  //   }
  // };

  useEffect(() => {
    setTimeout(() => {
      getBranchData();
      getRoleData();
    }, 2000);
  }, []);

  return (
    <>
      {contextHolder}

      <Modal
        title="បង្កើតបុគ្គលិកថ្មី"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        centered
        width={600}
      >
        <Form form={form} layout="vertical">
          <div className="flex gap-4">
            <div className="w-full">
              <Form.Item
                name={"name"}
                label="ឈ្មោះ"
                rules={[{ required: true, message: "សូមបញ្ចូលទិន្ន័យ" }]}
              >
                <Input placeholder="បញ្ចូលឈ្មោះ" size="large" />
              </Form.Item>

              <Form.Item
                name={"tel"}
                label="លេខទូរស័ព្ទ"
                rules={[{ required: true, message: "សូមបញ្ចូលទិន្ន័យ" }]}
              >
                <Input placeholder="បញ្ចូលលេខទូរស័ព្ទ" size="large" />
              </Form.Item>

              <Form.Item
                name={"role"}
                label="ទួនាទី"
                rules={[{ required: true, message: "សូមបញ្ចូលទិន្ន័យ" }]}
              >
                <Select placeholder="ជ្រើសរើសទួនាទី" size="large">
                  {roleData
                    ? roleData.map((data) => {
                        return (
                          <Option key={data.id} value={data.id}>
                            {data.role}
                          </Option>
                        );
                      })
                    : null}
                </Select>
              </Form.Item>
            </div>
            <div className="w-full">
              <Form.Item
                name={"branche"}
                label="សាខា"
                rules={[{ required: true, message: "សូមបញ្ចូលទិន្ន័យ" }]}
              >
                <Select placeholder="រើសរើសសាខា" size="large">
                  {brachData
                    ? brachData.map((data) => {
                        return (
                          <Option key={data.id} value={data.id}>
                            {data.name}
                          </Option>
                        );
                      })
                    : null}
                </Select>
              </Form.Item>

              <Form.Item
                name={"username"}
                label="ឈ្មោះចូលប្រើប្រព័ន្ធ"
                rules={[{ required: true, message: "សូមបញ្ចូលទិន្ន័យ" }]}
              >
                <Input
                  placeholder="បញ្ចូលឈ្មោះសម្រាប់ចូលប្រើប្រព័ន្ធ"
                  size="large"
                />
              </Form.Item>
              <Form.Item
                name={"password"}
                label="លេខសម្ងាត់"
                rules={[
                  { required: true, message: "សូមបញ្ចូលទិន្ន័យ" },
                  { min: 8, message: "លេខសម្ងាត់តិចបំផុតត្រូវមាន 8 ខ្ទង់" },
                ]}
              >
                <Input placeholder="បញ្ចូលលេខសម្ងាត់" size="large" />
              </Form.Item>
            </div>
          </div>
          <Upload {...props}>
            <Button icon={<UploadOutlined />} type="primary">
              ជ្រើសរើសរូបភាព
            </Button>
          </Upload>
        </Form>
      </Modal>
    </>
  );
}
