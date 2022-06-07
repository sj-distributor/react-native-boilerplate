// 登录或注册手机号码格式
export const LoginOrRegistarPhoneNumberFormat = (phone: string) => {
  return phone.slice(0, 3) + '-' + phone.slice(3, 6) + '-' + phone.slice(6, 10);
};
