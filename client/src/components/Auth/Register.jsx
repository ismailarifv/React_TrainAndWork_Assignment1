import { useState } from "react";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${apiUrl}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        // const { password, ...rest } = data;

        localStorage.setItem("user", JSON.stringify(data));
        message.success("Kayıt başarılı.");
        navigate("/");
      } else {
        message.error("Kayıt başarısız.");
      }
    } catch (error) {
      console.log("Giriş hatası:", error);
    }
  };
  return (
    <div className="account-column">
    <h2>Kayıt Ol</h2>
    <form onSubmit={handleRegister}>
      <div>
        <label>
          <span>
            Kullanıcı Adı <span className="required">*</span>
          </span>
          <input type="text" onChange={handleInputChange} name="username"/>
        </label>
      </div>
      <div>
        <label>
          <span>
            Mail Adresi <span className="required">*</span>
          </span>
          <input type="email" onChange={handleInputChange} name="email"/>
        </label>
      </div>
      <div>
        <label>
          <span>
            Şifre <span className="required">*</span>
          </span>
          <input 
          type="password" 
                  onChange={handleInputChange}
                  name="password"
                  />
        </label>
      </div>
      <div className="privacy-policy-text remember">
        
        <button className="btn btn-sm">Register</button>
      </div>
    </form>
  </div>
  )
}

export default Register