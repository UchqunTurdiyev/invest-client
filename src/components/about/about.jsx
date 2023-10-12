'use client';
import { Box, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { AboutHome } from '..';
import AboutCategory from './about-category';

export default function about() {
	return (
		<Box
			w={'full'}
			h={'full'}
			bg={useColorModeValue('white', 'url(https://themewagon.github.io/edu-meeting/assets/images/meetings-page-bg.jpg)')}
			bgRepeat={'no-repeat'}
			bgSize={'cover'}
			pb={10}
		>
			<AboutHome />
			<AboutCategory />
		</Box>
	);
}
