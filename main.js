function loginButton()
{
    user_name=document.getElementById("login_label").value;
    localStorage.setItem("user_name",user_name);
    window.location="letsChatMain.html";
}
