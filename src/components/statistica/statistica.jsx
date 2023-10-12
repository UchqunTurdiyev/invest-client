'use client';
import { Box, Center, Flex, Grid, HStack, Heading, Icon, Image, Link, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { BsPlayCircle } from 'react-icons/bs';

export default function Statistic() {
	return (
		<Box
			w={'full'}
			px={{ base: 2, lg: 20 }}
			py={10}
			bg={'url(https://themewagon.github.io/edu-meeting/assets/images/facts-bg.jpg)'}
			bgRepeat={'no-repeat'}
			bgSize={'cover'}
			bgAttachment={'fixed'}
		>
			{!staticData.length
				? 'Loading...'
				: staticData.map(el => (
						<Box key={el.id} mb={{ base: 6, lg: 40 }} py={10}>
							<Heading w={{ base: '100%', md: '400px' }} color='white'>
								{el.title}
							</Heading>
							<Flex justifyContent={'space-between'} flexDirection={{ base: 'column', lg: 'row' }}>
								<Grid
									w={{ base: '100%', lg: '70%' }}
									templateColumns='repeat(2, 1fr)'
									templateRows='repeat(2, 1fr)'
									mb={{ base: 0, lg: '-200px' }}
									gap={8}
									py={10}
									mt={10}
								>
									{el.statistic.map(st => (
										<Box
											display={'flex'}
											alignItems={'center'}
											justifyContent={'center'}
											flexDirection={'column'}
											w={'100%'}
											h={52}
											borderRadius={'xl'}
											key={st.id}
											bg={'rgba(250, 250, 250, 0.15)'}
											p={4}
										>
											<Heading color={'#f5a425'} textAlign={'center'} mb={4}>
												{st.num}
											</Heading>
											<Text fontSize={'2xl'} textAlign={'center'} color='white'>
												{st.title}
											</Text>
										</Box>
									))}
								</Grid>
								<Flex w={{ base: '100%', lg: '60%' }} h={'full'} borderRadius={'xl'} ml={{ base: 2, lg: 20 }} mt={4}>
									<Link href=''>
										<Box w={{ base: '100%', lg: '450px' }} h={'400px'} bg={'#f5a425'} borderRadius={'2xl'} pos={'relative'}>
											<Box pos={'absolute'} top={0} left={0} right={0} bottom={0} bg={'#f5a52597'} borderRadius={'2xl'}></Box>

											<Center w={'full'} h={'full'} pos={'absolute'}>
												<BsPlayCircle />
											</Center>
											<Image borderRadius={'2xl'} w={'full'} h={'full'} objectFit={'cover'} src={el.videoImg} alt={el.title} />
										</Box>
									</Link>
								</Flex>
							</Flex>
						</Box>
				  ))}
		</Box>
	);
}

export const staticData = [
	{
		id: 1,
		title: 'A Few Facts About Our University',
		videoImg: 'https://avatars.mds.yandex.net/i?id=a19d2da3a1b9e23ccb5b33c9d0151aeb98752548-9181379-images-thumbs&n=13',
		statistic: [
			{ id: 1, title: 'Succesed Students', num: 94 },
			{ id: 2, title: 'New Students', num: 2450 },
			{ id: 3, title: 'Current Teachers', num: 126 },
			{ id: 4, title: 'Awards', num: 32 },
		],
	},
];
