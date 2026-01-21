export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-custom font-sans">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
          <h2 className = "text-2xl text-pink-600 font-bold mb-6 text-center">
            Đăng nhập
          </h2>
          <form className = "flex flex-col gap-4">
            <label className = "block text-sm font-medium mb-2 text-pink-600">Tên đăng nhập</label>
            <input
              type = "text"
              className = "w-full px-4 py-2 text-gray-500 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder = "Nhập tên đăng nhập"
            />
            <label className = "block text-sm font-medium mb-2 text-pink-600">Mật khẩu</label>
            <input
              type = "password"
              className = "w-full px-4 py-2 text-gray-500 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder = "Nhập mật khẩu"
            />
            <button
              type = "submit"
              className = "w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition-colors"
            >
              Đăng nhập
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
