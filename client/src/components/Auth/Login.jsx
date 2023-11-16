

function Login() {
  return (
    <div className="account-column">
    <h2>Giriş</h2>
    <form>
      <div>
        <label>
          <span>
            Kullanıcı Adı veya mail adresi <span className="required">*</span>
          </span>
          <input type="text" />
        </label>
      </div>
      <div>
        <label>
          <span>
            Şifre <span className="required">*</span>
          </span>
          <input type="password" />
        </label>
      </div>
      <p className="remember">
        <label>
          <input type="checkbox" />
          <span>Beni Hatırla</span>
        </label>
        <button className="btn btn-sm">Giriş</button>
      </p>
      <a href="#" className="form-link">
        Parolanızı mı unuttunuz?
      </a>
    </form>
  </div>
  )
}

export default Login