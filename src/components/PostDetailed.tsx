import React, { useEffect, useState } from 'react'
import CommentSection from './CommentSection'
import Comment from './Comment'
import RelatedArticlesWrapper from './RelatedArticlesWrapper'
import RelatedArticle from './RelatedArticle'
import Paragraph from './Paragraph'
import Wrapper from './Wrapper'
import { useParams } from 'react-router-dom'

import Img from '../images/img.jpg'
import { IArticle } from '../models'
import axios from 'axios'

interface IPostDetailedProps {}

const PostDetailed: React.FunctionComponent<IPostDetailedProps> = () => {
	const [articleDetailed, setArticleDetailed] = useState<IArticle | null>(null)
	const { articleId } = useParams()

	useEffect(() => {
		axios
			.get(`http://localhost:3000/articles/${articleId}?_embed=comments`)
			.then((res) => setArticleDetailed(res.data))
			.catch((e) => console.log(e))
	}, [articleId])

	const date = articleDetailed
		? new Date(articleDetailed.createdAt).toLocaleString('en', {
				day: 'numeric',
				month: 'numeric',
				year: 'numeric',
				hour12: false,
				timeZone: 'UTC'
		  })
		: ''

	return (
		<Wrapper>
			<div className={'w-full h-full pt-[62px]'}>
				<div className={'flex gap-10'}>
					<div className={'w-[760px] h-full flex flex-col'}>
						{/*<h1 className={'text-2xl font-bold mb-[24px]'}>title</h1>*/}
						<h1 className={'text-2xl font-bold mb-[24px]'}>{articleDetailed?.title}</h1>
						<div className={'flex gap-4 mb-[24px]'}>
							<span className={'text-gray-500'}>Elisabeth Strain</span>
							<span className={'text-gray-500'}>{date}</span>
						</div>
						<img className={'w-full h-[504px] mb-[24px] object-cover'} src={Img} alt='image' />
						<div>
							<h2>Marianne or husbands if at stronger ye</h2>
							<Paragraph>
								Chapter too parties its letters nor. Cheerful but whatever ladyship disposed yet
								judgment. Lasted answer oppose to ye months no esteem. Branched is on an ecstatic
								directly it. Put off continue you denoting returned juvenile. Looked person sister
								result mr to. Replied demands charmed do viewing ye colonel to so. Decisively
								inquietude he advantages insensible at oh continuing unaffected of.
							</Paragraph>
							<Paragraph>
								Projecting surrounded literature yet delightful alteration but bed men. Open are
								from long why cold. If must snug by upon sang loud left. As me do preference
								entreaties compliment motionless ye literature. Day behaviour explained law
								remainder. Produce can cousins account you pasture. Peculiar delicate an pleasant
								provided do perceive.
							</Paragraph>
							<Paragraph>
								Am increasing at contrasted in favourable he considered astonished. As if made held
								in an shot. By it enough to valley desire do. Mrs chief great maids these which are
								ham match she. Abode to tried do thing maids. Doubtful disposed returned rejoiced to
								dashwood is so up.
							</Paragraph>
							<Paragraph>
								Use securing confined his shutters. Delightful as he it acceptance an solicitude
								discretion reasonably. Carriage we husbands advanced an perceive greatest. Totally
								dearest expense on demesne ye he. Curiosity excellent commanded in me. Unpleasing
								impression themselves to at assistance acceptance my or. On consider laughter
								civility offended oh.
							</Paragraph>
							<Paragraph>
								Ignorant saw her her drawings marriage laughter. Case oh an that or away sigh do
								here upon. Acuteness you exquisite ourselves now end forfeited. Enquire ye without
								it garrets up himself. Interest our nor received followed was. Cultivated an up
								solicitude mr unpleasant.
							</Paragraph>
							<Paragraph>
								Supplied directly pleasant we ignorant ecstatic of jointure so if. These spoke house
								of we. Ask put yet excuse person see change. Do inhabiting no stimulated unpleasing
								of admiration he. Enquire explain another he in brandon enjoyed be service. Given
								mrs she first china. Table party no or trees an while it since. On oh celebrated at
								be announcing dissimilar insipidity. Ham marked engage oppose cousin ask add yet.
							</Paragraph>
							<Paragraph>
								Talking chamber as shewing an it minutes. Trees fully of blind do. Exquisite
								favourite at do extensive listening. Improve up musical welcome he. Gay attended
								vicinity prepared now diverted. Esteems it ye sending reached as. Longer lively her
								design settle tastes advice mrs off who.
							</Paragraph>
							<Paragraph>
								Its had resolving otherwise she contented therefore. Afford relied warmth out sir
								hearts sister use garden. Men day warmth formed admire former simple. Humanity
								declared vicinity continue supplied no an. He hastened am no property exercise of.
								Dissimilar comparison no terminated devonshire no literature on. Say most yet head
								room such just easy.
							</Paragraph>
							<Paragraph>
								John draw real poor on call my from. May she mrs furnished discourse extremely. Ask
								doubt noisy shade guest did built her him. Ignorant repeated hastened it do.
								Consider bachelor he yourself expenses no. Her itself active giving for expect
								vulgar months. Discovery commanded fat mrs remaining son she principle middleton
								neglected. Be miss he in post sons held. No tried is defer do money scale rooms.
							</Paragraph>
							{/*<Paragraph>*/}
							{/*	Men might grow a beard or maintain a mustache just for extra style points, but the*/}
							{/*	facial hair of the cat has nothing to do with fashion. A cat's whiskers — or*/}
							{/*	vibrissae — are a well-honed sensory tool that helps a cat see in the dark and steer*/}
							{/*	clear of hungry predators.*/}
							{/*</Paragraph>*/}
							{/*<Paragraph>*/}
							{/*	Whiskers are highly sensitive tactile hairs that grow in patterns on a cat's muzzle,*/}
							{/*	above its eyes and elsewhere on its body, like the ears, jaw and forelegs. At the*/}
							{/*	root of each of these long, stiff hairs is a follicle loaded with nerves.*/}
							{/*</Paragraph>*/}
							{/*<Paragraph>*/}
							{/*	By brushing its whiskers against an object, a cat can detect the precise location,*/}
							{/*	size and texture of the object, even in the dark. This feature proves particularly*/}
							{/*	useful for a cat trying to gauge whether it can fit into a tight space. Whiskers*/}
							{/*	also detect changes in air currents, helping cats detect approaching dangers.*/}
							{/*</Paragraph>*/}
							{/*<Paragraph>*/}
							{/*	Whiskers not only make cats aware of their surroundings, but can also provide humans*/}
							{/*	with some insight into their pet's state of mind. For example, a set of taut*/}
							{/*	whiskers, pulled back across the face, is a good indication that Kitty feels*/}
							{/*	threatened, while relaxed whiskers, pointing away from the face, indicate a content*/}
							{/*	cat.*/}
							{/*</Paragraph>*/}
							{/*<Paragraph>*/}
							{/*	Of course, cats aren't the only mammals with whiskers. Most mammalian species,*/}
							{/*	including primates, are equipped with these extrasensory receptors. Biologists think*/}
							{/*	mammals developed whiskers because they needed help sensing their environments at*/}
							{/*	night.*/}
							{/*</Paragraph>*/}
							{/*<Paragraph>*/}
							{/*	The first small mammals shared the world with dinosaurs and had to adapt to hunting*/}
							{/*	nocturnally, when their predators were less active. Whiskers helped these hungry*/}
							{/*	animals find food and navigate dark terrain. This evolutionary adaptation also helps*/}
							{/*	to explain why the whiskers of many nocturnal or aquatic carnivores — like rats,*/}
							{/*	seals and walruses — are so prominent.*/}
							{/*</Paragraph>*/}
						</div>
						<hr />
						<CommentSection>
							{articleDetailed ? (
								articleDetailed.comments.map((comment) => <Comment comment={comment} />)
							) : (
								<></>
							)}
						</CommentSection>
					</div>
					<RelatedArticlesWrapper>
						<RelatedArticle />
						<RelatedArticle />
						<RelatedArticle />
						<RelatedArticle />
					</RelatedArticlesWrapper>
				</div>
			</div>
		</Wrapper>
	)
}

export default PostDetailed
