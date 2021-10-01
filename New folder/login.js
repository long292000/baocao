class Login {
    $txtId;
    $txtPassword;
    $formLogin;
    $btnSubmit;

    constructor(){
        this.$txtId=document.createElement("input");
        this.$txtId.type = "text"
        this.$txtId.placeholder= "Enter your ID";

        this.$txtPassword=document.createElement("input");
        this.$txtPassword.type= "password";
        this.$txtPassword.placeholder = "Enter your password";

        this.$formLogin = document.createElement("form");
        this.$formLogin.addEventListener("submit",this.login)

        this.$btnSubmit = document.createElement("button");
        this.$btnSubmit.type = "submit";
        this.$btnSubmit.innerHTML = "Login";
    }

    login = (event) =>{
        event.preventDefault();
        const id = this.$txtId.value;
        const password = this.$txtPassword.value;

        //Truyền dữ liệu đi để login
        
    }

    initRender = (container) => {
        const flexContainer = document.createElement("div");
        flexContainer.classList.add("d-flex", "flex-column", "centering");
        const title = document.createElement("h2");
        title.innerHTML="Login";

        flexContainer.appendChild(title);
        flexContainer.appendChild(this.$txtId);
        flexContainer.appendChild(this.$txtPassword);
        flexContainer.appendChild(this.$btnSubmit);

        this.$formLogin.appendChild(flexContainer);
        container.appendChild(this.$formLogin);
    };
}

export default Login;