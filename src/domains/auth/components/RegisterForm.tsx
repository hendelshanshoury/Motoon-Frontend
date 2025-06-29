// RegisterForm.tsx
import React, { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { getCountries } from "../../../utils/countries";
import { UserFormValues } from "../types";
// import { registerUser } from "../api";
import { validateRegisterForm } from "../validation";
import axios from "axios";
import Button from "../../shared/components/Button";

type Props = {};

const RegisterForm: React.FC<Props> = () => {
  const countries = getCountries();

  const [values, setValues] = useState<UserFormValues>({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    phone: "",
    name_ar: "",
    national_id: "",
    national_id_image: "",
    profile_image: "",
    birthdate: "",
    country: "",
    city: "",
    gender: "",
    is_valid_national_id: "2021-01-01",
    email_verified_at: "2021-01-01",
    status: "active",
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errorState, setErrorState] = useState<Record<string, string>>({});

  const registerUser = (values: UserFormValues) => {
    return axios.post("https://motoon.ammarelgendy.com/api/register", values);
  };
  const { mutate, isSuccess, isError } = useMutation({
    mutationFn: registerUser,
    onSuccess: () => toast.success("تم التسجيل بنجاح"),
    onError: (err: any) => {
      if (err?.response?.data?.message) toast.error(err.response.data.message);
      else toast.error("حدث خطأ أثناء التسجيل");
    },
  });
  useEffect(() => {
    console.log("✅ isSuccess:", isSuccess);
    console.log("❌ isError:", isError);
  }, [isSuccess, isError]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
    setErrorState(validateRegisterForm(values));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateRegisterForm(values);
    setErrorState(errors);
    mutate(values);
    toast.error("errors");
    // For debugging purposes, you can log the values
    console.log("Submitted values:", values);
    console.log("Validation errors:", errors);
    // if (Object.keys(errors).length === 0) {
    //   mutate(values);
    // } else {
    //   toast.error("تحقق من البيانات قبل الإرسال");
    // }
  };

  return (
    <>
      <div className="flex flex-col w-full px-2 pt-10">
        <div className="py-6 text-center">
          <h2 className="mb-2 text-2xl font-bold">إنشاء حساب جديد</h2>
          <p className="mb-6 text-sm text-graytext ">
            إنضم الأن الى منصة موتون التعليميه
          </p>
          <p className="px-2 mt-2 mb-4 text-xs text-red-700 lg:text-sm">
            * يجب التأكد من اي بيانات يتم ادخالها لاعتماد بعض البيانات على اصدار
            الشهادة وسوف يتم مرجعة البيانات من قبل المسؤولين
          </p>
        </div>
        <div className=" p-2 mx-auto mb-6 text-white rounded-md bg-secondary lg:w-[85%] w-[95%]">
          <h3 className="text-xl font-bold text-center">بيانات الدفع</h3>
          <ul className="py-5 text-sm list-disc list-inside lg:text-lg">
            <li>
              <span className="font-bold">قيمة الدفع:</span> 1$
            </li>
            <li>
              <span className="font-bold">صلاحية الحساب:</span> مدى الحياة
            </li>
            <li>
              <span className="font-bold">الصلاحيات:</span> جميع السنوات
              الدراسية مع الشهادات
            </li>
          </ul>

          <h3 className="text-xl font-bold text-center">الاجمالي : 1$ </h3>
        </div>
        <form
          onSubmit={handleSubmit}
          className="p-3 space-y-6 rounded-xl lg:w-[85%] w-[98%] mx-auto"
        >
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 gap-x-4">
            <div className="relative ">
              <input
                type="text"
                name="name_ar"
                placeholder="اكتب الاسم بالكامل (عربي)"
                className={`w-full register-input border-gray-300 ${
                  touched.name_ar && errorState.name_ar ? "border-red-500" : ""
                }`}
                value={values.name_ar}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.name_ar && errorState.name_ar && (
                <p className="absolute px-5 text-sm bg-red-300 rounded-lg top-12 right-6">
                  {errorState.name_ar}
                </p>
              )}
            </div>
            <div className="relative ">
              <input
                type="text"
                name="name"
                placeholder="اكتب الاسم بالكامل (إنجليزي)"
                className={`w-full register-input border-gray-300 ${
                  touched.name && errorState.name ? "border-red-500" : ""
                }`}
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.name && errorState.name && (
                <p className="absolute px-5 text-sm bg-red-300 rounded-lg top-12 right-6">
                  {errorState.name}
                </p>
              )}
            </div>
            <div className="relative ">
              <input
                type="email"
                name="email"
                placeholder="البريد الإلكتروني"
                className={`w-full register-input border-gray-300 ${
                  touched.email && errorState.email ? "border-red-500" : ""
                }`}
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.email && errorState.email && (
                <p className="absolute px-5 text-sm bg-red-300 rounded-lg top-12 right-6">
                  {errorState.email}
                </p>
              )}
            </div>
            <div className="relative ">
              <input
                type="text"
                name="phone"
                placeholder="رقم الجوال"
                className={`w-full register-input border-gray-300 ${
                  touched.phone && errorState.phone ? "border-red-500" : ""
                }`}
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.phone && errorState.phone && (
                <p className="absolute px-5 text-sm bg-red-300 rounded-lg top-12 right-6">
                  {errorState.phone}
                </p>
              )}
            </div>

            <div className="relative ">
              <select
                name="country"
                className={`px-3 py-2.5 border w-full border-gray-300 rounded-3xl focus:border-secondary outline-0 text-sm lg:text-lg  ${
                  touched.gender && errorState.gender ? "border-red-500" : ""
                }`}
                value={values.country}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option disabled value="">
                  {" "}
                  الجنسيه{" "}
                </option>
                {countries.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.name} ({country.dialCode})
                  </option>
                ))}
              </select>
              {touched.country && errorState.country && (
                <p className="absolute px-5 text-sm bg-red-300 rounded-lg top-12 right-6">
                  {errorState.country}
                </p>
              )}
            </div>
            <div className="relative ">
              <select
                name="city"
                className={`px-3 py-2.5 border w-full border-gray-300 rounded-3xl focus:border-secondary outline-0 text-sm lg:text-lg  ${
                  touched.gender && errorState.gender ? "border-red-500" : ""
                }`}
                value={values.city}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option disabled value="">
                  {" "}
                  محل الاقامه{" "}
                </option>
                {countries.map((city) => (
                  <option key={city.code} value={city.name}>
                    {city.name} ({city.dialCode})
                  </option>
                ))}
              </select>
              {touched.city && errorState.city && (
                <p className="absolute px-5 text-sm bg-red-300 rounded-lg top-12 right-6">
                  {errorState.city}
                </p>
              )}
            </div>

            <div className="relative ">
              <input
                type="date"
                name="birthdate"
                className={`w-full register-input border-gray-300 ${
                  touched.birthdate && errorState.birthdate
                    ? "border-red-500"
                    : ""
                }`}
                placeholder="تاريخ الميلاد"
                value={values.birthdate}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.birthdate && errorState.birthdate && (
                <p className="absolute px-5 text-sm bg-red-300 rounded-lg top-12 right-6">
                  {errorState.birthdate}
                </p>
              )}
            </div>
            <div className="relative ">
              <select
                name="gender"
                className={`w-full register-input border-gray-300 ${
                  touched.gender && errorState.gender ? "border-red-500" : ""
                }`}
                value={values.gender}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option disabled value="">
                  اختر النوع
                </option>
                <option value="male">ذكر</option>
                <option value="female">أنثى</option>
              </select>
              {touched.gender && errorState.gender && (
                <p className="absolute px-5 text-sm bg-red-300 rounded-lg top-12 right-6">
                  {errorState.gender}
                </p>
              )}
            </div>
          </div>

          <hr />

          <div>
            <label className="block mb-4 font-medium text-center">
              تحميل صورة الهوية
            </label>
            <div className="flex flex-col items-center justify-center text-center">
              <label
                htmlFor="national_id_image"
                className="flex items-center justify-center w-32 text-sm border-2 border-dashed rounded-md cursor-pointer border-secondary h-28 text-secondary hover:bg-gray-100"
              >
                اختر الصورة
              </label>
              <input
                id="national_id_image"
                type="file"
                name="national_id_image"
                className="hidden"
                onChange={(e) =>
                  setValues((prev) => ({
                    ...prev,
                    national_id_image: e.target.files?.[0]?.name || "",
                  }))
                }
              />
              <p className="mt-2 text-graytext text-[12px]">
                اختر ملف حجمه لا يتخطى 2 ميجا
                <span className="text-red-500">*</span>
              </p>
              <p className="text-graytext  text-[12px]">
                ( jpg, jpeg, png ) <span className="text-red-500">*</span>
              </p>
            </div>

            <input
              type="text"
              name="national_id"
              placeholder="رقم الهوية"
              className="w-full my-4 register-input"
              value={values.national_id}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>

          <hr />

          <div>
            <label className="block mb-4 font-medium text-center">
              تحميل صورة الملف الشخصي
            </label>
            <div className="flex flex-col items-center justify-center text-center">
              <label
                htmlFor="profile_image"
                className="flex items-center justify-center w-32 text-sm border-2 border-dashed rounded-md cursor-pointer border-secondary h-28 text-secondary hover:bg-gray-100"
              >
                اختر الصورة
              </label>
              <input
                id="profile_image"
                type="file"
                name="profile_image"
                className="hidden"
                onChange={(e) =>
                  setValues((prev) => ({
                    ...prev,
                    profile_image: e.target.files?.[0]?.name || "",
                  }))
                }
              />
              <p className="mt-2 text-graytext text-[12px]">
                اختر ملف حجمه لا يتخطى 2 ميجا
                <span className="text-red-500">*</span>
              </p>
              <p className="text-graytext  text-[12px]">
                ( jpg, jpeg, png ) <span className="text-red-500">*</span>
              </p>
            </div>
          </div>

          <hr />

          <div>
            <input
              type="password"
              name="password"
              placeholder="الرقم السري"
              className="w-full my-2 register-input"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <input
              type="password"
              name="password_confirmation"
              placeholder="تأكيد الرقم السري"
              className="w-full my-2 register-input"
              value={values.password_confirmation}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <Button type="submit"> حفظ</Button>
        </form>
      </div>
    </>
  );
};

export default RegisterForm;
