import { useState, useMemo, useCallback } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { login } from "./setDATA";
import classNames from "classnames";
import Link from "next/link";
import * as yup from "yup";

type FormValues = {
  username: string;
  password: string;
};

const schema = yup.object().shape({
  username: yup
    .string()
    .required("กรุณาใส่ด้วยครับ")
    .matches(/^[a-zA-Z0-9_]+$/, "ห้ามกรอกอักษรพิเศษ")
    .matches(/^(06|08|09)\d{8}$/, "กรุณาใส่หมายเลขโทรศัพท์ให้ถูกต้อง"),
  password: yup.string().required("กรุณาใส่ด้วยครับ"),
});

const Login = () => {
  const router = useRouter();
  const [userLogin, setUserLogin] = useState({ username: "", password: "" });
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });
  const onSubmit = () => {
    if (login(userLogin)) {
      router.push("/Register");
    } else {
      throw new Error("errorData.message");
    }
    console.log(userLogin);
  };

  const handleChaneInput = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { id, value } = event?.target;
      setUserLogin((prev) => ({ ...prev, [`${id}`]: value }));
    },
    []
  );
  console.log("errors?.password? : ", errors?.password?.type);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-center font-bold text-2xl mb-6">
          Log in to your account
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Username
            </label>
            <input
              {...register("username")}
              className={classNames(
                "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                {
                  "border-rose-500 placeholder:text-rose-500":
                    errors.username !== undefined,
                }
              )}
              id="username"
              type="text"
              placeholder="Username"
              maxLength={10}
              onChange={(event) => {
                handleChaneInput(event);
                clearErrors("username");
                clearErrors("password");
              }}
            />
            <p className="text-rose-500">{errors?.username?.message}</p>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2">
              Password
            </label>
            <input
              {...register("password")}
              className={classNames(
                "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                {
                  "border-rose-500 placeholder:text-rose-500":
                    errors.password !== undefined,
                }
              )}
              id="password"
              type="password"
              placeholder="Password"
              onChange={(event) => {
                handleChaneInput(event);
                clearErrors("username");
                clearErrors("password");
              }}
            />
            <p className="text-rose-500">{errors?.password?.message}</p>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Log in
            </button>
            <Link href="/Register">
              <p className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                Register
              </p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
