import { useReducer } from 'react';

function RegisterForm() {
  const [formData, setFormData] = useReducer(
    (s: any, a: any) => ({ ...s, ...a }),
    {
      resolved: false,
      loading: false,
      error: null,
    },
  );

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('submitting');
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='form'>
        <div>
          <label htmlFor='username'>Username</label>
          <input name='username' id='username' type='text' />
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input name='email' id='email' type='text' />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input name='password' id='password' type='password' />
        </div>
        <div>
          <button type='submit'></button>
        </div>
      </form>
    </>
  );
}

export default RegisterForm;
