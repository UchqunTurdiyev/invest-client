'use client';
import { Box, Button, Flex, Heading, Image, Input, Text, useToast } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import TextInput from './input';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

export default function SignIn() {
	const toast = useToast();
	const router = useRouter();

	const onSubmit = formData => {
		console.log(formData);
	};

	const validation = Yup.object({
		email: Yup.string().email('Enter valid email').required('Email is required'),
		password: Yup.string().min(4, '4 minimum character').required('Password is required'),
	});

	return (
		<Box w={'full'} h={'75vh'} bg={'gray.700'} px={20} py={10}>
			<Heading textAlign='center'>Login</Heading>
			<Flex flexDirection={{ md: 'row', sm: 'column' }} gap={6} w={'full'} h={'full'} mt={10} justifyContent={'space-between'}>
				<Box w={'70%'}>
					<Image
						w={'full'}
						objectFit={'cover'}
						src='https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg'
						alt='Sign Up'
					/>
				</Box>
				<Box w={'full'}>
					<Formik initialValues={{ email: '', password: '' }} onSubmit={onSubmit} validationSchema={validation}>
						<Form>
							<Flex flexDirection={'column'} gap={2}>
								<TextInput type='email' name='email' placeholder='Email' />
								<TextInput type='password' name='password' placeholder='Password' />
								<Button type='submit' colorScheme='facebook' variant={'outline'}>
									Sign In
								</Button>
								<Text display={'flex'}>
									Don't have an account?{' '}
									<Link href={'/signup'} style={{ color: '#1A73E8', marginLeft: '4px' }}>
										Register
									</Link>
								</Text>
							</Flex>
						</Form>
					</Formik>
				</Box>
			</Flex>
		</Box>
	);
}
