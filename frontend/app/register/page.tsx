'use client';

import * as F from "@/components/layout";
import {useRouter} from 'next/navigation';
import React from "react";

export default function RegisterPage() {
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/onboarding");
  }

  return (
    <F.PageWrapper>
      <F.PageMain>
        <F.PageCard>
          <F.TitleHeading title = "Đăng ký" />
          <F.FormTag onSubmit={handleSubmit}>
            <F.LabelTag>Tên đăng nhập</F.LabelTag>
            <F.InputTag 
              type="text" 
              placeholder="Nhập tên đăng nhập" 
              required 
            />
            <F.LabelTag>Mật khẩu</F.LabelTag>
            <F.InputTag
              type = "password"
              placeholder = "Nhập mật khẩu"
              required
            />
            <F.LabelTag>Xác nhận mật khẩu</F.LabelTag>
            <F.InputTag
              type = "password"
              placeholder = "Nhập lại mật khẩu"
              required
            />
            <F.ButtonTag type="submit">
              Đăng ký
            </F.ButtonTag>
            <F.LinkTag href = "/">
              Đã có tài khoản? Đăng nhập ngay!
            </F.LinkTag>
          </F.FormTag>
        </F.PageCard>
      </F.PageMain>
    </F.PageWrapper>
  );
}
