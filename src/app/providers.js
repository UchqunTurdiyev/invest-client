'use client';
import i18n from '@/i18n';
import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { Client, HydrationProvider } from 'react-hydration-provider';
import { I18nextProvider } from 'react-i18next';

export default function Providers({ children }) {
	return (
		<HydrationProvider>
			<I18nextProvider i18n={i18n}>
				<ChakraProvider>
					<Client>{children}</Client>
				</ChakraProvider>
			</I18nextProvider>
		</HydrationProvider>
	);
}
