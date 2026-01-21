export interface SessionUser {
  id: string;
  email: string;
  name?: string;
}

export interface SessionResponse {
  user?: SessionUser;
  isLoggedIn: boolean;
}
