import './loginModel.css'
export default function LoginModal({ onClose }) {
  return (
    <div className="login-modal">
      <button type="button" className="close-button" onClick={onClose}>
        x
        </button>
      <h2 id="login-title">Continue with </h2> <h2 className="accent">Email</h2>
    <p>Enter your email to sign in with an existing account or create a new one.</p>
      <form>
        <input type="email" id="email" name="email" placeholder="Email" required /> 
        <button type="submit">Login</button>    
        </form>
    </div>
  )
}   
