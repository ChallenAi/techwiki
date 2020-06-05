import Cookies from "universal-cookie";

const token = {
  data: "",
};

const cookies = new Cookies();
const tkstr = cookies.get("sessid", { path: "/" });
if (tkstr) {
  token.data = tkstr;
}

export default token;
