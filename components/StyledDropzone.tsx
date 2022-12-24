import React, { FC, useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

interface ColorProps {
  isDragAccept?: boolean;
  isDragReject?: boolean;
  isDragActive?: boolean;
}

const getColor = (props: ColorProps) => {
  if (props.isDragAccept) {
    return "#00e676";
  }
  if (props.isDragReject) {
    return "#ff1744";
  }
  if (props.isDragActive) {
    return "#2196f3";
  }
  return "#eeeeee";
};

const thumbsContainer: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 36,
  alignItems: "center",
  justifyContent: "center",
};

const thumb: React.CSSProperties = {
  display: "inline-flex",
  borderRadius: 2,
  border: "2px solid #eaeaea",
  borderStyle: "dashed",
  marginBottom: 8,
  marginRight: 8,
  width: "100%",
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner: React.CSSProperties = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img: React.CSSProperties = {
  display: "block",
  width: "auto",
};

interface Props {
  onImageChange: (files: any) => void;
}

const StyledDropzone: FC<Props> = ({ onImageChange }) => {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles: any) => {
    setFiles(
      acceptedFiles.map((file: any) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  }, []);

  useEffect(() => {
    if (files.length > 0) {
      onImageChange(files[0]);
    }
  }, [files]);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    maxFiles: 1,
    // accept: "image/jpeg, image/png,",
    onDrop,
  });

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL((file as any).preview));
    },
    [files]
  );

  const thumbs = files.map((file: any) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img alt="preview" src={file.preview} style={img} />
      </div>
    </div>
  ));

  return (
    <>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 20,
          marginTop: 24,
          borderWidth: 2,
          borderRadius: 2,
          borderColor: getColor({ isDragActive, isDragAccept, isDragReject }),
          borderStyle: "dashed",
          backgroundColor: "transparent",
          color: "#bdbdbd",
          outline: "none",
          transition: "border .24s ease-in-out",
        }}
        {...getRootProps({ isDragActive, isDragAccept, isDragReject })}
      >
        <p style={{ color: "white", textAlign: "center" }}>
          Drag and drop single "jpg" or "png" here, or click to select an image
        </p>
      </div>
      {files.length > 0 && <aside style={thumbsContainer}>{thumbs}</aside>}
    </>
  );
};

export default StyledDropzone;
