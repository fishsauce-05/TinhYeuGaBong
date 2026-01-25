import Link from "next/link";
import PageWrapper from "@/components/layout/PageWrapper";
import PageMain from "@/components/layout/PageMain";
import PageCard from "@/components/layout/PageCard";
import LabelTag from "@/components/layout/LabelTag";
import ButtonTag from "@/components/layout/ButtonTag";
import InputTag from "@/components/layout/InputTag";

export default function HomePage() {
  return (
    <PageWrapper>
      <PageMain>
        <PageCard>
          <h2 className = "text-2xl text-pink-600 font-bold mb-6 text-center">
            Đăng Nhập
          </h2>
          <form className = "flex flex-col gap-4">
            <LabelTag>Tên đăng nhập</LabelTag>
            <InputTag
              type = "text"
              placeholder = "Nhập tên đăng nhập"
              required
            />
            <LabelTag>Mật khẩu</LabelTag>
            <InputTag
              type = "password"
              placeholder = "Nhập mật khẩu"
              required
            />
            <ButtonTag type="submit">
              Đăng nhập
            </ButtonTag>
            <Link href = "/register" className = "text-pink-600 hover:underline text-sm text-center">
              Chưa có tài khoản? Đăng ký ngay!
            </Link>
          </form>
        </PageCard>
      </PageMain>
    </PageWrapper>
  );
}
