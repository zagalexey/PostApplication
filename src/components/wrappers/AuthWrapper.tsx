import { Navigate } from 'react-router-dom'
import React, { FC } from 'react'

import { useAppSelector } from '../../app/hooks'
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'

interface IAuthWrapperProps {
	children: ReactJSXElement
}

const AuthWrapper: FC<IAuthWrapperProps> = ({ children }) => {
	const loginSelector = useAppSelector((state) => state.login)
	return loginSelector.isLoggedIn ? <>{children}</> : <Navigate to='/login' />
}

export default AuthWrapper
