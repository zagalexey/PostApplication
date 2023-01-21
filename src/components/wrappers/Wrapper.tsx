import React, { FC, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { logout } from '../../features/login/loginSlice'

interface IWrapperProps {
	children: React.ReactNode
}

const Wrapper: FC<IWrapperProps> = ({ children }) => {
	const [modal, setModal] = useState(false)

	const dispatch = useAppDispatch()
	const loginSelector = useAppSelector((state) => state.login)

	const navigate = useNavigate()

	const logoutHandler = () => {
		dispatch(logout())
		setModal((prevState) => !prevState)
	}

	return (
		<>
			<nav className={'relative w-screen h-[56px] px-[225px] bg-navbar'}>
				<ul className={'w-full h-full flex items-center justify-between'}>
					<div className={'flex items-center gap-[40px]'}>
						<Link to={'/'}>
							<img src={require('../../images/icons/logo.svg')} alt='logo' />
						</Link>
						<li>
							<Link to={'/'}>Recent Articles</Link>
						</li>
						<li>
							<Link className={'text-grey'} to={'/'}>
								About
							</Link>
						</li>
					</div>
					<li>
						{loginSelector.isLoggedIn ? (
							<div className={'relative flex items-center gap-[40px]'}>
								<Link to={'/myarticles'}>My Articles</Link>
								<Link className={'text-blue'} to={'/createarticle'}>
									Create Article
								</Link>
								<img
									className={'w-[32px] h-[32px] hover:cursor-pointer'}
									src={require('../../images/avatars/Avatar.png')}
									alt='avatar'
									onClick={() => setModal((prevState) => !prevState)}
								/>
								{modal && (
									<div className={'absolute right-0 top-[50px] p-5 bg-navbar'}>
										<button className={'px-4 py-2 bg-red-500 rounded'} onClick={logoutHandler}>
											Log out
										</button>
									</div>
								)}
							</div>
						) : (
							<div
								className={'flex items-center gap-2 text-blue-500 hover: cursor-pointer'}
								onClick={() => navigate('/login')}
							>
								Log in
								<img src={require('../../images/icons/arrow.svg')} alt='Arrow' />
							</div>
						)}
					</li>
				</ul>
			</nav>
			<div className={'px-[225px]'}>{children}</div>
		</>
	)
}

export default Wrapper
