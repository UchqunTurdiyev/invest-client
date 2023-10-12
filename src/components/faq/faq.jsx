'use client';
import { faq } from '@/config/constants';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Heading, Image } from '@chakra-ui/react';
import React from 'react';
import FaqContact from './faq-contact';

export default function Faq() {
	return (
		<Box px={{ base: 2, lg: 20 }} py={10}>
			<Heading borderBottom={'2px'} borderColor='gray.600' py={4}>
				LET'S GET IN TOUCH
			</Heading>
			<Accordion allowToggle defaultIndex={[0]} w={'full'} my={6} p={6} bg={'white'} textColor={'gray.700'} rounded={'3xl'}>
				{faq.map((item, id) => (
					<div key={id}>
						<AccordionItem>
							<h2>
								<AccordionButton>
									<Box as='span' flex='1' textAlign='left' fontSize={'2xl'} fontWeight={'bold'} color={id == 0 ? 'red' : '#333'}>
										{item.title}
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</h2>
							<AccordionPanel pb={4}>{item.description}</AccordionPanel>
						</AccordionItem>
					</div>
				))}
			</Accordion>
			<Box py={8}>{/* <FaqContact /> */}</Box>
		</Box>
	);
}
