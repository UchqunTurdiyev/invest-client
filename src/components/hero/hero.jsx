'use client';
import { Box, Heading, Image, Text, useColorModeValue } from '@chakra-ui/react';
import { hero } from '@/config/constants';

export default function Hero() {
	const textUse = useColorModeValue('gray.700', 'gray.200');
	return (
		<Box>
			{hero.map(el => (
				<div key={el.id}>
					<Box w={'full'} h={'600px'} pos={'relative'}>
						<Image src={el.image} alt='home' w={'full'} h={'full'} objectFit={'cover'} />
						<Box
							pos={'absolute'}
							top={0}
							left={0}
							right={0}
							bottom={0}
							bg={useColorModeValue('whiteAlpha.100', 'rgba(0,0,0, 0.5)')}
						/>
					</Box>
					<Box w={{ base: '85%', lg: '50%' }} pos={'absolute'} top={52} left={{ base: 2, lg: 20 }}>
						<Text color={textUse} fontWeight={'700'}>
							{el.title_top}
						</Text>
						<Heading color={textUse} my={4}>
							{el.title}
						</Heading>
						<Text color={textUse} fontWeight={'600'}>
							{el.description}
						</Text>
						{/* <Button mt={4} bg={BsListNested}>
							JOIN US NOW!
						</Button> */}
					</Box>
				</div>
			))}
		</Box>
	);
}
