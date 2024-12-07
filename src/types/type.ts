export type UserType = {
  id: FormDataEntryValue | null;
  passwd: FormDataEntryValue | null;
  nickname: FormDataEntryValue | null;
};

export type LogInUserType = Omit<UserType, "nickname">;
