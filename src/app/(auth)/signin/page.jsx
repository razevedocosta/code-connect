import styles from './signin.module.css'
import FormLogin from '@/components/FormLogin'

export default function SignIn() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1>
          Login
        </h1>
        <h2>
          Boas-vindas! Faça seu login.
        </h2>

        <FormLogin />
      </div>
    </main>
  )
}