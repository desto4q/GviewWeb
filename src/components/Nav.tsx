import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

let links = [
	{
		link: "download",
		to: "download",
	},
	{
		link: "features",
		to: "features",
	},
	{
		link: "Donate",
		to: "download",
	},
	{
		link: "Hire Me",
		to: "",
	}
]
const handleSetActive = (to: any) => {
	console.log(to);
};
function Nav() {
	return (
		<nav className="w-full">
			<div className="mx-auto container md:px-4   flex-row flex  h-20 items-center">

				<div className='h-10 flex items-center gap-2'>
					<img className='h-full rounded-md' src="https://i.ibb.co/B4jFvVK/gview-logo.png" alt="" />
					<h2>Gview</h2>

				</div>
				<div className="ml-auto hidden sm:flex gap-6  flex-row">
					{links.map(({ link, to }, index) => {
						return (<Link
							onSetActive={handleSetActive}
							spy
							duration={200}
							offset={-50}
							// smooth={true}
							to={`${to}`}
							className="capitalize cursor-pointer"
							key={index}>{link}</Link>);
					})}
				</div>

				
			</div>
		</nav>
	);
}

export default Nav;
