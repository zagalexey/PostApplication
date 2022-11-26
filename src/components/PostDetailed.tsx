import React from 'react'
import CommentSection from './CommentSection'
import Comment from './Comment'
import RelatedArticlesWrapper from './RelatedArticlesWrapper'
import RelatedArticle from './RelatedArticle'
import Paragraph from './Paragraph'
import Wrapper from './Wrapper'

interface IPostDetailedProps {}

const PostDetailed: React.FunctionComponent<IPostDetailedProps> = ({}) => {
	return (
		<Wrapper>
			<div className={'w-full h-full pt-[62px]'}>
				<div className={'flex gap-10'}>
					<div className={'w-[760px] h-full flex flex-col'}>
						<h1 className={'text-2xl font-bold mb-[24px]'}>Why Do Cats Have Whiskers?</h1>
						<div className={'flex gap-4 mb-[24px]'}>
							<span className={'text-gray-500'}>Author</span>
							<span className={'text-gray-500'}>12.4.2019</span>
						</div>
						<img className={'w-full h-[504px] mb-[24px] object-cover'} src={require('../images/img.jpg')} alt='image' />
						<div>
							<Paragraph>
								Men might grow a beard or maintain a mustache just for extra style points, but the facial hair of the cat has nothing to do
								with fashion. A cat's whiskers — or vibrissae — are a well-honed sensory tool that helps a cat see in the dark and steer clear
								of hungry predators.
							</Paragraph>
							<Paragraph>
								Whiskers are highly sensitive tactile hairs that grow in patterns on a cat's muzzle, above its eyes and elsewhere on its body,
								like the ears, jaw and forelegs. At the root of each of these long, stiff hairs is a follicle loaded with nerves.
							</Paragraph>
							<Paragraph>
								By brushing its whiskers against an object, a cat can detect the precise location, size and texture of the object, even in the
								dark. This feature proves particularly useful for a cat trying to gauge whether it can fit into a tight space. Whiskers also
								detect changes in air currents, helping cats detect approaching dangers.
							</Paragraph>
							<Paragraph>
								Whiskers not only make cats aware of their surroundings, but can also provide humans with some insight into their pet's state
								of mind. For example, a set of taut whiskers, pulled back across the face, is a good indication that Kitty feels threatened,
								while relaxed whiskers, pointing away from the face, indicate a content cat.
							</Paragraph>
							<Paragraph>
								Of course, cats aren't the only mammals with whiskers. Most mammalian species, including primates, are equipped with these
								extrasensory receptors. Biologists think mammals developed whiskers because they needed help sensing their environments at
								night.
							</Paragraph>
							<Paragraph>
								The first small mammals shared the world with dinosaurs and had to adapt to hunting nocturnally, when their predators were
								less active. Whiskers helped these hungry animals find food and navigate dark terrain. This evolutionary adaptation also helps
								to explain why the whiskers of many nocturnal or aquatic carnivores — like rats, seals and walruses — are so prominent.
							</Paragraph>
						</div>
						<hr />
						<CommentSection>
							<Comment />
							<Comment />
							<Comment />
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
