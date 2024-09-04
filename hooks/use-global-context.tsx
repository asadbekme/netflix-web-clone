import { Context } from "@/context";
import { use } from "react";

function useGlobalContext() {
  const context = use(Context);
  if (context === null) {
    throw new Error("useGlobalContext must be used within a GlobalContext");
  }

  return context;
}

export default useGlobalContext;
