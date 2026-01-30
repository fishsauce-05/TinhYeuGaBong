'use client';

import * as F from "../layout";

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
    <F.PageCard>
      <F.TitleHeading 
        icon = "💝"
        title = "Welcome"
        subtitle = {[
          "Lần đầu tiên đến với Valentine!", 
          "Hãy chia sẻ một số thông tin để bắt đầu nhé"
        ]}
      />
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
      <F.ButtonTag type="button" onClick={nextPage}>
        Tiếp tục
      </F.ButtonTag>
    </F.PageCard>
  )
}