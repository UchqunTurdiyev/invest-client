'use client';
import { Box, Button, FormControl, Flex, Heading, Image, Input, Text, Toast, position, useToast } from '@chakra-ui/react';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import * as Yup from 'yup';

export default function SignUp() {
	const [regName, setRegName] = useState('');
	const [regEmail, setRegEmail] = useState('');
	const [regPassword, setRegPassword] = useState('');
	const [error, setError] = useState('');
	const toast = useToast();
	const router = useRouter();

	const postData = () => {
		const re =
			/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
		if (!re.test(regEmail)) {
			toast({
				title: "Email manzilingizni tog'ri kiriting",
				status: 'error',
				isClosable: true,
				position: 'top-right',
			});
			return;
		}
		fetch('http://localhost:5000/signup', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name: regName,
				email: regEmail,
				password: regPassword,
			}),
		})
			.then(res => res.json())
			.then(data => {
				if (data.error) {
					setError(data.error);
				} else {
					toast({ description: data.msg, position: 'top-right', isClosable: true });
					router.push('/signin');
				}
			})
			.catch(err => console.log(err));
	};

	return (
		<Box w={'full'} h={'75vh'} bg={'gray.700'} px={20} py={10}>
			<Heading textAlign='center'>Register</Heading>
			<Flex flexDirection={{ md: 'row', sm: 'column' }} gap={6} w={'full'} h={'full'} mt={10} justifyContent={'space-between'}>
				<Box w={'full'}>
					<Image
						w={'full'}
						objectFit={'cover'}
						src='https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp'
						alt='Register'
					/>
				</Box>
				<Box w={'full'}>
					<FormControl>
						<Flex flexDirection={'column'} gap={2}>
							<Input type='text' value={regName} onChange={e => setRegName(e.target.value)} />
							<Input type='email' value={regEmail} onChange={e => setRegEmail(e.target.value)} />
							<Input type='password' value={regPassword} onChange={e => setRegPassword(e.target.value)} />
							<Text color={'red.500'}>{error}</Text>

							<Button onClick={() => postData()} type='submit' colorScheme='facebook' variant={'outline'}>
								Sign Up
							</Button>
							<Text display={'flex'}>
								I have already registered:{' '}
								<Link href={'/signin'} style={{ color: '#1A73E8', marginLeft: '4px' }}>
									Login
								</Link>
							</Text>
						</Flex>
					</FormControl>
				</Box>
			</Flex>
		</Box>
	);
}
