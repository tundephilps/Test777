import { FC } from "react";

interface ErrorTextProps {
  message?: string;
}

export const ErrorText: FC<ErrorTextProps> = ({ message }) => {
  if (!message) return null;
  return <p className="text-red-500 text-sm mt-1">{message}</p>;
};
