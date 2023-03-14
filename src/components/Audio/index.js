import React, { useState } from "react";

import { Input, Row, Col, FormText, Button } from "reactstrap";

function Audio({ file, setFile }) {
  const [urlAudio, setUrlAudio] = useState();
  const [fileNameAudio, setFileNameAudio] = useState("");

  const handleClickButton = () => {
    document.getElementById("file_audio").click();
  };

  const handleChangeFile = ({ target }) => {
    let _file = target?.files[0];
    if (_file?.name) {
      let url = URL.createObjectURL(_file);
      setUrlAudio(url);
      setFileNameAudio(_file?.name);
      setFile(_file);
    } else {
      setUrlAudio();
      setFileNameAudio("");
      setFile(null);
    }
  };

  return (
    <Row className="justify-content-center align-items-center">
      <Col xl="3">
        <Button
          color="primary"
          type="button"
          outline
          onClick={handleClickButton}
        >
          Chọn tệp ghi âm
          <Input
            hidden
            id="file_audio"
            name="file"
            type="file"
            accept="audio/,.mp3,.wav"
            onChange={handleChangeFile}
          />
        </Button>
      </Col>
      <Col xl="6" className="d-flex align-items-center">
        {urlAudio ? (
          <div className="w-100">
            <audio controls className="w-100">
              <source src={urlAudio} type="audio/ogg"></source>
            </audio>
            <FormText>Tên tệp: {fileNameAudio}</FormText>
          </div>
        ) : (
          <FormText>Hãy chọn tệp ghi âm</FormText>
        )}
      </Col>
    </Row>
  );
}

export default Audio;
