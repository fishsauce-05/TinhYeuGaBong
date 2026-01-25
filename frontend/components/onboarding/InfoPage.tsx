'use client';
import React from 'react';
import PageCard from '../layout/PageCard';
import LabelTag from '../layout/LabelTag';
import InputTag from '../layout/InputTag';
import ButtonTag from '../layout/ButtonTag';
import TitleHeading from '../layout/TitleHeading';

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
    <PageCard>
      <TitleHeading 
        icon = "📝"
        title = "Thông tin của hai bạn"
        subtitle = {[
          "Hãy nhập thông tin của hai bạn để bắt đầu nhé!"
        ]}
      />
      <form className = "flex flex-col gap-4" onSubmit = {nextPage}>
        <LabelTag>Tên của người yêu bạn</LabelTag>
        <InputTag
          type = "text"
          placeholder = "Nhập tên ở đây"
          value = {loverName}
          onChange = {(e) => setLoverName(e.target.value)}
          required 
        />
        <LabelTag>Ngày đầu hẹn hò là hôm nào?</LabelTag>
        <InputTag
          type = "date"
          placeholder = "Nhập ngày ở đây"
          value = {firstDate}
          onChange = {(e) => setFirstDate(e.target.value)}
          required 
        />
        <LabelTag>Ai đã tỏ tình trước ai vậy? 🤔</LabelTag> 
        <div className = "flex gap-4 mt-2">
          <InputOption value = "It's me" />
          <InputOption value = "Đối phương" />
          <InputOption value = "Hong cần tỏ tình" />
        </div>
        <div className = "flex gap-4">
          <ButtonTag type="button" onClick={backPage}>
            ← Quay lại 
          </ButtonTag>
          
          <ButtonTag type="submit">
            Hoàn thành
          </ButtonTag>
        </div>
      </form>
    </PageCard>
  )
}