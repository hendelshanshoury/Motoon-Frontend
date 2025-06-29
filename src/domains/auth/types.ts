export type UserFormValues = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
  phone: string;
  name_ar: string;
  national_id: string;
  national_id_image: string;
  profile_image: string;
  birthdate: string;
  country: string;
  city: string;
  gender: string;
  is_valid_national_id: string;
  email_verified_at: string;
  status: string;
};



 export type setTouched={
  name: true,
  email: true,
  password: true,
  password_confirmation: true,
  phone: true,
  name_ar: true,
  national_id: true,
  national_id_image: true,
  profile_image: true,
  birthdate: true,
  country: true,
  city: true,
  gender: true,
  is_valid_national_id: true,
  email_verified_at: true,
  status: true,
 };
 export type UserLoginValue={
  email: string,
  password: string,
 };
