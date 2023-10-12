'use client';
import { Box, Center, Divider, Text } from '@chakra-ui/react';
import React from 'react';

export default function Footer() {
	return (
		<Box py={4} mt={6}>
			<Divider />
			<Center py={8} display={'flex'} flexDirection={'column'} gap={2}>
				<Text textAlign={'center'}>COPYRIGHT © {new Date().getFullYear()} EDU MEETING CO., LTD. ALL RIGHTS RESERVED.</Text>
				<Text>
					DESIGN:{' '}
					<Box as='span' color={'coral'}>
						TEMPLATEMO
					</Box>
				</Text>
				<Text>
					DISTIBUTED BY:{' '}
					<Box as='span' color={'coral'}>
						THEMEWAGON
					</Box>{' '}
				</Text>
			</Center>
		</Box>
	);
}
