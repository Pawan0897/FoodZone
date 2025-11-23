import { useSelector } from "react-redux";

export default function useDetail() {
  return useSelector((state) => state?.user?.detail ?? "");
}
