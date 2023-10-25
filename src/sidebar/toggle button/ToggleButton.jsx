import { AiOutlineMenu } from 'react-icons/ai';

const ToggleButton = ({setOpen}) => {
return (
    <button onClick={() => setOpen((prev) =>!prev )}>
        <AiOutlineMenu/>
    </button>
)
}

export default ToggleButton