import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import Form from "./Form";

const Contact = () => {
  return (
    <section
      id="contact"
      className=" mx-auto px-8 md:px-20 overflow-hidden flex flex-col items-center justify-center"
    >
      <div className="text-center my-15">
        <p className="text-gray-600 text-md font-medium">Get In Touch</p>
        <h3 className="py-5 text-4xl font-medium">Contact Me</h3>
      </div>
      <Form />

      <div>
        <p className="text-gray-600 text-md font-medium mt-10">
          You can also find me on
        </p>
        <div className="flex justify-center gap-5 my-9">
          <a
            className="p-3  rounded-full bg-[#8ba1a14d] hover:shadow-black hover:shadow-xl hover:scale-110 transition duration-300"
            href="https://wa.me/201020433005?text=if have any question or project i can help you"
            target="_blank"
          >
            <FaWhatsapp className="text-green-600" size={22} />
          </a>
          <a
            className="p-3 text-blue-600 rounded-full bg-[#8ba1a14d] hover:shadow-black hover:shadow-xl hover:scale-110 transition duration-300"
            href="https://www.linkedin.com/in/ahmed-eliewa-88b569387/"
            target="_blank"
          >
            <FaLinkedinIn size={22} />
          </a>
          <a
            className="p-3 hover:text-red-600 rounded-full bg-[#8ba1a14d] hover:shadow-black hover:shadow-xl hover:scale-110 transition duration-300"
            href="https://www.instagram.com/ahmed_3liewa16/"
            target="_blank"
          >
            <GrInstagram size={22} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
