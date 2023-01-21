import React, { FC, FormEvent, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

import { login } from '../../features/login/loginSlice'
import Wrapper from '../wrappers/Wrapper'

import { useAppDispatch, useAppSelector } from '../../app/hooks'

const LoginPage: FC = () => {
	const usernameRef = useRef<HTMLInputElement | null>(null)
	const passwordRef = useRef<HTMLInputElement | null>(null)
	const navigate = useNavigate()

	const dispatch = useAppDispatch()
	const loginData = useAppSelector((state) => state.login)

	const loginHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (
			usernameRef.current?.value === loginData.username &&
			passwordRef.current?.value === loginData.password
		) {
			dispatch(login())
			navigate('/')
		} else {
			alert('Wrong email or password!')
		}
	}

	return (
		<Wrapper>
			<div
				className={
					'absolute top-[120px] left-1/2 -translate-x-1/2 w-[368px] px-[32px] pt-[32px] pb-[25px] bg-main shadow-2xl flex flex-col rounded shadow-2xl'
				}
			>
				<h1 className={'text-3xl font-bold mb-[24px]'}>Log In</h1>
				<form
					onSubmit={(e) => loginHandler(e)}
					className={'flex flex-col items-end'}
					action='src/components/pages/LoginPage'
				>
					<div className={'w-full h-fit mb-[16px]'}>
						<label htmlFor={'text'}>Username</label>
						<input
							ref={usernameRef}
							className={'w-full h-full mt-[8px] w-full h-[36px] rounded px-2 border'}
							id={'Username'}
							type='text'
							required={true}
							placeholder={'Your username'}
						/>
					</div>
					<div className={'w-full h-fit'}>
						<label htmlFor={'password'}>Password</label>
						<input
							ref={passwordRef}
							className={'w-full h-full mt-[8px] w-full h-[36px] border rounded px-2'}
							id={'password'}
							type='password'
							required={true}
							placeholder={'*******'}
						/>
					</div>
					<button
						className={'bg-blue w-[69px] mt-[32px] h-[36px] px-[12px] py-[6px] rounded text-main'}
						type='submit'
					>
						Log In
					</button>
				</form>
			</div>
		</Wrapper>
	)
}

export default LoginPage
