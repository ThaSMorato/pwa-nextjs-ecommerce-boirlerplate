import {ReactElement} from 'react';
import {DefaultLayout} from 'components/Layout/Default/Layout';
import Link from 'next/link';
import React from 'react';
import {PagesList} from 'components/PagesList/PagesList';
import {NextSeo} from 'next-seo';
import {LanguageSelector} from 'i18n/LanguageSelector.component';

const Page = () => {
	return (
		<>
			<h1>Hello world!</h1>
			<Link href="/about">About Page</Link>
			<LanguageSelector />
			<hr />
			<PagesList />
			<NextSeo
				title="BrandAlley"
				description="This example uses more of the available config options."
				openGraph={{
					url: 'https://www.url.ie/a',
					title: 'Open Graph Title',
					description: 'Open Graph Description',
					images: [
						{
							url: 'https://www.example.ie/og-image-01.jpg',
							width: 800,
							height: 600,
							alt: 'Og Image Alt',
							type: 'image/jpeg',
						},
						{
							url: 'https://www.example.ie/og-image-02.jpg',
							width: 900,
							height: 800,
							alt: 'Og Image Alt Second',
							type: 'image/jpeg',
						},
						{url: 'https://www.example.ie/og-image-03.jpg'},
						{url: 'https://www.example.ie/og-image-04.jpg'},
					],
					site_name: 'SiteName',
				}}
				twitter={{
					handle: '@handle',
					site: '@site',
					cardType: 'summary_large_image',
				}}
			/>
		</>
	);
};

Page.getLayout = (page: ReactElement) => {
	return <DefaultLayout>{page}</DefaultLayout>;
};

export default Page;
