import { useSelector } from "react-redux";

export default function useStatus() {
  return useSelector((state) => state?.user?.status ?? "");
}
