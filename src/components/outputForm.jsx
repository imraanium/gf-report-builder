import React from "react";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";

const initialValue = [
  {
    type: "paragraph",
    children: [{ text: "A line of text in a paragraph." }],
  },
];

const OutputForm = () => {
  const [editor] = useState(() => withReact(createEditor()));

  return (
    <Form id="output-form">
      <Form.Group className="mb-3 h-100" controlId="todayLesson">
        <Form.Label>Report</Form.Label>
        {/* <Form.Control className="output-form__textarea" as="textarea" /> */}
        <Slate editor={editor} initialValue={initialValue}>
          <Editable />
        </Slate>
      </Form.Group>
    </Form>
  );
};

export default OutputForm;
