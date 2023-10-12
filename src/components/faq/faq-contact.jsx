'use client';
import { faqContact } from '@/config/constants';
import {
	Box,
	Button,
	Divider,
	Flex,
	FormControl,
	Heading,
	Input,
	Text,
	Textarea,
	background,
	useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';

export default function FaqContact() {
	return (
		<Box>
			<Heading borderBottom={'2px'} borderColor='gray.600' py={4}>
				SEND MESSAGE
			</Heading>
			<Flex gap={6} flexDirection={{ base: 'column', md: 'row' }}>
				<FormControl
					w={'full'}
					bg={useColorModeValue('gray.600', 'whiteAlpha.200')}
					color={'white'}
					rounded={'xl'}
					p={{ base: 2, md: 6 }}
					my={6}
				>
					<Flex my={6} gap={2}>
						<Input type='text' placeholder='Your Name' bg={'whiteAlpha.200'} _hover={{ background: 'facebook.500' }} />
						<Input type='email' placeholder='Your Email' bg={'whiteAlpha.200'} _hover={{ background: 'facebook.500' }} />
					</Flex>
					<Textarea
						placeholder='Message'
						borderRadius={'md'}
						h={'200px'}
						p={2}
						bg={'whiteAlpha.200'}
						size='xl'
						_hover={{ background: 'facebook.500' }}
					></Textarea>
					<Button bg={'whiteAlpha.200'} variant={'outline'} mt={4} _hover={{ background: 'facebook.500' }}>
						SEND MESSAGE NOW
					</Button>
				</FormControl>
				<Box w={{ base: '100%', md: '40%' }} py={6} px={4} bg={'red.600'} my={6} borderRadius={'xl'}>
					{faqContact.map(el => (
						<Box color={'white'} py={4} key={el.id}>
							<Text>{el.title}</Text>
							<Heading fontSize={'lg'} py={3}>
								{el.description}
							</Heading>
							<Divider />
						</Box>
					))}
				</Box>
			</Flex>
		</Box>
	);
}
