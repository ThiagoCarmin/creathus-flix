import React from "react";
import Dropzone, { FileRejection, DropEvent } from "react-dropzone";
import RenderIf from "../RenderIf";

type DropzoneElType = {
  onDrop: <T extends File>(
    acceptedFiles: T[],
    fileRejections: FileRejection[],
    event: DropEvent
  ) => void;
  image?: string | null;
};

type DragMessageType = {
  isDragReject: boolean;
  isDragActive: boolean;
};

const DragMessage = ({ isDragReject, isDragActive }: DragMessageType) => {
  let message = "Click ou arraste o arquivo aqui...";
  let color = "text-gray-500 dark:text-white";

  if (isDragReject) {
    message = "Arquivo não Suportado";
    color = "text-red-600 dark:text-red-900";
  } else if (isDragActive) {
    message = "Solte aqui ...";
    color = "text-green-600  dark:text-green-900";
  }

  return (
    <>
      <p className={`mb-2 text-sm font-bold ${color}`}>{message}</p>
      <RenderIf isTrue={!isDragReject && !isDragActive}>
        <p className="text-xs text-gray-500 dark:text-white">
          PNG, JPG ou JPEG (MAX. 2MB/image)
        </p>
      </RenderIf>
    </>
  );
};

const UploadImage = ({ onDrop, image }: DropzoneElType) => {
  const accept = {
    "image/jpeg": [],
    "image/png": [],
    "image/jpg": [],
  };

  return (
    <Dropzone onDrop={onDrop} accept={accept} multiple={false}>
      {({ getRootProps, getInputProps, isDragReject, isDragActive }) => (
        <div>
          <div {...getRootProps()}>
            <div className="imgFile ">
              <RenderIf isTrue={!image}>
                <div className="msgFlex">
                  <DragMessage
                    isDragReject={isDragReject}
                    isDragActive={isDragActive}
                  />
                </div>
              </RenderIf>
              <input
                name="file"
                data-testid="dropzone"
                className="hidden"
                {...getInputProps()}
              />
              <RenderIf isTrue={!!image}>
                <img
                  src={image ?? ""}
                  alt="upload-image"
                  className="w-full h-full absolute object-cover object-center"
                />
              </RenderIf>
            </div>
          </div>
        </div>
      )}
    </Dropzone>
  );
};

export default UploadImage;
