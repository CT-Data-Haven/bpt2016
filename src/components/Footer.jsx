import React from 'react';
import { Segment, Image } from 'semantic-ui-react';

import src from '../img/25th-logotype.jpg';

const text = 'Source: DataHaven analysis (2017) of US Census Bureau American Community Survey 2016 5-year estimates.';

const Footer = () => (
	<div className="Footer">

		<Segment secondary basic>
			<p>{text}</p>
			<p><a href="https://github.com/ct-data-haven/bpt2016/blob/master/public/data/2016_bpt_display.csv">Download all Bridgeport 2016 profile data</a></p>
			<Image src={src} size="small" as="a" href="http://www.ctdatahaven.org" target="_blank" />
		</Segment>

	</div>
);

export default Footer;
