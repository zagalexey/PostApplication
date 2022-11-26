import React, { useRef } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { login } from '../features/login/loginSlice'

interface ILoginPageProps {}

const LoginPage: React.FunctionComponent<ILoginPageProps> = () => {
	const emailRef = useRef<HTMLInputElement | null>(null)
	const passwordRef = useRef<HTMLInputElement | null>(null)

	const dispatch = useAppDispatch()
	const loginData = useAppSelector((state) => state.login)

	const loginHandler = () => {
		if (emailRef.current?.value === loginData.username && passwordRef.current?.value === loginData.password) {
			dispatch(login())
		} else {
			alert('Wrong email or password!')
		}
	}

	return (
		<div
			className={
				'absolute top-[120px] left-1/2 -translate-x-1/2 w-[333px] h-[368px] px-[32px] py-[32px] bg-blue-400 flex flex-col gap-7 rounded-xl shadow-2xl'
			}
		>
			<h1 className={'text-3xl'}>Log In</h1>
			<form className={'flex flex-col gap-[16px] items-end'} action=''>
				<div className={'w-full h-fit'}>
					<label htmlFor={'text'}>Email</label>
					<input
						ref={emailRef}
						className={'w-full h-full mt-[8px] w-full h-[36px] rounded px-2'}
						id={'email'}
						type='email'
						required={true}
						placeholder={'me@example.com'}
					/>
				</div>
				<div className={'w-full h-fit'}>
					<label htmlFor={'password'}>Password</label>
					<input
						ref={passwordRef}
						className={'w-full h-full mt-[8px] w-full h-[36px] rounded px-2'}
						id={'password'}
						type='password'
						required={true}
						placeholder={'*******'}
					/>
				</div>
				<button className={'bg-red-500 w-[69px] h-[36px] px-[12px] py-[6px] mt-[32px] rounded'} type='submit' onClick={loginHandler}>
					Log In
				</button>
			</form>
		</div>
	)
}

export default LoginPage
