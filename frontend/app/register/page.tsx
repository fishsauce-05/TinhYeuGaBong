'use client';

import ButtonTag from "@/components/layout/ButtonTag";
import LabelTag from "@/components/layout/LabelTag";
import PageWrapper from "@/components/layout/PageWrapper";
import PageMain from "@/components/layout/PageMain";
import PageCard from "@/components/layout/PageCard";
import InputTag from "@/components/layout/InputTag";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function RegisterPage() {
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/onboarding");
  }

  return (
    <PageWrapper>
      <PageMain>
        <PageCard>
          <h2 className = "text-2xl text-pink-600 font-bold mb-6 text-center">
            Đăng Ký
          </h2>
          <form className = "flex flex-col gap-4" onSubmit={handleSubmit}>
            <LabelTag>Tên đăng nhập</LabelTag>
            <InputTag 
              type="text" 
              placeholder="Nhập tên đăng nhập" 
              required 
            />
            <LabelTag>Mật khẩu</LabelTag>
            <InputTag
              type = "password"
              placeholder = "Nhập mật khẩu"
              required
            />
            <LabelTag>Xác nhận mật khẩu</LabelTag>
            <InputTag
              type = "password"
              placeholder = "Nhập lại mật khẩu"
              required
            />
            <ButtonTag type="submit">
              Đăng ký
            </ButtonTag>
            <Link href = "/" className = "text-pink-600 hover:underline text-sm text-center">
              Đã có tài khoản? Đăng nhập ngay!
            </Link>
          </form>
        </PageCard>
      </PageMain>
    </PageWrapper>
  );
}
