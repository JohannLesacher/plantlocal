"use client"

import React from "react";
import {UserLocationContextWrapper} from "~/app/contexts/UserLocationContext";

export function Providers({children}: {
  children: React.ReactNode;
}) {
  return (
    <UserLocationContextWrapper>
      {children}
    </UserLocationContextWrapper>
  );
}