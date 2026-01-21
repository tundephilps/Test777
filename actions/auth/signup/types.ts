export interface SignupFormData {
  email: string;
  password: string;
  confirmPassword?: string;
}

export interface SignupResponse {
  success: boolean;
  message?: string;
  data?: any;
  error?: string;
}
