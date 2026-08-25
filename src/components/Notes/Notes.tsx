import { BaseCard } from "../BaseCard";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { BasePopUp } from "../BasePopUp";
import { useLocalStorage} from '../useLocalStorage';


interface NotesCard {
	noteLabel:string,
	noteLink:string,
	id:string,
};

export const Notes = () => {
	const [display, setDisplay] =useState(false);
	const [notes,setNotes] =useState<NotesCard[]>([]);
	const [value,setValue] = useState("");
	const [url,setUrl]=useState("");
	const { saveToLocalStorage, loadFromLocalStorage} = useLocalStorage('notes');
	const toggleNotesPopUp = () => {
		setDisplay(!display);
	};

	const uploadNotes = () =>{
		if(value == "" ){
			alert("Title field empty, please fill it in!");
		}
		if (url == ""){
			alert("URL field empty, please fill it in!");
		}
		else{
			const notesBox = [...notes];
			notesBox.push({
				id: uuidv4(),
				noteLabel: value,
				noteLink: url,
			});
			setNotes(notesBox);
			setValue('');
			setUrl('');
			saveToLocalStorage(notesBox);
			toggleNotesPopUp();
		}
	};


	const checkNotes = (id: NotesCard['id']) =>{
		if (confirm('Are you sure you want to delete this? ( press OK if yes )')){
			const newNotes = notes.filter(note => note.id !== id);
			setNotes(newNotes);
			saveToLocalStorage(newNotes);
		}
	
	};

	useEffect(()=>{
		const main = () => {
			const loadedData = loadFromLocalStorage<NotesCard>();
			setNotes(loadedData);
		};
		main();
	}, []); // eslint-disable-line

	const notesBtnStyle : React.CSSProperties ={
		cursor:'pointer',
		fontSize: '15px',
		width: '350px',
		height: '40px',
		borderRadius: '10px',
		border: '1.5px solid #6d7b8e',
		backgroundColor:'#6d7b8e' ,
		color: 'white',
	};
	const divBtnStyle: React.CSSProperties ={
		display:'flex',
		justifyContent:"center",
		alignItems:'center',
		width:'400px',
		height:'40px',
	};
	const individualNotesStyle:React.CSSProperties={
		display: 'flex',
		overflowWrap:'anywhere',
		alignItems: 'center',
		margin: '10px 0 0 20px',
		padding: '5px 5px 5px 5px',
		maxWidth: '350px',
		height: '40px',
		backgroundColor: '#f6faff',
		borderRadius: '10px',
	};
	const notesTitleContainerStyle:React.CSSProperties ={
		width:'200px'
	};

	const notesTitleStyle:React.CSSProperties={
		overflow:'hidden',
		textOverflow:'ellipsis',
		whiteSpace:'nowrap',
		padding: '10px 0 10px 10px',
		display:'block',
		color: '#68778d',
		fontWeight: 'bolder',
	};

	const deleteIconStyle:React.CSSProperties ={
		background:'none',
		marginLeft:'auto',
		position:'sticky',
		border:'none',
		cursor:'pointer',
	};

	const notesLinkBtnStyle:React.CSSProperties={
		cursor:'pointer',
		textWrap:'nowrap',
		width:'100px',
		height:'30px',
		fontSize:'13px',
		margin:'0 0 0 10px',
		backgroundColor:'#93a9c9',
		fontWeight:'bolder',
		borderRadius:'20px',
		border:'none',
	};

	const linkTextStyle:React.CSSProperties={
		color:'white',
		fontWeight:'bold',
		fontSize:'15px',
	};

	const urlStyle:React.CSSProperties={
		border: '1.5px solid #77879E',
		color:'#77879E',
		width: '150px',
    	height: '30px',
		margin: '0px 0 0 10px',
		borderRadius:'10px',
	};
	return(
		<BaseCard
			label="My Notes"
			iconLabel="Notes icon"
			iconUrl="icons/book-icon.png"
			height='626px'
			width='400px'
			gridArea="box-4"
		>
			<div style={divBtnStyle} onClick={toggleNotesPopUp}>
				<button style={notesBtnStyle}>Add Notes</button>
			</div>
			<div className="notesBoxStyle">
				{notes.map((note)=>{
					return(
						<div style={individualNotesStyle}>
							<div style={notesTitleContainerStyle}>
								<p style={notesTitleStyle}>{note.noteLabel}</p>
							</div>
							<button style={notesLinkBtnStyle}>
								<a href={note.noteLink} style={linkTextStyle}>Link</a>
							</button>
							<button style={deleteIconStyle} onClick={() => checkNotes(note.id)}>
								<img src="icons/trash-icon.png" alt="check"/>
							</button>
						</div>
					);
				})}
			</div>
			{display &&
				<BasePopUp
					popUpTitle="Upload Notes"
					onClose={toggleNotesPopUp}
					onAdd={uploadNotes}
					buttonLabel="Upload"
				>
					<input type="text" placeholder="Title of your notes.." value={value} onChange={(e) => setValue(e.target.value)}/>
					<input type="url" placeholder="URL.." value={url} onChange={(e) => setUrl(e.target.value)} style={urlStyle}/>
				</BasePopUp>
			}
		</BaseCard>   
	);
};