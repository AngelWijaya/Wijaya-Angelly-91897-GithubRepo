
interface navBarProps {
    logoURL:string,
	logoLabel:string,
    children: React.ReactNode,
}

export const GeneralNavigationBar = (props: navBarProps) => {
	const logoStyle:React.CSSProperties ={
		width:'100px',
		height:'50px',
		padding: '10px 10px 0 20px'
	};
	const navigationBarStyle:React.CSSProperties={
		zIndex:'9999',
		position:'fixed',
		display:'inline-flex',
		width:'100%',
		height:'70px',
		backgroundColor:'white',
		boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
		
	};

	return (
		<div style={navigationBarStyle}>
			<div>
				<img src={props.logoURL} alt={props.logoLabel} style={logoStyle}/>
			</div>
			{props.children}
		</div>
	);
};