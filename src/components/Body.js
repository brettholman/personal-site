import React from 'react';

function Body() {
    return (
		<main role="main" style={{backgroundColor: "gray", display: "flex"}}>
			<div className="container text-center col-10 offset-1" style={{backgroundColor: "black", display: "flex"}}>
				<h1 className="mt-5">Hello World</h1>
			</div>
		</main>
	)
}

export default Body;
