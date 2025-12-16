import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { MdMailOutline } from "react-icons/md";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email("Invalid email"),
  message: z.string().min(1, { message: "Message is required" }),
});

type formData = z.infer<typeof formSchema>;

const Contact = () => {
  const { register, handleSubmit } = useForm<formData>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
  });

  const submitHandlerForm: SubmitHandler<formData> = (e) => {
    console.log(e);
  };

  return (
    <section
      id="contact"
      className="py-12 mx-auto px-8 md:px-20 overflow-hidden flex flex-col items-center justify-center"
    >
      <div className="text-center my-15">
        <p className="text-gray-600 text-md font-medium">Get In Touch</p>
        <h3 className="py-5 text-4xl font-medium">Contact Me</h3>
      </div>
      <form
        onSubmit={handleSubmit(submitHandlerForm)}
        className="sm:w-full md:w-1/2 space-y-4"
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Your Name
          </label>
          <input
            {...register("name")}
            type="text"
            id="name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg   focus:border-transparent transition-all duration-200"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Your Email
          </label>
          <input
            {...register("email")}
            type="email"
            id="email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg   focus:border-transparent transition-all duration-200"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Your Message
          </label>
          <textarea
            {...register("message")}
            id="message"
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg   focus:border-transparent transition-all duration-200 resize-none"
            placeholder="Tell me about your project..."
          />
        </div>

        <button
          type="submit"
          className=" flex items-center justify-center gap-2 px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Send Message
        </button>
      </form>

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
