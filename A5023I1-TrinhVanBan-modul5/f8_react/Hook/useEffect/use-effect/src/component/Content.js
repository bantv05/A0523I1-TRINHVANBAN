import { useState } from 'react';

function Content(){
    const [title, setTitle] = useState('')
    console.log(title);
    return(
        <div>
            <input type="text"
                   value={title}
                onChange={(e) => setTitle(e.target.value) }
            />
        </div>
    );
}

export default Content;