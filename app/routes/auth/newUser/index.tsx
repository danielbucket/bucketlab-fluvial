export default function NewUser() {

  return (
    <div>
      <h1>New User</h1>
      <p>Welcome to the new user page!</p>
      <p>This is a placeholder for the new user registration process.</p>
      <p>Please fill out the form below to create a new account.</p>
      <form>
        {/* Add your form fields here */}
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Create Account</button>
      </form>
      <p>Already have an account? <a href="/auth/login">Login here</a>.</p>
      <p>Need help? <a href="/auth/forgot-password">Forgot password?</a></p>
    </div>  
  )
};