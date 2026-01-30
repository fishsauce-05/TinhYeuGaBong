'use client';
import React from 'react';
import * as F from "../layout";

interface InfoPageInterface {
  loverName: string;
  setLoverName: (value:string) => void;
  firstDate: string;
  setFirstDate: (value:string) => void;
  backPage: () => void;
  nextPage: (e: React.FormEvent) => void;
}

export default function InfoPage ({
  loverName,
  setLoverName,
  firstDate,
  setFirstDate,
  backPage,
  nextPage
}: InfoPageInterface) {
  
  //Option value
  const InputOption = ({value} : {value: string}) => {
    return (
      <label className = "flex items-center gap-2 p-3 rounded-lg cursor-pointer hover:bg-pink-100 transition text-pink-600 text-sm whitespace-nowrap border border-pink-200 flex-1">
        <input 
          type = "radio"
          name = "4f"
          className = "accent-pink-500 cursor-pointer"
          required
        />
        {value}
      </label>
    );
  };

  //Return
  return (
    <F.PageCard>
      <F.TitleHeading 
        icon = "📝"
        title = "Thông tin của hai bạn"
        subtitle = {[
          "Hãy nhập thông tin của hai bạn để bắt đầu nhé!"
        ]}
      />
      <form className = "flex flex-col gap-4" onSubmit = {nextPage}>
        <F.LabelTag>Tên của người yêu bạn</F.LabelTag>
        <F.InputTag
          type = "text"
          placeholder = "Nhập tên ở đây"
          value = {loverName}
          onChange = {(e) => setLoverName(e.target.value)}
          required 
        />
        <F.LabelTag>Ngày đầu hẹn hò là hôm nào?</F.LabelTag>
        <F.InputTag
          type = "date"
          placeholder = "Nhập ngày ở đây"
          value = {firstDate}
          onChange = {(e) => setFirstDate(e.target.value)}
          required 
        />
        <F.LabelTag>Ai đã tỏ tình trước ai vậy? 🤔</F.LabelTag> 
        <div className = "flex gap-4 mt-2">
          <InputOption value = "It's me" />
          <InputOption value = "Đối phương" />
          <InputOption value = "Hong cần tỏ tình" />
        </div>
        <div className = "flex gap-4">
          <F.ButtonTag type="button" onClick={backPage}>
            ← Quay lại 
          </F.ButtonTag>
          
          <F.ButtonTag type="submit">
            Hoàn thành
          </F.ButtonTag>
        </div>
      </form>
    </F.PageCard>
  )
}