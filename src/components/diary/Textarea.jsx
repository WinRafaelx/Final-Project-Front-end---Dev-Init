import React, { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

const Textarea = ({diaryMessage}) => {

  return (
    <>
    <TextareaAutosize
        id="message"
        minRows={10}
        maxRows={30}
        ref={diaryMessage}
        className="block p-2.5 w-full text-xl text-black bg-slate-100 rounded-lg border border-gray-300"
        placeholder="Your message..."
        required
      />
    </>
  );
};

export default Textarea;
