import React from 'react';

function CreateNote() {
  const handle_note = (e) => {
    e.preventDefault();
  };
  return (
    <section className='px-12 py-5'>
      <form className='flex flex-col gap-2 mt-5'>
        <label className='font-main font-semibold text-lg'>
          Start Writing your Note
        </label>
        <input
          type='text'
          placeholder='Enter note title'
          className='border rounded-[6px] px-5 h-[50px] outline-none font-secondary text-base'
        />

        <textarea
          type='text'
          placeholder='Enter note description'
          className='border p-5 rounded-[6px] resize-none min-h-[350px] outline-none font-secondary text-base'
        />
        <input
          type='text'
          placeholder='Enter note tags'
          className='border rounded-[6px] px-5 h-[50px] outline-none font-secondary text-base'
        />
        <div className='flex gap-2 mt-2'>
          <button className='font-secondary text-base bg-[#005CE6] px-6 py-2 rounded-full text-white'>
            save as draft
          </button>
          <button className='font-secondary text-base bg-[#005CE6] px-6 py-2 rounded-full text-white'>
            publish note
          </button>
        </div>
      </form>
    </section>
  );
}

export default CreateNote;
