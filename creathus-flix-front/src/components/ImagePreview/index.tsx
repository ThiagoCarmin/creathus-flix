import React, { useState } from 'react';
import { Image } from 'antd';

type imagePreviewType = {
  src: string,
}

const ImagePreview = ({src}:imagePreviewType) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Image
        preview={{ visible: false }}
        width={200}
        src={src}
        onClick={() => setVisible(true)}
      />
      <div style={{ display: 'none' }}>
        <Image.PreviewGroup preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }}>
          <Image src={src}/>
        </Image.PreviewGroup>
      </div>
    </>
  );
};

export default ImagePreview;