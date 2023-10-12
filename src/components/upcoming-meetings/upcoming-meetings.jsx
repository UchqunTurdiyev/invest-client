'use client';
import { upcomingMeetings } from '@/config/constants';
import { Box, Button, Flex, Grid, HStack, Heading, Image, Text, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';

export default function UpcomingMeeting() {
	const colorMode = useColorModeValue('gray.700', 'gray.400');
	const boxMude = useColorModeValue('white', 'gray.700');
	const btnMude = useColorModeValue('red.300', 'red.800');
	const elCardMud = useColorModeValue('white', 'gray.700');

	return (
		<Box w={'full'} py={12} px={{ base: 2, lg: 20 }}>
			{upcomingMeetings.map(el => (
				<div key={el.id}>
					<Heading pt={0} textAlign={'center'}>
						UPCOMING MEETINGS
					</Heading>
					<Box w={'100%'} h={'1.5px'} my={5} mx={'auto'} bg={colorMode}></Box>
					<Flex w={'full'} my={10} gap={5} flexDirection={{ base: 'column', lg: 'row' }}>
						<Box w={{ base: '100%', lg: '500px' }} h={'480px'} p={8} bg={boxMude} borderRadius={'xl'}>
							<Heading mb={4}>{el.title}</Heading>
							<Box w={'100%'} h={'1.5px'} mb={5} mx={'auto'} bg={colorMode}></Box>
							{el.upcoming.map(up => (
								<Text py={2} fontSize={'lg'} cursor={'pointer'} key={up.id}>
									{up.up}
								</Text>
							))}
							<Box w={'100%'} h={'1.5px'} mt={5} mx={'auto'} bg={colorMode}></Box>
							<Button mt={4} bg={btnMude}>
								All UPCOMING MEETINGS
							</Button>
						</Box>
						<Flex w={'full'} h={'auto'} gap={2} flexWrap={'wrap'}>
							{el.cards.map(card => (
								<Box w={{ base: '100%', md: '48%' }} pb={4} borderRadius={'2xl'} bg={elCardMud} key={card.id}>
									<Link href={`/meetings/${card.slug}`}>
										<Image
											w={'full'}
											h={{ base: '80%', lg: '70%' }}
											borderTopRadius={'2xl'}
											objectFit={'cover'}
											src={card.image}
											alt='card'
										/>
									</Link>
									<Flex alignItems={'center'} justifyContent={'center'} py={2}>
										<Box w={{ base: 14, md: 20 }} h={'100%'} display={'flex'} alignItems={'center'} flexDirection={'column'}>
											<Text fontSize={'xl'} color={'red.600'}>
												nov
											</Text>
											<Heading fontSize={{ md: '2xl', lg: 'lg', xl: '3xl' }}>{card.data}</Heading>
										</Box>
										<Box>
											<Heading fontSize={{ md: '2xl', lg: 'lg', xl: '2xl' }} py={{ lg: 2, xl: 4 }}>
												{card.title}
											</Heading>
											<Text>{card.description.slice(0, 60)}..</Text>
										</Box>
									</Flex>
								</Box>
							))}
						</Flex>
					</Flex>
				</div>
			))}
		</Box>
	);
}
