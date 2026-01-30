'use client';

import * as F from "../layout";
import React from "react";

interface CongratPageInterface {
  backPage: () => void;
  handleSubmit: (e: React.FormEvent) => void;
}

export default function CongratPage({backPage, handleSubmit} : CongratPageInterface) {
  return (
    <F.PageCard>
        <F.TitleHeading
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
                <F.ButtonTag type = "button" onClick = {backPage} >
                    Quay lại chỉnh sửa
                </F.ButtonTag>
                <F.ButtonTag type = "submit" >
                    Về trang chủ
                </F.ButtonTag>
            </div>
        </form>
    </F.PageCard>
  )
}