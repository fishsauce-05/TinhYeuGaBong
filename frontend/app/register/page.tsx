'use client';

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
    <div className="flex min-h-screen items-center justify-center bg-custom font-roboto">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
          <h2 className = "text-2xl text-pink-600 font-bold mb-6 text-center">
            Đăng Ký
          </h2>
          <form className = "flex flex-col gap-4" onSubmit={handleSubmit}>
            <label className = "label-info">Tên đăng nhập</label>
            <input
              type = "text"
              className = "input-info"
              placeholder = "Nhập tên đăng nhập"
              required
            />
            <label className = "label-info">Mật khẩu</label>
            <input
              type = "password"
              className = "input-info"
              placeholder = "Nhập mật khẩu"
              required
            />
            <label className = "label-info">Xác nhận mật khẩu</label>
            <input
              type = "password"
              className = "input-info"
              placeholder = "Nhập lại mật khẩu"
              required
            />
            <button
              type = "submit"
              className = "button-info"
            >
              Đăng ký
            </button>
            <Link href = "/" className = "text-pink-600 hover:underline text-sm text-center">
              Đã có tài khoản? Đăng nhập ngay!
            </Link>
          </form>
        </div>
      </main>
    </div>
  );
}
