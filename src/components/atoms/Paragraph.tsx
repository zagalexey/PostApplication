import React, { FC } from 'react'

interface IParagraphProps {
	children: React.ReactNode
}

const Paragraph: FC<IParagraphProps> = ({ children }) => {
	return <p className={'mb-[30px]'}>{children}</p>
}

export default Paragraph
