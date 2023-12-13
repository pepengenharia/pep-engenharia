import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Carousel from "./carousel";
import Image from "next/image";

export default function Splide(){
    return(
        <Carousel>
            <center>
                <div className="max-2xl:flex-col max-2xl:justify-center flex">
                    <div>
                        <Image src={"/images/bg/bg-home.jpg"} width={800} height={0} alt=""></Image>
                    </div>
                    <div className="flex flex-col items-center text-white w-2/5 px-5 max-2xl:w-full max-2xl:my-5 max-2xl:px-20">
                        <h2 className="text-2xl font-bold">Lorem Ipsum</h2>
                        <br />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fringilla tellus ut pretium imperdiet. Morbi at nulla quam. Pellentesque eget enim sit amet dui dignissim mattis. Aenean in est ut turpis ornare scelerisque. Aliquam erat volutpat. Morbi et augue pharetra, finibus arcu vel, vestibulum lorem. Nulla venenatis odio nec quam varius, vestibulum hendrerit augue malesuada. Suspendisse accumsan ex vel velit pulvinar aliquam ut non elit. Ut aliquet rhoncus commodo.</p>
                    </div>
                </div>
            </center>
            <center>
                <div className="max-2xl:flex-col max-2xl:justify-center flex">
                    <div>
                        <Image src={"/images/bg/bg-home.jpg"} width={800} height={0} alt=""></Image>
                    </div>
                    <div className="flex flex-col items-center text-white w-2/5 px-5 max-2xl:w-full max-2xl:my-5 max-2xl:px-20">
                        <h2 className="text-2xl font-bold">Lorem Ipsum</h2>
                        <br />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fringilla tellus ut pretium imperdiet. Morbi at nulla quam. Pellentesque eget enim sit amet dui dignissim mattis. Aenean in est ut turpis ornare scelerisque. Aliquam erat volutpat. Morbi et augue pharetra, finibus arcu vel, vestibulum lorem. Nulla venenatis odio nec quam varius, vestibulum hendrerit augue malesuada. Suspendisse accumsan ex vel velit pulvinar aliquam ut non elit. Ut aliquet rhoncus commodo.</p>
                    </div>
                </div>
            </center>
            <center>
                <div className="max-2xl:flex-col max-2xl:justify-center flex">
                    <div>
                        <Image src={"/images/bg/bg-home.jpg"} width={800} height={0} alt=""></Image>
                    </div>
                    <div className="flex flex-col items-center text-white w-2/5 px-5 max-2xl:w-full max-2xl:my-5 max-2xl:px-20">
                        <h2 className="text-2xl font-bold">Lorem Ipsum</h2>
                        <br />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fringilla tellus ut pretium imperdiet. Morbi at nulla quam. Pellentesque eget enim sit amet dui dignissim mattis. Aenean in est ut turpis ornare scelerisque. Aliquam erat volutpat. Morbi et augue pharetra, finibus arcu vel, vestibulum lorem. Nulla venenatis odio nec quam varius, vestibulum hendrerit augue malesuada. Suspendisse accumsan ex vel velit pulvinar aliquam ut non elit. Ut aliquet rhoncus commodo.</p>
                    </div>
                </div>
            </center>
        </Carousel>
    );
}