import { useMutation } from "@tanstack/react-query";
import { isAxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import api from "../../api/api";
import { LOGIN } from "../../constants/pathname";
import { LogInUserType, UserType } from "../../types/type";

const useAuthMutation = () => {
  //const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: signUpMutation } = useMutation({
    mutationFn: (data: UserType) => api.user.registerUser(data),
    onSuccess: async () => {
      navigate(LOGIN);
    },
    onError: (error) => {
      if (isAxiosError(error)) {
        console.log(error);
      }
    },
  });

  const { mutate: logInMutation } = useMutation({
    mutationFn: (data: LogInUserType) => api.user.logInUser(data),
    onSuccess: async (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.error(error);
    },
  });

  // const { mutate: updateMutation } = useMutation({
  //   mutationFn: (data: any) => api.user.updateUser(data),
  //   onSuccess: async () => {},
  //   onError: () => {},
  // });

  return {
    signUpMutation,
    logInMutation,
    //updateMutation,
  };
};

export default useAuthMutation;
