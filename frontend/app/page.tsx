import Link from "next/link";


export default function HomePage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-custom font-roboto">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
          <h2 className = "text-2xl text-pink-600 font-bold mb-6 text-center">
            Đăng Nhập
          </h2>
          <form className = "flex flex-col gap-4">
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
            <button
              type = "submit"
              className = "w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition-colors"
            >
              Đăng nhập
            </button>
            <Link href = "/register" className = "text-pink-600 hover:underline text-sm text-center">
              Chưa có tài khoản? Đăng ký ngay!
            </Link>
          </form>
        </div>
      </main>
    </div>
  );
}
