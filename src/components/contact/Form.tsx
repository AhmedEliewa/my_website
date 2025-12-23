import { useForm, type SubmitHandler } from "react-hook-form";
import { formSchema } from "./formSchema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "./Input";
// email js
import emailjs from "@emailjs/browser";
import { useState } from "react";

type formData = z.infer<typeof formSchema>;

const Form = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    reset,
  } = useForm<formData>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
  });

  const submitHandlerForm: SubmitHandler<formData> = async (data) => {
    setLoading(true);
    emailjs
      .send(
        "service_xj3lkwj",
        "template_dv4vteh",
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        "CnOYlpXiQxkSA1EXl"
      )
      .then(() => {
        alert("Message sent successfully!");
      })
      .catch((error) => {
        alert(
          `Failed to send the message, please try again later.  
            ${error as string} `
        );
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
    reset();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(submitHandlerForm)}
        className="sm:w-full md:w-1/2 space-y-4"
      >
        {/*  Name Input */}
        <Input
          label="name"
          name="name"
          register={register}
          placeholder="Enter your name"
          error={errors.name?.message}
        />
        {/*  Email Input */}
        <Input
          label="email"
          name="email"
          register={register}
          placeholder="Enter your email"
          error={errors.email?.message}
        />

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
          {errors.message && (
            <p className="text-red-500 text-sm font-medium">
              *{errors.message.message}
            </p>
          )}
        </div>
        <button
          disabled={!isDirty || !isValid || loading}
          type="submit"
          className="cursor-pointer flex items-center justify-center gap-2 px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <span className="inline-block w-5 h-5 mr-2 border-4 border-cyan-100 border-t-transparent rounded-full animate-spin"></span>
              Loading...
            </>
          ) : (
            "Send Message"
          )}
        </button>
      </form>
    </>
  );
};

export default Form;
