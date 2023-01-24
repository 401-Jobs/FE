import React, { useContext } from "react";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../../context/auth";
import { JoobSeekerContext } from "../../../context/joobseeker";

const MediaForm = (props) => {
  const { userMedia, updateJobseekerMedia, jobseekerData } =
    useContext(JoobSeekerContext);
  const { token } = useContext(AuthContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(e.target.video.files[0]);
    console.log(e.target.image.files[0]);
    try {
      const data = new FormData();
      data.append("video", e.target.video.files[0]);
      data.append("image", e.target.image.files[0]);
      let info = {
        video: e.target.video.files[0],
        image: e.target.image.files[0],
      };
      await updateJobseekerMedia(data, token);
    } catch {
      console.log("error");
    }
    props.onHide();
  };

  const GetAllData = async () => {
    await jobseekerData(token);
  };

  useEffect(() => {
    GetAllData();
  }, [userMedia]);

  return (
    <Form onSubmit={submitHandler}>
      <div className="media_div">
        <div className="name_div">
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Upload Profile Picture</Form.Label>
            <Form.Control type="file" name="image" />
          </Form.Group>
        </div>
        <div className="name_div">
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Upload Pitch Vedio</Form.Label>
            <Form.Control type="file" name="video" />
          </Form.Group>
        </div>
      </div>
      <Button variant="primary" type="submit">
        ADD
      </Button>
    </Form>
  );
};

export default MediaForm;
