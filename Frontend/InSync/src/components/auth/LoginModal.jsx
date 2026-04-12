import './loginModel.css'
export default function LoginModal() {
  return (
    <div className="login-modal">
      <h2>Continue with Email</h2>
    <p>Enter your email to sign in with an existing account or create a new one.</p>
      <form>
        <input type="email" id="email" name="email" placeholder="Email" required /> 
        <button type="submit">Login</button>    
        </form>
    </div>
  )
}   
