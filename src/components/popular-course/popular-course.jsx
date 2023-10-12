'use client';
import {
	Box,
	Button,
	ButtonGroup,
	Card,
	CardBody,
	CardFooter,
	Divider,
	Heading,
	Image,
	Stack,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import Carousel from 'react-multi-carousel';

export default function PopularCourse() {
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
		<Box py={10} px={{ base: 2, lg: 20 }}>
			<Heading borderBottom={'2px'} borderColor='gray.600' py={4} mt={10}>
				OUR POPULAR COURSES
			</Heading>
			<Box mt={8}>
				<Carousel responsive={responsive}>
					{popularCourse.length
						? popularCourse.map(el => (
								<Card maxW='sm' key={el.id} mx={2}>
									<CardBody>
										<Image width={'100%'} src={el.img} alt='Green double couch with wooden legs' />
										<Stack mt='6' spacing='3'>
											<Heading size='md'>{el.title}</Heading>
											<Text>{el.description}</Text>
										</Stack>
									</CardBody>
									<Divider />
									<CardFooter>
										<ButtonGroup spacing='2'>
											<Button variant='solid' colorScheme='blue'>
												Watch now
											</Button>
										</ButtonGroup>
									</CardFooter>
								</Card>
						  ))
						: 'Loading...'}
				</Carousel>
			</Box>
		</Box>
	);
}

export const popularCourse = [
	{
		id: 1,
		img: 'https://themewagon.github.io/edu-meeting/assets/images/course-01.jpg',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		title: 'Living room Sofa',
	},
	{
		id: 2,
		img: 'https://themewagon.github.io/edu-meeting/assets/images/course-02.jpg',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		title: 'Living room Sofa',
	},
	{
		id: 3,
		img: 'https://themewagon.github.io/edu-meeting/assets/images/course-01.jpg',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		title: 'Living room Sofa',
	},
	{
		id: 4,
		img: 'https://themewagon.github.io/edu-meeting/assets/images/course-03.jpg',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		title: 'Living room Sofa',
	},
	{
		id: 5,
		img: 'https://themewagon.github.io/edu-meeting/assets/images/course-01.jpg',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		title: 'Living room Sofa',
	},
	{
		id: 6,
		img: 'https://themewagon.github.io/edu-meeting/assets/images/course-01.jpg',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		title: 'Living room Sofa',
	},
];
