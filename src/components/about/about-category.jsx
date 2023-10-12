'use client';
import { Box, Button, Flex, Grid, HStack, Image, Text, useColorModeValue } from '@chakra-ui/react';
import React, { useCallback, useState } from 'react';
import { motion } from 'framer-motion';
import Footer from '../footer/footer';

export default function AboutCategory() {
	const [filter, setFilter] = useState('all-categories');
	const backgroundColor = useColorModeValue('gray.200', 'gray.900');

	const filteredData = useCallback(() => {
		switch (filter) {
			case 'sayohat':
				return allCategory.filter(c => c.category === 'sayohat');
			case 'bayramlar':
				return allCategory.filter(c => c.category === 'bayramlar');
			case 'uchrashuvlar':
				return allCategory.filter(c => c.category === 'uchrashuvlar');
			case 'dars-jarayoni':
				return allCategory.filter(c => c.category === 'dars-jarayoni');
			case 'imtihon':
				return allCategory.filter(c => c.category === 'imtihon');
			default:
				return allCategory;
		}
	}, [filter]);
	return (
		<Box>
			<Box px={{ base: 2, lg: 20 }} py={10}>
				<Flex justifyContent={'center'} flexWrap={'wrap'}>
					{allCategoryButton.length
						? allCategoryButton.map((el, idx) => (
								<Button
									variant={filter == el.id ? 'solid' : 'outline'}
									// bg={'white'}
									colorScheme='facebook'
									// color='red.700'
									// borderRadius={'full'}
									// _hover={{ bg: 'red.700', color: 'white' }}
									key={el.id}
									borderRadius={0}
									borderLeftRadius={idx == 0 ? 'lg' : 0}
									borderRightRadius={allCategoryButton.length - 1 == idx ? 'lg' : 0}
									onClick={() => setFilter(el.id)}
								>
									{el.label}
								</Button>
						  ))
						: 'Loading...'}
				</Flex>
				<Grid
					gridTemplateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', xl: 'repeat(3, 1fr)' }}
					rowGap={20}
					gap={4}
					mt={10}
				>
					{filteredData().length
						? filteredData().map(el => (
								<motion.div key={el.name} layout>
									<Box pos={'relative'}>
										<Image src={el.image} alt={el.name} borderRadius={'lg'} w={'full'} h={'250px'} objectFit={'cover'} />
										<Box
											pos={'absolute'}
											minH={'90px'}
											bg={backgroundColor}
											left={2}
											right={2}
											bottom={-10}
											borderRadius={'lg'}
											boxShadow={'dark-lg'}
											p={2}
										>
											<Text fontSize={'xl'}>{el.name}</Text>
											<Text fontSize={'sm'} color={'gray.500'}>
												{el.description.slice(0, 100)}...
											</Text>
											<Button variant={'link'}>More...</Button>
										</Box>
									</Box>
								</motion.div>
						  ))
						: 'Not found'}
				</Grid>
			</Box>
			{/* <Box mt={10}>
				<Footer />
			</Box> */}
		</Box>
	);
}

export const allCategoryButton = [
	{ label: 'All Category', id: 'all-categories' },
	{ label: 'Sayohat', id: 'sayohat' },
	{ label: 'Bayramlar', id: 'bayramlar' },
	{ label: 'Uchrashuvlar', id: 'uchrashuvlar' },
	{ label: 'Dars jarayoni', id: 'dars-jarayoni' },
	{ label: 'Imtihon', id: 'imtihon' },
];

export const allCategory = [
	{
		name: 'Toshketga Sayohat',
		image: 'https://avatars.mds.yandex.net/i?id=963b293c9ce66d3ef26c88209452f56836abd8b4-9072244-images-thumbs&n=13',
		category: 'sayohat',
		description: "Let's use these components to create a password input with a show/hide password functionality:",
	},
	{
		name: 'Samarqand Sayohat',
		image: 'https://avatars.mds.yandex.net/i?id=9ccf55ba31065253dada4d08966d199477a2718a-9182048-images-thumbs&n=13',
		category: 'sayohat',
		description: "Let's use these components to create a password input with a show/hide password functionality:",
	},
	{
		name: 'Buxoro Sayohat',
		image: 'https://avatars.mds.yandex.net/i?id=f1683d4630d5b9bc449da5084822bd8c79bf4509-6962773-images-thumbs&n=13',
		category: 'sayohat',
		description: "Let's use these components to create a password input with a show/hide password functionality:",
	},
	{
		name: 'Dars jarayoni',
		image: 'https://avatars.mds.yandex.net/i?id=16ec907dd200419540fb04caa0f71304d216625f-8497069-images-thumbs&n=13',
		category: 'dars-jarayoni',
		description: "Let's use these components to create a password input with a show/hide password functionality:",
	},
	{
		name: 'Muxammadali Eshmuxammedov',
		image: 'https://avatars.mds.yandex.net/i?id=963b293c9ce66d3ef26c88209452f56836abd8b4-9072244-images-thumbs&n=13',
		category: 'uchrashuvlar',
		description: "Let's use these components to create a password input with a show/hide password functionality:",
	},
	{
		name: "Songi qung'iroq",
		image: 'https://avatars.mds.yandex.net/i?id=4093b4a575a08874b45659a4eb70ca33dcb40307-9067403-images-thumbs&n=13',
		category: 'bayramlar',
		description: "Let's use these components to create a password input with a show/hide password functionality:",
	},
	{
		name: 'Imtihon jarayoni',
		image: 'https://avatars.mds.yandex.net/i?id=4004395c01b4069ad24d666c9151f4614bc792e4-6985270-images-thumbs&n=13',
		category: 'imtihon',
		description: "Let's use these components to create a password input with a show/hide password functionality:",
	},
	{
		name: 'Dars jarayoni maktabda',
		image: 'https://avatars.mds.yandex.net/i?id=16ec907dd200419540fb04caa0f71304d216625f-8497069-images-thumbs&n=13',
		category: 'dars-jarayoni',
		description: "Let's use these components to create a password input with a show/hide password functionality:",
	},
];
