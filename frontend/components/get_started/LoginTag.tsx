import * as F from "@/components/layout";

export default function LoginTag() {
  return (
    <F.PageWrapper>
      <F.PageMain>
        <F.PageCard>
          <F.TitleHeading title = "Đăng nhập" />
          <F.FormTag>
            <F.LabelTag>Tên đăng nhập</F.LabelTag>
            <F.InputTag
              type = "text"
              placeholder = "Nhập tên đăng nhập"
              required
            />
            <F.LabelTag>Mật khẩu</F.LabelTag>
            <F.InputTag
              type = "password"
              placeholder = "Nhập mật khẩu"
              required
            />
            <F.ButtonTag type="submit">
              Đăng nhập
            </F.ButtonTag>
            <F.LinkTag href = "/register">
              Chưa có tài khoản? Đăng ký ngay!
            </F.LinkTag>
          </F.FormTag>
        </F.PageCard>
      </F.PageMain>
    </F.PageWrapper>
  );
}
