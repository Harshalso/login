class User {
    constructor(email, password) {
      this.email = email;
      this.password = password;
      this.loggedIn = false;
    }
    
    login() {
      this.loggedIn = true;
    }
    
    logout() {
      this.loggedIn = false;
    }
  }
  
  const user = new User("programming@gmail.com", "assignment9");
  
  const loginBtn = document.getElementById("login");
  const logoutBtn = document.getElementById("logout");
  const status1 = document.getElementById("status1");
  
  loginBtn.addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if (email === user.email && password === user.password) {
      user.login();
      console.log("login");
      status1.textContent = `status1: Logged in as ${user.email}`;
    } else {
      alert("Invalid email or password!");
    }
  });
  
  logoutBtn.addEventListener("click", () => {
    user.logout();
    status1.textContent = "status1: Logged out";
  });
  