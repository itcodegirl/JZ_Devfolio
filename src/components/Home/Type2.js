import React from "react";
import Typewriter from "typewriter-effect";

function Type2() {
	return (
		<Typewriter
			options={{
				strings: [
					"Retail Therapy Enthusiat",
					"Master Chef (in my kitchen)",
					"Karaoke Star (in my living room), ",
					"Adventurer (mostly through Netflix documentaries)",
				],
				autoStart: true,
				loop: true,
				deleteSpeed: 50,
			}}
		/>
	);
}

export default Type2;