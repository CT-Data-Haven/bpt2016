import React from 'react';
import { Segment } from 'semantic-ui-react';

const text = 'Source: DataHaven analysis (2017) of US Census Bureau American Community Survey 2016 5-year estimates.';

const Footer = () => (
	<Segment secondary basic>
		<p>{text}</p>
		<p><a href="https://github.com/ct-data-haven/bpt2016/blob/master/public/data/2016_bpt_display.csv">Download all Bridgeport 2016 profile data</a></p>
	</Segment>
);

export default Footer;
