import {useState} from 'react';

export default function Collapsible({title, children}) {
    const [open, setOpen] = useState(false);

    function toggle() {
        setOpen(!open);
    }

    return (
        <div className="collapsible">
            <button onClick={toggle}>{title}</button>
            <div className={`collapsible-content ${open ? 'open' : 'closed'}`}>
                {children}
            </div>
        </div>
    )
}