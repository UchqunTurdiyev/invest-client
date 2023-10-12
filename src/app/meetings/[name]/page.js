'use client';
import { useParams } from 'next/navigation';
import React from 'react';

export default function MeetingDetailPage() {
	const params = useParams();
	console.log(params);
	return <div>MeetingDetailPage : {params.name}</div>;
}
