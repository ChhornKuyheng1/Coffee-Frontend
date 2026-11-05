import React from "react";
import { Input } from "antd";
export default function InputCustom({ placeholder, icon }) {
  return (
    <Input
      placeholder={placeholder}
      suffix={icon}
      className={`
    w-full! h-10! rounded-lg!
    border! bg-white! px-3!
    text-sm! text-gray-900!
    placeholder:text-gray-400!
    outline-none transition!
    focus:border-blue-500!
    focus:ring-4 focus:ring-blue-50!
    disabled:bg-gray-50!
    disabled:text-gray-400!
    `}
    />
  );
}
