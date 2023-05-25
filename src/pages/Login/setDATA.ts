// mock to fetch login
import { useAtom } from "jotai";
// import { userLoginData } from "@/Atoms/userLoginData";
interface login {
  username: string;
  password: string;
}
const userList = [{ username: "0926650496", password: "joejoe1150" }];
const login = (data: login) => {
  for (let i = 0; i < userList.length; i++) {
    if (
      data?.username === userList[i]?.username &&
      data?.password === userList[i]?.password
    ) {
      return { status: true, errors: "No error" };
    }
  }
  return { status: false, errors: "user and password not true" };
};
export { login };
