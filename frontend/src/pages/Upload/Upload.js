import { useState } from 'react';
import * as adminService from "~/services/adminService";

function Upload() {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleImport = async () => {
        if (file) {
            const formData = new FormData();
            formData.append('file', file);

            try {
                const response = await adminService.importMovie(formData);
                // setMessage(response.data);
                console.log(response);
            } catch (error) {
                setMessage('Failed to import CSV: ' + error.message);
            }
        }
    };

    return (
        <div>
            <input type="file" accept=".csv" onChange={handleFileChange} />
            <button onClick={handleImport}>Import</button>
            <p>{message}</p>
        </div>
    );
}

export default Upload;
