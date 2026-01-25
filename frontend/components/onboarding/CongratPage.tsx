'use client';

import ButtonTag from "../layout/ButtonTag";
import PageCard from "../layout/PageCard";
import TitleHeading from "../layout/TitleHeading";
import React from "react";

interface CongratPageInterface {
  backPage: () => void;
  handleSubmit: (e: React.FormEvent) => void;
}

export default function CongratPage({backPage, handleSubmit} : CongratPageInterface) {
  return (
    <PageCard>
        <TitleHeading
          icon = "🎉"
          title = "Chúc mừng!"
          subtitle = {[
            "Bạn đã hoàn thành quá trình onboarding"
          ]}
        />
        <p className = "text-center text-gray-600 mb-6">
          Bây giờ bạn có thể bắt đầu sử dụng ứng dụng Valentine để tạo những kỷ niệm đẹp cùng người ấy!
        </p>
        <p className = "text-center text-pink-600 font-semibold mb-10">
          Cảm ơn bạn đã tham gia cùng chúng tôi! 💖
        </p>
        <form onSubmit={handleSubmit}>
            <div className = "flex gap-4">
                <ButtonTag type = "button" onClick = {backPage} >
                    Quay lại chỉnh sửa
                </ButtonTag>
                <ButtonTag type = "submit" >
                    Về trang chủ
                </ButtonTag>
            </div>
        </form>
    </PageCard>
  )
}