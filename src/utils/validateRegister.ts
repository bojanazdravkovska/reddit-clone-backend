import { UsernamePasswordInput } from "src/resolvers/UsernamePasswordInput";

export const validateRegister = (options: UsernamePasswordInput) => {
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
