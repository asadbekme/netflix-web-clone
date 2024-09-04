"use client";

import Login from "@/components/shared/login";
import { Button } from "@/components/ui/button";
import useGlobalContext from "@/hooks/use-global-context";
import React from "react";

const BrowsePage = () => {
  const { account } = useGlobalContext();

  if (account === null) {
    return <Login />;
  }

  return (
    <div className="p-4">
      <Button variant="destructive">Clik me</Button>
      <h3>Testerbek</h3>
    </div>
  );
};

export default BrowsePage;
