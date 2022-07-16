import { shallowMount } from "@vue/test-utils";

import loginForm from "@/modules/auth/views/login";

describe("login.vue", () => {
  /////////////////////
  // Function
  ///////////////////
  const testFun = (data, showError) => {
    test(`email: ${data.email} and password :${data.password} showError : ${showError}`, () => {
      const wrapper = shallowMount(loginForm);
      wrapper.setData(data);
      console.log(`${Object.values(data).join(",")}`, wrapper.find(".error"));
      expect(wrapper.find(".error").exists()).toBe(showError);
    });
  };

  /////////////////////
  // Test Cases
  //////////////////
  testFun({ email: "norhan.com", password: "" }, true);
  testFun({ email: "norhan@app.com", password: "1111" }, false);
});
