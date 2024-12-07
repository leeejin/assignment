import { FormEvent, useRef } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";

function UserPage() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const handleUpdateImg = (): void => {};
  const handleUpdate = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleUpdate}>
        <img
          alt={"프로필 이미지"}
          onClick={() => fileInputRef.current?.click()}
        />
        <Input
          type="file"
          name="avatar"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleUpdateImg}
        />
        <Input readOnly />
        <Input />
        <Button type="submit">회원정보 수정</Button>
      </form>
    </div>
  );
}

export default UserPage;
