import React from 'react'

interface IParagraphProps {
	children: React.ReactNode
}

const Paragraph: React.FunctionComponent<IParagraphProps> = ({ children }) => {
	return <p className={'mb-[30px]'}>{children}</p>
}

export default Paragraph
