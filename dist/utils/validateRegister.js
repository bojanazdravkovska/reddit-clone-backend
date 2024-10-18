"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRegister = void 0;
const validateRegister = (options) => {
    if (options.username.length < 4) {
        return [{ field: "username", message: "Username is too short." }];
    }
    if (!options.email.includes("@")) {
        return [{ field: "email", message: "Invalid email" }];
    }
    if (options.username.includes("@")) {
        return [{ field: "username", message: "Username must not containt @" }];
    }
    if (options.password.length < 3) {
        return [{ field: "password", message: "Password is too short" }];
    }
    return null;
};
exports.validateRegister = validateRegister;
//# sourceMappingURL=validateRegister.js.map