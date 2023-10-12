'use client';
import { degree } from '@/config/constants';
import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Button,
	Flex,
	Heading,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';

export default function Degree() {
	const headUse = useColorModeValue('white', 'white');
	const textUse = useColorModeValue('white', 'white');
	return (
		<>
			{degree.map((el, id) => (
				<Box key={id} w={'full'} py={28} px={{ base: 2, lg: 20 }} bg={`url(${el.image_bg})`} bgAttachment={'fixed'}>
					<Flex gap={10} flexDirection={{ base: 'column', md: 'row' }}>
						<Box w={'full'}>
							{el.degree.map((deg, idx) => (
								<Box w={'full'} mb={8} p={8} bg={'rgba(250,250,250,0.15)'} key={idx}>
									<Heading color={headUse}>{deg.title}</Heading>
									<Text color={textUse} py={4}>
										{deg.description}
									</Text>
									<Button>JOIN US NOW</Button>
								</Box>
							))}
						</Box>
						<Accordion allowToggle defaultIndex={[0]} w={'full'} p={6} bg={'white'} textColor={'gray.700'} rounded={'3xl'}>
							{el.accardion.map(data => (
								<div key={data.id}>
									<AccordionItem>
										<h2>
											<AccordionButton>
												<Box
													as='span'
													flex='1'
													textAlign='left'
													fontSize={'2xl'}
													fontWeight={'bold'}
													color={data.id == 0 ? 'red' : '#333'}
												>
													{data.title}
												</Box>
												<AccordionIcon />
											</AccordionButton>
										</h2>
										<AccordionPanel pb={4}>{data.description}</AccordionPanel>
									</AccordionItem>
								</div>
							))}
						</Accordion>
					</Flex>
				</Box>
			))}
		</>
	);
}
