import { FormEvent } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useAuthMutation } from "../../hooks/mutation";

function SignUpPage() {
  const { signUpMutation } = useAuthMutation();
  const handleSignUp = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const user = new FormData(e.currentTarget);

    const formData = {
      id: user.get("id"),
      nickname: user.get("nickname"),
      passwd: user.get("passwd"),
    };
    signUpMutation(formData);
  };
  return (
    <div>
      <form onSubmit={handleSignUp}>
        <Input
          title="아이디"
          name="id"
          placeholder="아이디를 입력해주세요"
          autoFocus
        />
        <Input title="이름" name="nickname" placeholder="이름을 입력해주세요" />
        <Input
          title="비밀번호"
          name="passwd"
          placeholder="비밀번호를 입력해주세요"
          type="password"
        />
        <Input
          placeholder="비밀번호를 확인해주세요"
          name="passwd2"
          type="password"
        />
        <Button type="submit">회원가입</Button>
      </form>
    </div>
  );
}

export default SignUpPage;
