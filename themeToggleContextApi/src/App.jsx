import './App.css'
import Card from './components/Card'
import Toggle from './components/Toggle'

import { ThemeProvider } from './contexts/theme'

function App() {
  return (
    <>
    <ThemeProvider value = {{themeMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                <Toggle/>
            </div>

            <div className="w-full max-w-sm mx-auto">
                <Card/>
            </div>
        </div>
    </div>
    </ThemeProvider>
    </>
  )
}

export default App
