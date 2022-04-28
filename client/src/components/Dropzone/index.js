import React, { useCallback, useMemo, useState } from 'react'
import { useDropzone } from 'react-dropzone'

function Dropzone({ setFile, file }) {
     const onDrop = useCallback(acceptedFiles => {
          setFile(acceptedFiles);
     }, [])
     
     const {
          getRootProps,
          getInputProps,
          isDragActive,
          isDragAccept,
          isDragReject
     } = useDropzone({
          onDrop,
          multiple: false
     });

     const style = useMemo(() => ({
          ...baseStyle,
          ...(isDragActive ? activeStyle : {}),
          ...(isDragAccept ? acceptStyle : {}),
          ...(isDragReject ? rejectStyle : {})
     }), [
          isDragActive,
          isDragReject,
          isDragAccept
     ]);

     return (
          <div {...getRootProps({ style })} >
               <input {...getInputProps()} />
               {
                    isDragActive ?
                         <p>Drop the files here ...</p> :
                         file.length !== 0?
                         <p style={{ color: 'black', fontSize: 12, position: 'absolute', top: 'auto' }}>{file[0].name}</p>
                         :
                         <p style={{ color: 'grey', fontSize: 12, position: 'absolute', top: 'auto' }}>Drop photo here to upload</p>
               }
          </div>
     )
}

const baseStyle = {
     display: 'flex',
     flexDirection: 'column',
     alignItems: 'center',
     padding: '50px',
     borderWidth: 2,
     borderRadius: 10,
     borderColor: '#eeeeee',
     borderStyle: 'dashed',
     backgroundColor: '#fafafa',
     color: '#bdbdbd',
     transition: 'border .3s ease-in-out',
};

const activeStyle = {
     borderColor: '#2196f3'
};

const acceptStyle = {
     borderColor: '#00e676'
};

const rejectStyle = {
     borderColor: '#ff1744'
};

export default Dropzone;