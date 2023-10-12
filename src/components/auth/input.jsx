'use client';
import { FormErrorMessage, Input, Text, filter } from '@chakra-ui/react';
import { ErrorMessage, useField } from 'formik';

export default function TextInput({ ...props }) {
	const [field, meta, helpers] = useField(props);

	return (
		<>
			<label className={`${meta.touched && meta.error && 'border-red-500 border rounded-md'}`}>
				<Input {...props} {...field} />
			</label>
			<Text my={0} py={0} as={'i'} fontSize={'md'} color={'red.500'}>
				<ErrorMessage name={field.name} />
			</Text>
		</>
	);
}
