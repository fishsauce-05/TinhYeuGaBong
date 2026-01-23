'use client';

import { text } from "stream/consumers";

interface WelcomePageInterface {
  nextPage: () => void;
}

export default function WelcomePage({nextPage}: WelcomePageInterface) {
  //List Info
  const ListTag = ({value} : {value: string}) => {
    return (
      <li className = "flex items-start">
        <span className = "text-pink-500 mr-2">✓</span> 
        <span>{value}</span>
      </li>
    )
  }

  return (
    <div className = "w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
      <div className = "text-center mb-4 text-pink-600">
        <span className = "text-6xl">💝</span>
        <h2 className = "font-bold text-pink-500 text-2xl mt-2 mb-4">Welcome</h2> 
        <p className = "text-center text-base">Lần đầu tiên đến với Valentine!</p> 
        <p className = "text-center text-sm mb-6 mt-2"> Hãy chia sẻ một số thông tin để bắt đầu nhé </p> 
      </div>

      <div className = "bg-pink-50 p-4 rounded-lg mb-6">
        <p className = "text-gray-600 text-sm leading-relaxed">
          Những thông tin cần thiết:
        </p>
        <ul className = "mt-2 space-y-2 text-gray-600 text-sm">
          <ListTag value = "Tên của người yêu bạn" />
          <ListTag value = "Ngày đầu hẹn hò là hôm nào?" />
          <ListTag value = "Ai đã tỏ tình trước vậy? 🤔" />
        </ul>
      </div>
      <button
        onClick = {nextPage}
        className = "button-info"
      >
        Tiếp tục 
      </button>
    </div>
  )
}