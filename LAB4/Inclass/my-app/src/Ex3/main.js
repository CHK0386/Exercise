import * as React from "react";

function Ex3() {
	const [Mycomponents, setMycomponents] = React.useState(() => () => null);
React.useEffect(() => {
	import("./Mycomponents").then((module) => {
		setMycomponents(() => module.default);
	});
}, []);

return <Mycomponents/>;
}
export default Ex3;