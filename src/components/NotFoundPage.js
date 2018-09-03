import React from 'react';
import {Link} from 'react-router-dom';

//a tag used instead of <Link> causes full page refresh when navigated
const NotFoundPage = () => (
	<div>
	404! - <Link to="/"></Link>
</div>
);

export default NotFoundPage;