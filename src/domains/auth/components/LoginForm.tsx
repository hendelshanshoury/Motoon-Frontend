import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/download (1).png";
import herosection from "../../../assets/images/header2-d1cd08ba.png";
import { UserLoginValue } from "../types";
import { useMutation } from "@tanstack/react-query";
// import { loginUser } from "../api";
import toast from "react-hot-toast";
import axios from "axios";
import Button from "../../shared/components/Button";
const LoginForm = () => {
  const [values, setValues] = useState<UserLoginValue>({
    email: "",
    password: "",
  });
  console.log("Initial values:", values);
  const loginUser = (values: UserLoginValue) => {
    return axios.post("https://motoon.ammarelgendy.com/api/login", values);
  };
  const { mutate, isSuccess, isError } = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      toast.success("تم تسجيل الدخول بنجاح ✅");
      console.log("Login successful:", data);
    },
    onError: (err: any) => {
      console.error("Login error:", err);
      toast.error(err || "حدث خطأ أثناء تسجيل الدخول");
      console.log(
        "Login error:",
        err?.response?.data?.message || "حدث خطأ أثناء تسجيل الدخول"
      );
    },
  });

  useEffect(() => {
    console.log(" isSuccess:", isSuccess);
    console.log(" isError:", isError);
  }, [isSuccess, isError]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    console.log("Updated values:", { ...values, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!values.email || !values.password) {
      toast.error("برجاء إدخال البريد وكلمة المرور");
      return;
    }
    mutate(values);
    console.log("values :", values);
  };

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        {" "}
        <div className="absolute z-50 flex items-center justify-between px-3 py-6 bg-transparent right-8 top-6 md:px-18">
          <Link to="/" className="text-2xl font-bold">
            <img src={logo} alt="logoImage" className="w-[60px] md:w-[60px]" />
          </Link>
        </div>
        <img
          src={herosection}
          alt="Hero Section"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute inset-0 z-0 bg-black/30" />
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-4 mt-6">
          <div className="w-full md:w-[80%] lg:w-[85%] bg-main rounded-3xl p-10 md:p-10 shadow-lg">
            <div className="mb-16">
              <h1 className="mb-3 text-[24px] md:text-[24px] font-bold text-black text-center">
                اهلا بك مجدداً، يمكنك الآن الدخول إلى منصة موتون
              </h1>
              <p className="mb-3 text-[13px] font-semibold text-graytext text-center">
                تأسيس جيل من طلبة العلم المتقنين شرعياً ليكونوا نواة لعلماء
                ودعاة المستقبل في جميع دول العالم
              </p>
            </div>

            <form
              className="w-[100%] flex flex-col mx-auto mt-8 lg:w-[90%]"
              onSubmit={handleSubmit}
            >
              <input
                type="email"
                placeholder="البريد الإلكتروني"
                className="w-full px-6 py-3 my-3 text-base border rounded-full placeholder-gray bg-[#FFFFEE] focus:outline-none border-primary"
                onChange={handleChange}
                value={values.email}
                name="email"
              />
              <input
                type="password"
                placeholder=" الرقم السري"
                className="w-full px-6 py-3 my-3 text-base border rounded-full placeholder-gray bg-[#FFFFEE] focus:outline-none border-primary"
                onChange={handleChange}
                name="password"
                value={values.password}
              />

              <Button type="submit"> دخول</Button>
            </form>

            <div className="mt-6 text-center">
              <Link
                to="/register"
                className="flex items-center justify-center text-graytext"
              >
                <p className="mb-2 text-[13px] hover:text-secondary hover:underline pt-3">
                  هل ليس لديك حساب؟{" "}
                </p>
                <p className="text-[16px] font-semibold ms-1"> سجل الآن</p>
              </Link>
              <Link
                to="/forgetpassword"
                className="text-graytext hover:text-secondary text-[13px] hover:underline"
              >
                هل نسيت كلمة المرور؟
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
