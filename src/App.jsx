import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReCAPTCHA from 'react-google-recaptcha'

function App() {
  const [count, setCount] = useState(0)

  const siteKey = '6LdxKcApAAAAAGmtaji5a6YtysDYFWZezs_6trM1';


  function onChange(value) {
    console.log("Captcha value:", value);
  }
  return (
    <>
      <div>
        {/* <h3>ReCaptcha</h3> */}

        <ReCAPTCHA
          sitekey={siteKey}
          onChange={onChange}
        />

      </div>
    </>
  )
}

export default App
