import { MutationCache, QueryCache, QueryClient } from "@tanstack/react-query";

import { Problem } from "@/types/http-errors.interface";

const showNotification = (problem: Problem) => {
  if (problem?.errors) {
    Object.entries(problem.errors).forEach(([_, values]) => {
      values.forEach((errorMessage) => {
        console.log(errorMessage);

        // TODO: check if need to show error message
      });
    });
  } else if (problem?.message) {
    console.log(problem.message);
    // TODO: check if need to show error message

    if (problem.status === 401) {
      /* setTimeout(() => {
        localStorage.removeItem("token");
        router.navigate("/login");
      }, 2000); */
      // TODO: check if need to navigate around
    }
  }
};

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error: unknown) => {
      showNotification(error as Problem);
    },
  }),

  mutationCache: new MutationCache({
    onError: (error: unknown) => {
      showNotification(error as Problem);
    },
  }),

  defaultOptions: {
    queries: {
      retry: false,
      throwOnError: false,
      refetchOnWindowFocus: false,
    },
  },
});
