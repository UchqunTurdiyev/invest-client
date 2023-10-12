'use client';
import { Box, Heading, Image, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import AboutCategory from './about-category';

export default function AboutHome() {
	const background = useColorModeValue('whiteAlpha.200', 'rgba(0,0,0, 0.3)');
	return (
		<Box>
			{aboutHome.length
				? aboutHome.map(el => (
						<Box key={el.id} pos={'relative'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
							<Box pos={'absolute'} w={'full'} h={'full'} bg={background} top={0} left={0}></Box>
							<Image width={'full'} h={'400px'} objectFit={'cover'} src={el.image} alt={el.title} />
							<Box pos={'absolute'}>
								<Text textAlign={'center'} color={'white'}>
									{el.titleSmall}
								</Text>
								<Heading textAlign={'center'} pt={6} fontSize={'4xl'} color={'white'}>
									{el.title}
								</Heading>
							</Box>
						</Box>
				  ))
				: 'Loading...'}
		</Box>
	);
}

export const aboutHome = [
	{
		id: 1,
		title: 'UPCOMING MEETINGS',
		titleSmall: 'HERE ARE OUR UPCOMING MEETINGS',
		image: 'https://themewagon.github.io/edu-meeting/assets/images/heading-bg.jpg',
	},
];
