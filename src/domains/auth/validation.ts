// validation.ts
import { UserFormValues } from "./types";

export const validateRegisterForm = (values: UserFormValues) => {
  const newErrors: Record<string, string> = {};

  if (!values.name_ar.trim())
    newErrors.name_ar = "الاسم يجب ان يكون بللغه العربيه واكثر من 3 حروف ";
  if (!values.name.trim())
    newErrors.name = "الاسم يجب ان يكون بللغه العربيه واكثر من 3 حروف ";

  if (!values.email) newErrors.email = "البريد مطلوب";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
    newErrors.email = "البريد الالكتروني غير صالح";

  if (!values.phone) newErrors.phone = "رقم الهاتف مطلوب";
  else if (!/^01[0125][0-9]{8}$/.test(values.phone))
    newErrors.phone = "رقم الهاتف غير صالح";

  if (!values.country) newErrors.country = "الدولة مطلوبة";
  if (!values.city) newErrors.city = "المدينة مطلوبة";
  if (!values.birthdate) newErrors.birthdate = "تاريخ الميلاد مطلوب";
  if (!values.gender) newErrors.gender = "النوع مطلوب";

  if (!values.national_id_image)
    newErrors.national_id_image = "صورة الهوية مطلوبة";
  if (!values.national_id) newErrors.national_id = "رقم الهوية مطلوب";
  // else if (!/^\d{14}$/.test(values.national_id))
  // newErrors.national_id = "رقم الهوية غير صحيح";

  if (!values.profile_image) newErrors.profile_image = "الصورة الشخصية مطلوبة";

  if (!values.password) newErrors.password = "كلمة المرور مطلوبة";
  else if (values.password.length < 6)
    newErrors.password = "كلمة المرور يجب أن تكون 6 أحرف على الأقل";

  if (!values.password_confirmation)
    newErrors.password_confirmation = "تأكيد كلمة المرور مطلوب";
  else if (values.password !== values.password_confirmation)
    newErrors.password_confirmation = "كلمة المرور غير متطابقة";

  return newErrors;
};
