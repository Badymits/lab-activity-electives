import React, {useState} from "react";

const Contact = () => {

    // states for form handling
    const [subject, setSubject] = useState()
    const [body, setBody] = useState()

    // simple alert func to notify user that email was sent
    const handleSubmit = (e) => {
        e.preventDefault();

        alert('email sent')
    }

    return (
        <div className="bg-gray-500 text-white p-3 rounded-md shadow-2xl">
            <h1 className="text-4xl">Contact</h1>
            <h1 className="text-2xl py-4">You may contact me through my email: elijah.cajucom@ciit.edu.ph</h1>

            <form action="" className="flex flex-col items-start justify-center w-full h-full" onSubmit={handleSubmit}>
                <p>OR you may enter your concerns though this form which will be directly sent to my email</p>
                <div className="text-left py-4">
                    <label htmlFor="" className="block">Subject</label>
                    <input type="text" name="subject" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Subject" className="border border-black w-[30em] text-black" />
                </div>
                <div className="text-left py-4">
                    <label htmlFor="" className="block">Subject</label>
                    <textarea name="body" placeholder="Enter Content" className="border border-block resize-none text-black" id="" cols="62" rows="10" value={body} onChange={(e) => setBody(e.target.value)} ></textarea>
                </div>

                <button className="block bg-green-500 hover:bg-green-300 w-[30em] p-3 px-6 rounded-lg uppercase text-white">Submit</button>
            </form>
        </div>
    )
} 

export default Contact;