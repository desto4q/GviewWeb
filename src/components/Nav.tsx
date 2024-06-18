

let links = [
	{
		link: "download",
		to: "",
	},
	{
		link: "features",
		to: "features",
	},
	{
		link: "Donate",
		to: "",
	},
	{
		link: "Hire Me",
		to: "",
	}
]

function Nav() {
	return (
		<nav className="w-full">
			<div className="mx-auto container md:px-4   flex-row flex  h-20 items-center">
				<div>
					logo
				</div>
				<div className="ml-auto gap-6 flex flex-row">
					{links.map(({ link, to }, index) => {
						return (<a href={`#${to}`} className="capitalize" key={index}>{link}</a>);
					})}
				</div>
			</div>
		</nav>
	);
}

export default Nav;
