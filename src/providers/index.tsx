"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";

import { queryClient } from "@/lib/react-query";

type ProvidersProps = {
  children: React.ReactNode;
};

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
