export default function ResetPassword() {

  return(
    <div>
      <h1>Reset Password</h1>
      <p>Enter your email address to reset your password.</p>
      <form method="post">
        <input type="email" name="email" placeholder="Email" required />
        <button type="submit">Send Reset Link</button>
      </form>
    </div>
  )
};