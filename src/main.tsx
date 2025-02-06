import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import MainLayout from '@layouts/MainLayout'
import Home from '@pages/Home'
import Login from '@pages/Login'
import Register from '@pages/Register'
import { AuthProvider } from '@context/AuthContext'

createRoot(document.getElementById('root')!).render(
		<AuthProvider>
			<BrowserRouter>
				<Routes>
					<Route element={<MainLayout/>}>
						<Route path='/' element={<Home/>}></Route>
						<Route path='/login' element={<Login/>}></Route>
						<Route path='/register' element={<Register/>}></Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</AuthProvider>
)
