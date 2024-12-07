import Button from "../components/Button";
import { HOME, LOGIN, MYPAGE, SIGNUP } from "../constants/pathname";

function Menubar() {
  return (
    <div>
      <Button to={HOME}>홈</Button>
      <Button to={LOGIN}>로그인</Button>
      <Button to={SIGNUP}>회원가입</Button>
      <Button>로그아웃</Button>
      <Button to={MYPAGE}>마이페이지</Button>
    </div>
  );
}

export default Menubar;
