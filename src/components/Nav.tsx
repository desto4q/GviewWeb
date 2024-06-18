import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import { Squash as Hamburger } from 'hamburger-react'
import { useEffect, useState } from 'react';
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
	let [hamstate, SetHamState] = useState<boolean>(true)
	useEffect(() => {
		console.log(hamstate)
	}, [hamstate])
	return (
		<nav className="w-full">
			<div className="mx-auto px-4  container    flex-row flex  h-20 items-center">

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

				<div className='ml-auto  sm:hidden '>
					<Hamburger toggled={hamstate} toggle={SetHamState} />
				</div>
			</div>
			<div className={`duration-200 fixed h-full w-full bg-neutral-800 z-10 top-0 px-4 ${!hamstate ? "-translate-y-full" : ""
				}  `}>
				<div className='h-20 w-full ease-in  flex  items-center justify-end ' >
					<Hamburger toggle={SetHamState} toggled={hamstate} />
				</div>
				<div className='flex flex-col gap-4 items-end mt-6'>
					{links.map(({ link, to }, index) => {
						return (<Link
							onSetActive={handleSetActive}
							spy
							onClick={() => {
								SetHamState(false)
							}}
							duration={200}
							offset={-50}
							// smooth={true}
							to={`${to}`}
							className="capitalize cursor-pointer text-xl"
							key={index}>{link}</Link>);
					})}
				</div>
			</div>
		</nav>
	);
}

export default Nav;
