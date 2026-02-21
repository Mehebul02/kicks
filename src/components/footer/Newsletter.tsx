import { footerLogo1 } from "@/src/assets/images";
import Image from "next/image";
interface NewsletterProps {
    email: string;
    setEmail: (email: string) => void;
    handleSubmit: (e: React.FormEvent) => void;
}
const Newsletter = ({ email, setEmail, handleSubmit }: NewsletterProps) => {
    return (
        <div>
             <div className="mx-4 md:mx-8  rounded-2xl  text-primary-foreground p-4 md:p-12 mt-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="flex-1 w-full">
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-4">
              JOIN OUR KICKSPLUS<br />
              CLUB & GET 15% OFF
            </h2>
            <p className="text-white text-sm md:text-base lg:text-[20px] font-semibold opacity-90 mb-6 font-sans">
            Sign up for free! Join the community.
            </p>
            
            <form onSubmit={handleSubmit} className="flex gap-2 w-[320px] lg:w-[510px]">
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground text-foreground placeholder:text-white border border-white outline-none focus:ring-2 focus:ring-accent"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-secondary text-white font-black rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
              >
                SUBMIT
              </button>
            </form>
          </div>

          <div className=" lg:flex items-center justify-center">
            <div className="relative">
              <Image src={footerLogo1} alt='footerLogo1' width={300} height={300} />
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Newsletter;