import { useState, useCallback, useEffect, useRef} from 'react'
import toast from 'react-hot-toast';

function App() {
  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password)
    passwordInputRef.current?.select()
    toast('Copied To Clipboard.', {
      position: 'top-center',
      duration: '150',
      // style: {
      //   color: 'red'
      // },
      className:'text-red-600 font-bold bg-slate-200'
    })
  };
  const [length,setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState('')
  
  const passwordInputRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if(numberAllowed) str += "0123456789"
    if(characterAllowed) str += "!@#$%^&*()_+"

    for (let i = 1; i <= length; i++){
      const char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  },[length, numberAllowed, characterAllowed]) // ...These are the dependancies which shud not change too much....


  useEffect(() => {
    generatePassword()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numberAllowed, length, characterAllowed])
  



  return (
    <div className='flex h-screen justify-center items-center'>
      <div className="w-full shadow-md max-w-md bg-slate-700 mx-auto rounded-lg px-4 py-3 my-8 text-oraange-500">
        <h1 className='text-3xl text-white my-3'>This is a Password Generator.</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
            ref={passwordInputRef}
          />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyPasswordToClipboard}>Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              onChange={e => setLength(e.target.value)}
              className='cursor-pointer'
              name=""
              id=""
            />
            <label htmlFor="length" className='text-white px-2 text-base'>Length: { length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev)
              }}
              name=""
              id=""
            />
            <label htmlFor="number" className='text-white'>Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={characterAllowed}
              onChange={() => {
                setCharacterAllowed((prev) => !prev)
              }}
              name=""
              id=""
            />
            <label htmlFor="character" className='text-white'>Characters</label>
          </div>
        </div>
      </div>
    </div>
  )
}

  export default App;
