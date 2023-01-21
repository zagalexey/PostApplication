import React, { FC } from 'react'

interface IActionButtonProps {
	name: string
}

const ActionButton: FC<IActionButtonProps> = ({ name }) => {
	return <button className={'px-[12px] py-[6px] bg-blue text-white rounded'}>{name}</button>
}

export default ActionButton
