import isEmail from "validator/lib/isEmail";
export const Fetch = async (email, name, message) => {
  if (isEmail(email) && name.length > 0 && message.length > 0) {
    const send = {
      name,
      email,
      message,
    };
    const res = await fetch("http://localhost:5000", {
      method: "POST",
      body: JSON.stringify(send),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    // const resp = await res.json();
    // console.log(resp);
    return res;
  }
  return null;
};
