import React from 'react'

interface IActionButtonProps {
	name: string
}

const ActionButton: React.FunctionComponent<IActionButtonProps> = ({ name }) => {
	return <button className={'px-[12px] py-[6px] bg-blue-400 rounded'}>{name}</button>
}

export default ActionButton
