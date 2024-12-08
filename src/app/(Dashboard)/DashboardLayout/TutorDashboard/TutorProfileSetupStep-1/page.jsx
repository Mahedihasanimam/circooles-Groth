
'use client';

import React, { useState } from "react";
import { Steps, Form, Input, Select, Tag, Button, Upload } from "antd";
import { useRouter } from "next/navigation";
import TextArea from "antd/es/input/TextArea";
import Dragger from "antd/es/upload/Dragger";
import { InboxOutlined, PlusOutlined } from "@ant-design/icons";

const { Step } = Steps;
const { Option } = Select;

const BasicInfo = () => {
  const [currentSetp, setCurrentrSetps] = useState(0)
  const [fileList, setFileList] = useState([]);
  const [form] = Form.useForm(); // Form instance
  const router = useRouter();





  // Handle form submission
  const handleFormSubmit = (values) => {
    console.log(values);
    setCurrentrSetps(1)



    router.push('/DashboardLayout/TutorDashboard/TutorProfileSetupStep-2')
  };
  const handleFileChange = ({ fileList }) => {
    setFileList(fileList); // Update fileList state
  };


  return (
    <div className="lg:flex flex-cols gap-8 p-6 bg-white h-screen pt-8">
      {/* Sidebar */}
      <div className="lg:w-1/4 w-full bg-[#F9FAFB] p-4 h-fit rounded-lg">
        <div className="py-6 space-y-2">
          <h1>Welcome to Circooles</h1>
          <p className="text-sm text-[#667085]">
            Follow these steps to apply for an account on the Circooles Tutor Platform:
          </p>
        </div>

        <Steps direction="vertical" current={currentSetp} className="text-left">
          <Step className="h-[60px] font-bold text-[#000000]" title="Basic Info" />
          <Step className="h-[60px] font-bold text-[#000000]" title="Professional Info" />
          <Step className="h-[60px] font-bold text-[#000000]" title="Qualifications" />
          <Step className="h-[60px] font-bold text-[#000000]" title="Availability" />
        </Steps>
      </div>

      {/* Form Section */}
      <div className="lg:w-3/4 w-full">
        <h1 className="text-lg mb-4 text-[38px] font-semibold pl-2 border-l-4 border-[#14698A]">Basic Info</h1>
        <Form
          form={form}
          className="pt-[48px]"
          layout="vertical"
          onFinish={handleFormSubmit} // Form submission handler
        >


          {/* TO DO CUSTOM PHOTO UPLOAD OR DRAG&DROP  */}
          <Form.Item className="mb-20 pl-4" name="profile">
            <Upload
              fileList={fileList}
              listType="picture-card"
              beforeUpload={() => false} // Prevent immediate upload
              onChange={handleFileChange} // Update fileList
            >
              {fileList.length < 1 && (
                <div>
                  <svg width="160" height="186" viewBox="0 0 160 186" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="160" height="160" rx="4" fill="#E4E7EC" />
                    <path d="M4.57919 177.182L4.64737 175.307L3.06214 176.312L2.65305 175.597L4.32351 174.727L2.65305 173.858L3.06214 173.142L4.64737 174.148L4.57919 172.273H5.39737L5.32919 174.148L6.91442 173.142L7.32351 173.858L5.65305 174.727L7.32351 175.597L6.91442 176.312L5.32919 175.307L5.39737 177.182H4.57919Z" fill="#D92D20" />
                    <path d="M14.7724 172.273H15.8292V178.051C15.8292 178.648 15.6886 179.18 15.4073 179.649C15.1289 180.115 14.7354 180.483 14.2269 180.753C13.7184 181.02 13.1218 181.153 12.4371 181.153C11.7525 181.153 11.1559 181.02 10.6474 180.753C10.1388 180.483 9.74396 180.115 9.46271 179.649C9.1843 179.18 9.0451 178.648 9.0451 178.051V172.273H10.1019V177.966C10.1019 178.392 10.1957 178.771 10.3832 179.104C10.5707 179.433 10.8377 179.693 11.1843 179.884C11.5337 180.071 11.9513 180.165 12.4371 180.165C12.9229 180.165 13.3406 180.071 13.69 179.884C14.0394 179.693 14.3065 179.433 14.4911 179.104C14.6786 178.771 14.7724 178.392 14.7724 177.966V172.273ZM17.8033 183.455V174.455H18.7749V175.494H18.8942C18.968 175.381 19.0703 175.236 19.201 175.06C19.3345 174.881 19.5249 174.722 19.772 174.582C20.022 174.44 20.3601 174.369 20.7862 174.369C21.3374 174.369 21.8232 174.507 22.2436 174.783C22.6641 175.058 22.9922 175.449 23.228 175.955C23.4638 176.46 23.5817 177.057 23.5817 177.744C23.5817 178.438 23.4638 179.038 23.228 179.547C22.9922 180.053 22.6655 180.445 22.2479 180.723C21.8303 180.999 21.3487 181.136 20.8033 181.136C20.3828 181.136 20.0462 181.067 19.7933 180.928C19.5405 180.786 19.3459 180.625 19.2095 180.446C19.0732 180.264 18.968 180.114 18.8942 179.994H18.8089V183.455H17.8033ZM18.7919 177.727C18.7919 178.222 18.8643 178.658 19.0092 179.036C19.1541 179.411 19.3658 179.705 19.6442 179.918C19.9226 180.128 20.2635 180.233 20.6669 180.233C21.0874 180.233 21.4382 180.122 21.7195 179.901C22.0036 179.676 22.2166 179.375 22.3587 178.997C22.5036 178.616 22.576 178.193 22.576 177.727C22.576 177.267 22.505 176.852 22.3629 176.483C22.2237 176.111 22.0121 175.817 21.728 175.601C21.4467 175.382 21.093 175.273 20.6669 175.273C20.2578 175.273 19.9141 175.376 19.6357 175.584C19.3572 175.788 19.147 176.075 19.005 176.445C18.8629 176.811 18.7919 177.239 18.7919 177.727ZM26.1214 172.273V181H25.1158V172.273H26.1214ZM30.6225 181.136C30.0316 181.136 29.5131 180.996 29.0671 180.714C28.6239 180.433 28.2773 180.04 28.0273 179.534C27.7802 179.028 27.6566 178.437 27.6566 177.761C27.6566 177.08 27.7802 176.484 28.0273 175.976C28.2773 175.467 28.6239 175.072 29.0671 174.791C29.5131 174.51 30.0316 174.369 30.6225 174.369C31.2134 174.369 31.7305 174.51 32.1737 174.791C32.6197 175.072 32.9663 175.467 33.2134 175.976C33.4634 176.484 33.5884 177.08 33.5884 177.761C33.5884 178.437 33.4634 179.028 33.2134 179.534C32.9663 180.04 32.6197 180.433 32.1737 180.714C31.7305 180.996 31.2134 181.136 30.6225 181.136ZM30.6225 180.233C31.0714 180.233 31.4407 180.118 31.7305 179.888C32.0202 179.658 32.2347 179.355 32.3739 178.98C32.5131 178.605 32.5827 178.199 32.5827 177.761C32.5827 177.324 32.5131 176.916 32.3739 176.538C32.2347 176.161 32.0202 175.855 31.7305 175.622C31.4407 175.389 31.0714 175.273 30.6225 175.273C30.1737 175.273 29.8043 175.389 29.5146 175.622C29.2248 175.855 29.0103 176.161 28.8711 176.538C28.7319 176.916 28.6623 177.324 28.6623 177.761C28.6623 178.199 28.7319 178.605 28.8711 178.98C29.0103 179.355 29.2248 179.658 29.5146 179.888C29.8043 180.118 30.1737 180.233 30.6225 180.233ZM37.0497 181.153C36.6349 181.153 36.2585 181.075 35.9205 180.919C35.5824 180.76 35.3139 180.531 35.1151 180.233C34.9162 179.932 34.8168 179.568 34.8168 179.142C34.8168 178.767 34.8906 178.463 35.0384 178.23C35.1861 177.994 35.3835 177.81 35.6307 177.676C35.8778 177.543 36.1506 177.443 36.4489 177.378C36.75 177.31 37.0526 177.256 37.3565 177.216C37.7543 177.165 38.0767 177.126 38.3239 177.101C38.5739 177.072 38.7557 177.026 38.8693 176.96C38.9858 176.895 39.044 176.781 39.044 176.619V176.585C39.044 176.165 38.929 175.838 38.6989 175.605C38.4716 175.372 38.1264 175.256 37.6634 175.256C37.1832 175.256 36.8068 175.361 36.5341 175.571C36.2614 175.781 36.0696 176.006 35.9588 176.244L35.0043 175.903C35.1747 175.506 35.402 175.196 35.6861 174.974C35.973 174.75 36.2855 174.594 36.6236 174.506C36.9645 174.415 37.2997 174.369 37.6293 174.369C37.8395 174.369 38.081 174.395 38.3537 174.446C38.6293 174.494 38.8949 174.595 39.1506 174.749C39.4091 174.902 39.6236 175.134 39.794 175.443C39.9645 175.753 40.0497 176.168 40.0497 176.688V181H39.044V180.114H38.9929C38.9247 180.256 38.8111 180.408 38.652 180.57C38.4929 180.732 38.2813 180.869 38.017 180.983C37.7528 181.097 37.4304 181.153 37.0497 181.153ZM37.2031 180.25C37.6009 180.25 37.9361 180.172 38.2088 180.016C38.4844 179.859 38.6918 179.658 38.831 179.411C38.973 179.163 39.044 178.903 39.044 178.631V177.71C39.0014 177.761 38.9077 177.808 38.7628 177.851C38.6207 177.891 38.456 177.926 38.2685 177.957C38.0838 177.986 37.9034 178.011 37.7273 178.034C37.554 178.054 37.4134 178.071 37.3054 178.085C37.044 178.119 36.7997 178.175 36.5724 178.251C36.348 178.325 36.1662 178.437 36.027 178.588C35.8906 178.736 35.8224 178.937 35.8224 179.193C35.8224 179.543 35.9517 179.807 36.2102 179.986C36.4716 180.162 36.8026 180.25 37.2031 180.25ZM44.3569 181.136C43.8114 181.136 43.3299 180.999 42.9123 180.723C42.4947 180.445 42.168 180.053 41.9322 179.547C41.6964 179.038 41.5785 178.438 41.5785 177.744C41.5785 177.057 41.6964 176.46 41.9322 175.955C42.168 175.449 42.4961 175.058 42.9165 174.783C43.337 174.507 43.8228 174.369 44.3739 174.369C44.8001 174.369 45.1367 174.44 45.3839 174.582C45.6339 174.722 45.8242 174.881 45.9549 175.06C46.0884 175.236 46.1921 175.381 46.266 175.494H46.3512V172.273H47.3569V181H46.3853V179.994H46.266C46.1921 180.114 46.087 180.264 45.9506 180.446C45.8143 180.625 45.6197 180.786 45.3668 180.928C45.114 181.067 44.7773 181.136 44.3569 181.136ZM44.4933 180.233C44.8967 180.233 45.2376 180.128 45.516 179.918C45.7944 179.705 46.006 179.411 46.1509 179.036C46.2958 178.658 46.3683 178.222 46.3683 177.727C46.3683 177.239 46.2972 176.811 46.1552 176.445C46.0131 176.075 45.8029 175.788 45.5245 175.584C45.2461 175.376 44.9023 175.273 44.4933 175.273C44.0671 175.273 43.712 175.382 43.4279 175.601C43.1467 175.817 42.935 176.111 42.793 176.483C42.6538 176.852 42.5842 177.267 42.5842 177.727C42.5842 178.193 42.6552 178.616 42.7972 178.997C42.9421 179.375 43.1552 179.676 43.4364 179.901C43.7205 180.122 44.0728 180.233 44.4933 180.233ZM53.3612 183.455C53.1907 183.455 53.0387 183.44 52.9052 183.412C52.7717 183.386 52.6793 183.361 52.6282 183.335L52.8839 182.449C53.1282 182.511 53.3441 182.534 53.5316 182.517C53.7191 182.5 53.8853 182.416 54.0302 182.266C54.1779 182.118 54.3129 181.878 54.435 181.545L54.6225 181.034L52.2021 174.455H53.293L55.0998 179.67H55.168L56.9748 174.455H58.0657L55.2873 181.955C55.1623 182.293 55.0075 182.572 54.8228 182.794C54.6381 183.018 54.4237 183.185 54.1793 183.293C53.9379 183.401 53.6651 183.455 53.3612 183.455ZM61.8178 181.136C61.2269 181.136 60.7085 180.996 60.2624 180.714C59.8192 180.433 59.4727 180.04 59.2227 179.534C58.9755 179.028 58.8519 178.437 58.8519 177.761C58.8519 177.08 58.9755 176.484 59.2227 175.976C59.4727 175.467 59.8192 175.072 60.2624 174.791C60.7085 174.51 61.2269 174.369 61.8178 174.369C62.4087 174.369 62.9258 174.51 63.369 174.791C63.815 175.072 64.1616 175.467 64.4087 175.976C64.6587 176.484 64.7837 177.08 64.7837 177.761C64.7837 178.437 64.6587 179.028 64.4087 179.534C64.1616 180.04 63.815 180.433 63.369 180.714C62.9258 180.996 62.4087 181.136 61.8178 181.136ZM61.8178 180.233C62.2667 180.233 62.636 180.118 62.9258 179.888C63.2156 179.658 63.43 179.355 63.5692 178.98C63.7085 178.605 63.7781 178.199 63.7781 177.761C63.7781 177.324 63.7085 176.916 63.5692 176.538C63.43 176.161 63.2156 175.855 62.9258 175.622C62.636 175.389 62.2667 175.273 61.8178 175.273C61.369 175.273 60.9996 175.389 60.7099 175.622C60.4201 175.855 60.2056 176.161 60.0664 176.538C59.9272 176.916 59.8576 177.324 59.8576 177.761C59.8576 178.199 59.9272 178.605 60.0664 178.98C60.2056 179.355 60.4201 179.658 60.7099 179.888C60.9996 180.118 61.369 180.233 61.8178 180.233ZM70.4439 178.324V174.455H71.4496V181H70.4439V179.892H70.3757C70.2223 180.224 69.9837 180.507 69.6598 180.74C69.3359 180.97 68.9268 181.085 68.4325 181.085C68.0234 181.085 67.6598 180.996 67.3416 180.817C67.0234 180.635 66.7734 180.362 66.5916 179.999C66.4098 179.632 66.3189 179.17 66.3189 178.614V174.455H67.3246V178.545C67.3246 179.023 67.4581 179.403 67.7251 179.688C67.995 179.972 68.3388 180.114 68.7564 180.114C69.0064 180.114 69.2607 180.05 69.5192 179.922C69.7805 179.794 69.9993 179.598 70.1754 179.334C70.3544 179.07 70.4439 178.733 70.4439 178.324ZM73.2915 181V174.455H74.2631V175.443H74.3313C74.4506 175.119 74.6665 174.857 74.979 174.655C75.2915 174.453 75.6438 174.352 76.0359 174.352C76.1097 174.352 76.2021 174.354 76.3129 174.357C76.4237 174.359 76.5075 174.364 76.5643 174.369V175.392C76.5302 175.384 76.4521 175.371 76.3299 175.354C76.2106 175.334 76.0842 175.324 75.9506 175.324C75.6325 175.324 75.3484 175.391 75.0984 175.524C74.8512 175.655 74.6552 175.837 74.5103 176.07C74.3683 176.3 74.2972 176.562 74.2972 176.858V181H73.2915ZM83.9609 181H81.2678V172.273H84.0803C84.9268 172.273 85.6513 172.447 86.2536 172.797C86.8558 173.143 87.3175 173.642 87.6385 174.293C87.9595 174.94 88.12 175.716 88.12 176.619C88.12 177.528 87.9581 178.311 87.6342 178.967C87.3104 179.621 86.8388 180.124 86.2195 180.476C85.6001 180.825 84.8473 181 83.9609 181ZM82.3246 180.062H83.8928C84.6143 180.062 85.2124 179.923 85.6868 179.645C86.1612 179.366 86.5149 178.97 86.7479 178.456C86.9808 177.942 87.0973 177.33 87.0973 176.619C87.0973 175.915 86.9822 175.308 86.7521 174.8C86.522 174.288 86.1783 173.896 85.7209 173.624C85.2635 173.348 84.6939 173.21 84.0121 173.21H82.3246V180.062ZM89.7564 181V174.455H90.7621V181H89.7564ZM90.2678 173.364C90.0717 173.364 89.9027 173.297 89.7607 173.163C89.6214 173.03 89.5518 172.869 89.5518 172.682C89.5518 172.494 89.6214 172.334 89.7607 172.2C89.9027 172.067 90.0717 172 90.2678 172C90.4638 172 90.6314 172.067 90.7706 172.2C90.9126 172.334 90.9837 172.494 90.9837 172.682C90.9837 172.869 90.9126 173.03 90.7706 173.163C90.6314 173.297 90.4638 173.364 90.2678 173.364ZM97.2404 175.92L96.337 176.176C96.2802 176.026 96.1964 175.879 96.0856 175.737C95.9776 175.592 95.8299 175.473 95.6424 175.379C95.4549 175.286 95.2148 175.239 94.9222 175.239C94.5217 175.239 94.1879 175.331 93.9208 175.516C93.6566 175.697 93.5245 175.929 93.5245 176.21C93.5245 176.46 93.6154 176.658 93.7972 176.803C93.979 176.947 94.2631 177.068 94.6495 177.165L95.6211 177.403C96.2063 177.545 96.6424 177.763 96.9293 178.055C97.2163 178.345 97.3597 178.719 97.3597 179.176C97.3597 179.551 97.2518 179.886 97.0359 180.182C96.8228 180.477 96.5245 180.71 96.141 180.881C95.7575 181.051 95.3114 181.136 94.8029 181.136C94.1353 181.136 93.5827 180.991 93.1452 180.702C92.7077 180.412 92.4308 179.989 92.3143 179.432L93.2688 179.193C93.3597 179.545 93.5316 179.81 93.7844 179.986C94.0401 180.162 94.3739 180.25 94.7859 180.25C95.2546 180.25 95.6268 180.151 95.9023 179.952C96.1808 179.75 96.32 179.509 96.32 179.227C96.32 179 96.2404 178.81 96.0813 178.656C95.9222 178.5 95.6779 178.384 95.3484 178.307L94.2575 178.051C93.658 177.909 93.2177 177.689 92.9364 177.391C92.658 177.089 92.5188 176.713 92.5188 176.261C92.5188 175.892 92.6225 175.565 92.8299 175.281C93.0401 174.997 93.3256 174.774 93.6864 174.612C94.0501 174.45 94.462 174.369 94.9222 174.369C95.57 174.369 96.0785 174.511 96.4478 174.795C96.82 175.08 97.0842 175.455 97.2404 175.92ZM98.8736 183.455V174.455H99.8452V175.494H99.9645C100.038 175.381 100.141 175.236 100.271 175.06C100.405 174.881 100.595 174.722 100.842 174.582C101.092 174.44 101.43 174.369 101.857 174.369C102.408 174.369 102.893 174.507 103.314 174.783C103.734 175.058 104.063 175.449 104.298 175.955C104.534 176.46 104.652 177.057 104.652 177.744C104.652 178.438 104.534 179.038 104.298 179.547C104.063 180.053 103.736 180.445 103.318 180.723C102.901 180.999 102.419 181.136 101.874 181.136C101.453 181.136 101.116 181.067 100.864 180.928C100.611 180.786 100.416 180.625 100.28 180.446C100.143 180.264 100.038 180.114 99.9645 179.994H99.8793V183.455H98.8736ZM99.8622 177.727C99.8622 178.222 99.9347 178.658 100.08 179.036C100.224 179.411 100.436 179.705 100.714 179.918C100.993 180.128 101.334 180.233 101.737 180.233C102.158 180.233 102.509 180.122 102.79 179.901C103.074 179.676 103.287 179.375 103.429 178.997C103.574 178.616 103.646 178.193 103.646 177.727C103.646 177.267 103.575 176.852 103.433 176.483C103.294 176.111 103.082 175.817 102.798 175.601C102.517 175.382 102.163 175.273 101.737 175.273C101.328 175.273 100.984 175.376 100.706 175.584C100.428 175.788 100.217 176.075 100.075 176.445C99.9332 176.811 99.8622 177.239 99.8622 177.727ZM107.192 172.273V181H106.186V172.273H107.192ZM110.96 181.153C110.545 181.153 110.169 181.075 109.831 180.919C109.493 180.76 109.224 180.531 109.025 180.233C108.826 179.932 108.727 179.568 108.727 179.142C108.727 178.767 108.801 178.463 108.949 178.23C109.096 177.994 109.294 177.81 109.541 177.676C109.788 177.543 110.061 177.443 110.359 177.378C110.66 177.31 110.963 177.256 111.267 177.216C111.664 177.165 111.987 177.126 112.234 177.101C112.484 177.072 112.666 177.026 112.779 176.96C112.896 176.895 112.954 176.781 112.954 176.619V176.585C112.954 176.165 112.839 175.838 112.609 175.605C112.382 175.372 112.037 175.256 111.574 175.256C111.093 175.256 110.717 175.361 110.444 175.571C110.172 175.781 109.98 176.006 109.869 176.244L108.914 175.903C109.085 175.506 109.312 175.196 109.596 174.974C109.883 174.75 110.196 174.594 110.534 174.506C110.875 174.415 111.21 174.369 111.539 174.369C111.75 174.369 111.991 174.395 112.264 174.446C112.539 174.494 112.805 174.595 113.061 174.749C113.319 174.902 113.534 175.134 113.704 175.443C113.875 175.753 113.96 176.168 113.96 176.688V181H112.954V180.114H112.903C112.835 180.256 112.721 180.408 112.562 180.57C112.403 180.732 112.191 180.869 111.927 180.983C111.663 181.097 111.341 181.153 110.96 181.153ZM111.113 180.25C111.511 180.25 111.846 180.172 112.119 180.016C112.395 179.859 112.602 179.658 112.741 179.411C112.883 179.163 112.954 178.903 112.954 178.631V177.71C112.912 177.761 112.818 177.808 112.673 177.851C112.531 177.891 112.366 177.926 112.179 177.957C111.994 177.986 111.814 178.011 111.637 178.034C111.464 178.054 111.324 178.071 111.216 178.085C110.954 178.119 110.71 178.175 110.483 178.251C110.258 178.325 110.076 178.437 109.937 178.588C109.801 178.736 109.733 178.937 109.733 179.193C109.733 179.543 109.862 179.807 110.12 179.986C110.382 180.162 110.713 180.25 111.113 180.25ZM116.209 183.455C116.038 183.455 115.886 183.44 115.753 183.412C115.619 183.386 115.527 183.361 115.476 183.335L115.732 182.449C115.976 182.511 116.192 182.534 116.379 182.517C116.567 182.5 116.733 182.416 116.878 182.266C117.026 182.118 117.161 181.878 117.283 181.545L117.47 181.034L115.05 174.455H116.141L117.947 179.67H118.016L119.822 174.455H120.913L118.135 181.955C118.01 182.293 117.855 182.572 117.67 182.794C117.486 183.018 117.271 183.185 117.027 183.293C116.786 183.401 116.513 183.455 116.209 183.455ZM125.752 181V172.273H128.701C129.386 172.273 129.945 172.396 130.38 172.643C130.817 172.888 131.141 173.219 131.352 173.636C131.562 174.054 131.667 174.52 131.667 175.034C131.667 175.548 131.562 176.016 131.352 176.436C131.144 176.857 130.823 177.192 130.388 177.442C129.954 177.689 129.397 177.812 128.718 177.812H126.604V176.875H128.684C129.153 176.875 129.529 176.794 129.813 176.632C130.097 176.47 130.303 176.251 130.431 175.976C130.562 175.697 130.627 175.384 130.627 175.034C130.627 174.685 130.562 174.372 130.431 174.097C130.303 173.821 130.096 173.605 129.809 173.449C129.522 173.29 129.141 173.21 128.667 173.21H126.809V181H125.752ZM134.239 177.062V181H133.233V172.273H134.239V175.477H134.324C134.477 175.139 134.707 174.871 135.014 174.672C135.324 174.47 135.736 174.369 136.25 174.369C136.696 174.369 137.087 174.459 137.422 174.638C137.757 174.814 138.017 175.085 138.202 175.452C138.389 175.815 138.483 176.278 138.483 176.841V181H137.477V176.909C137.477 176.389 137.342 175.987 137.072 175.703C136.805 175.416 136.435 175.273 135.96 175.273C135.631 175.273 135.335 175.342 135.074 175.482C134.815 175.621 134.611 175.824 134.46 176.091C134.313 176.358 134.239 176.682 134.239 177.062ZM142.982 181.136C142.391 181.136 141.873 180.996 141.426 180.714C140.983 180.433 140.637 180.04 140.387 179.534C140.14 179.028 140.016 178.437 140.016 177.761C140.016 177.08 140.14 176.484 140.387 175.976C140.637 175.467 140.983 175.072 141.426 174.791C141.873 174.51 142.391 174.369 142.982 174.369C143.573 174.369 144.09 174.51 144.533 174.791C144.979 175.072 145.326 175.467 145.573 175.976C145.823 176.484 145.948 177.08 145.948 177.761C145.948 178.437 145.823 179.028 145.573 179.534C145.326 180.04 144.979 180.433 144.533 180.714C144.09 180.996 143.573 181.136 142.982 181.136ZM142.982 180.233C143.431 180.233 143.8 180.118 144.09 179.888C144.38 179.658 144.594 179.355 144.733 178.98C144.873 178.605 144.942 178.199 144.942 177.761C144.942 177.324 144.873 176.916 144.733 176.538C144.594 176.161 144.38 175.855 144.09 175.622C143.8 175.389 143.431 175.273 142.982 175.273C142.533 175.273 142.164 175.389 141.874 175.622C141.584 175.855 141.37 176.161 141.23 176.538C141.091 176.916 141.022 177.324 141.022 177.761C141.022 178.199 141.091 178.605 141.23 178.98C141.37 179.355 141.584 179.658 141.874 179.888C142.164 180.118 142.533 180.233 142.982 180.233ZM150.33 174.455V175.307H146.938V174.455H150.33ZM147.926 172.886H148.932V179.125C148.932 179.409 148.973 179.622 149.055 179.764C149.141 179.903 149.249 179.997 149.379 180.045C149.513 180.091 149.653 180.114 149.801 180.114C149.912 180.114 150.003 180.108 150.074 180.097C150.145 180.082 150.202 180.071 150.244 180.062L150.449 180.966C150.381 180.991 150.286 181.017 150.163 181.043C150.041 181.071 149.886 181.085 149.699 181.085C149.415 181.085 149.136 181.024 148.864 180.902C148.594 180.78 148.369 180.594 148.19 180.344C148.014 180.094 147.926 179.778 147.926 179.398V172.886ZM154.431 181.136C153.84 181.136 153.322 180.996 152.876 180.714C152.433 180.433 152.086 180.04 151.836 179.534C151.589 179.028 151.465 178.437 151.465 177.761C151.465 177.08 151.589 176.484 151.836 175.976C152.086 175.467 152.433 175.072 152.876 174.791C153.322 174.51 153.84 174.369 154.431 174.369C155.022 174.369 155.539 174.51 155.982 174.791C156.428 175.072 156.775 175.467 157.022 175.976C157.272 176.484 157.397 177.08 157.397 177.761C157.397 178.437 157.272 179.028 157.022 179.534C156.775 180.04 156.428 180.433 155.982 180.714C155.539 180.996 155.022 181.136 154.431 181.136ZM154.431 180.233C154.88 180.233 155.249 180.118 155.539 179.888C155.829 179.658 156.043 179.355 156.183 178.98C156.322 178.605 156.391 178.199 156.391 177.761C156.391 177.324 156.322 176.916 156.183 176.538C156.043 176.161 155.829 175.855 155.539 175.622C155.249 175.389 154.88 175.273 154.431 175.273C153.982 175.273 153.613 175.389 153.323 175.622C153.033 175.855 152.819 176.161 152.68 176.538C152.54 176.916 152.471 177.324 152.471 177.761C152.471 178.199 152.54 178.605 152.68 178.98C152.819 179.355 153.033 179.658 153.323 179.888C153.613 180.118 153.982 180.233 154.431 180.233Z" fill="#667085" />
                    <path d="M96 96.0019L80 80.0019M80 80.0019L64 96.0019M80 80.0019V116.002M113.56 105.562C117.461 103.435 120.543 100.069 122.319 95.9964C124.096 91.9234 124.465 87.3748 123.369 83.0686C122.273 78.7625 119.774 74.9439 116.267 72.2157C112.759 69.4874 108.443 68.0048 104 68.0019H98.96C97.7492 63.3189 95.4926 58.9712 92.3598 55.2859C89.2269 51.6005 85.2993 48.6733 80.8724 46.7243C76.4454 44.7753 71.6342 43.8553 66.8004 44.0334C61.9667 44.2115 57.2362 45.4831 52.9647 47.7526C48.6931 50.022 44.9916 53.2303 42.1385 57.1362C39.2853 61.0421 37.3547 65.544 36.4919 70.3035C35.629 75.0629 35.8564 79.956 37.1568 84.6149C38.4572 89.2739 40.7969 93.5773 44 97.2019" stroke="#667085" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>

                </div>
              )}
            </Upload>
            {/* <p><span className="text-red-500">*</span>Upload your Display Photo</p> */}
          </Form.Item>
          {/* Designation */}
          <Form.Item label="Full Name" name="Full Name">
            <Input
              style={{
                height: "44px",
                borderRadius: "8px",
                border: "1px solid #D0D5DD",
                color: "#667085",
                fontSize: "16px",
              }}
              placeholder="John Smith"
            />
          </Form.Item>

          {/* Organization */}
          <Form.Item label="Email" name="Email">
            <Input
              type="Email"
              style={{
                height: "44px",
                borderRadius: "8px",
                border: "1px solid #D0D5DD",
                color: "#667085",
                fontSize: "16px",
              }}
              placeholder="johnsmith5107@gmail.com"
            />
          </Form.Item>

          <Form.Item label="Phone Number" name="phoneNumber">
            <Input
              type="Phone"
              style={{
                height: "44px",
                borderRadius: "8px",
                border: "1px solid #D0D5DD",
                color: "#667085",
                fontSize: "16px",
              }}
              placeholder="+123 458764 57685"
            />
          </Form.Item>
          <Form.Item label="Address" name="Address">
            <Input
              type="Address"
              style={{
                height: "44px",
                borderRadius: "8px",
                border: "1px solid #D0D5DD",
                color: "#667085",
                fontSize: "16px",
              }}
              placeholder="e.g. 123 Main Street, New York"
            />
          </Form.Item>
          <Form.Item label="Description" name="Description">
            <TextArea
              showCount
              maxLength={200}
              style={{
                height: 120, resize: 'none',

                borderRadius: "8px",
                border: "1px solid #D0D5DD",
                color: "#667085",
                fontSize: "16px",
              }}
              placeholder="e.g. 123 Main Street, New York"
            />
            <p className="text-[14px] font-normal text-[#475467]">Good description helps to engage more learners.</p>
          </Form.Item>




          <div className="flex justify-end gap-4 items-center py-6">
            <Button
              onClick={() => router.back()}
              style={{ height: "44px", fontSize: "16px", fontWeight: 400 }}
            >
              Cancel
            </Button>
            <Button
              htmlType="submit"
              style={{
                height: "44px",
                fontSize: "16px",
                fontWeight: 400,
                backgroundColor: "#14698A",
                color: "#FFFFFF",
              }}
              type="primary"
            >
              Save changes
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default BasicInfo;
