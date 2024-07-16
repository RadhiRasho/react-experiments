import { useReadLocalStorage } from 'usehooks-ts'

export default function ReadLocalStorage() {
  // Assuming a value was set in localStorage with this key
  const darkMode = useReadLocalStorage('usehooks-ts-dark-mode', { initializeWithValue: false })

  return <div>Dark Mode is {darkMode ? 'enabled' : 'disabled'}</div>
}