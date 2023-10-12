'use client';
import { data } from '@/config/constants';
import { Box, Heading, Icon, Text, useColorModeValue } from '@chakra-ui/react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function HomePageCarousel() {
	const bgImg = useColorModeValue(
		'url(https://damion.club/uploads/posts/2022-01/thumbs/1642187431_55-damion-club-p-informatika-fon-55.png)',
		'url(https://themewagon.github.io/edu-meeting/assets/images/service-item-bg.jpg)'
	);
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};
	return (
		<Box px={{ base: 2, lg: 20 }} py={5} mt={'-120px'}>
			<Carousel responsive={responsive}>
				{data.length
					? data.map(el => (
							<Box
								key={el.id}
								w={'95%'}
								mx={'auto'}
								h={'250px'}
								display={'flex'}
								alignItems={'center'}
								justifyContent={'center'}
								flexDirection={'column'}
								borderRadius={'lg'}
								px={2}
								gap={4}
								bg={bgImg}
								bgRepeat={'no-repeat'}
								bgSize={'cover'}
							>
								{/* <Icon fontSize={'2xl'}     /> */}
								<Heading py={4}>{el.title}</Heading>
								<Text textAlign={'center'}>{el.description}</Text>
							</Box>
					  ))
					: 'Loading...'}
			</Carousel>
		</Box>
	);
}
