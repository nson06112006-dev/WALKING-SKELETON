const login = require("./login");

describe("Login Function", () => {

    test("Login success with correct username and password", () => {
        expect(login("admin", "123")).toBe(true);
    });

    test("Login fails with wrong password", () => {
        expect(login("admin", "1234")).toBe(false);
    });

    test("Login fails with wrong username", () => {
        // Kt và thông báo lỗi login
        expect(login("user", "123")).toBe("tên đăng nhập hoặc mật khẩu bị sai");
    });

});
