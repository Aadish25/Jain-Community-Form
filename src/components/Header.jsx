import logo from "../assets/logo.jpg";
export default function Header() {
  return (
    <div className="flex justify-evenly items-center">
      <div className="flex items-center sm:gap-2 justify-center w-full">
        <img src={logo} className="h-12 sm:h-20 -mt-5" />
        <div className="text-center">
          <h1 className="text-2xl sm:text-2xl md:text-4xl font-bold">
            श्री ओसवाल जैन साजना साथ श्री संघ, इंदौर
          </h1>
          <p className="text-sm sm:text-md md:text-lg">
            11/1 मीरापथ पार्क रोड इंदौर मोबाइल नंबर 9424343560,9425901615
          </p>
        </div>
      </div>
    </div>
  );
}
