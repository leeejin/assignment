import { FormEvent } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useAuthMutation } from "../../hooks/mutation";

function LogInPage() {
  const { logInMutation } = useAuthMutation();
  const handleLogIn = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const user = new FormData(e.currentTarget);

    const formData = {
      id: user.get("id"),
      passwd: user.get("passwd"),
    };

    logInMutation(formData);
  };
  return (
    <div>
      <form onSubmit={handleLogIn}>
        <Input
          title="아이디"
          name="id"
          placeholder="아이디입력하세요"
          autoFocus
        />
        <Input
          title="비밀번호"
          name="passwd"
          placeholder="비밀번호를 입력해주세요"
        />
        <Button type={"submit"}>로그인</Button>
      </form>
    </div>
  );
}

export default LogInPage;
