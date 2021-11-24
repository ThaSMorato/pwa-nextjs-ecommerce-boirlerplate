import {AppLayout} from 'components/Layout/AppLayout';
import {CustomerAddressSeo} from 'pages/customer/address/_seo.config';
import React, {ReactElement} from 'react';

const CustomerAddressPage = () => {
	return (
		<>
			<h1>Hello world!</h1>
			<p>Welcome to the customer address page!</p>
			<CustomerAddressSeo />
		</>
	);
};

CustomerAddressPage.getLayout = (page: ReactElement) => {
	return <AppLayout>{page}</AppLayout>;
};

export default CustomerAddressPage;
